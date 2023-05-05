<template>
  <div class="about">
    <h2>大文件分片上传</h2>

    <input ref="fileElemRef" type="file" class="file-input" @change="addFile" />

    <div
      :class="
        allowUpload ? 'start-upload' : 'start-upload start-upload-noallow'
      "
      @click="startUpload"
    >
      开始上传
    </div>

    <span>{{ chunkDoneTotal }}/{{ chunkTotal }}</span>
  </div>
</template>


<script setup>
import SparkMD5 from "spark-md5";
import axios from "axios";
import { ref, onMounted } from "vue";

const blobSlice =
  File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
const KB = 1024;
const MB = 1024 * KB;
const GB = 1024 * MB;

const fileElemRef = ref(null);
const chunkSize = ref(2 * MB);
const showChunkSize = ref(0);
const chunkTotal = ref(0);
const chunkDoneTotal = ref(0);
const fileHash = ref("");
const allowUpload = ref(false);

function addFile(e) {
  console.log(e.target.files[0], fileElemRef.value.files[0]);
  calFileHash(fileElemRef.value.files[0]);
}

// 计算文件哈希
function calFileHash(file) {
  chunkDoneTotal.value = 0;

  const fileSize = file.size;
  if (fileSize > 500 * MB) {
    chunkSize.value = 10 * MB;
    showChunkSize.value = true;
  } else if (fileSize > 100 * MB) {
    chunkSize.value = 5 * MB;
    showChunkSize.value = true;
  }

  return new Promise((resolve, reject) => {
    const chunks = Math.ceil(file.size / chunkSize.value);
    chunkTotal.value = chunks;

    const spark = new SparkMD5.ArrayBuffer();
    const fileReader = new FileReader();
    let currentChunk = 0;
    console.log("success", "正在读取文件计算哈希中，请耐心等待");

    fileReader.onload = function (e) {
      console.log("read chunk nr", currentChunk + 1, "of", chunks);
      spark.append(e.target.result); // Append array buffer
      currentChunk++;

      if (currentChunk < chunks) {
        loadNext();
      } else {
        chunkTotal.value = currentChunk;
        const hash = spark.end();
        fileHash.value = hash;
        allowUpload.value = true;

        console.log("success", "加载文件成功，文件哈希为" + hash);
        resolve(hash);
      }
    };

    fileReader.onerror = function () {
      console.log("error", "读取切分文件失败，请重试");
      reject("读取切分文件失败，请重试");
    };

    function loadNext() {
      var start = currentChunk * chunkSize.value,
        end =
          start + chunkSize.value >= file.size
            ? file.size
            : start + chunkSize.value;

      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
  }).catch((err) => {
    console.log(err);
  });
}

// 点击开始上传
const startUpload = async () => {
  if (!allowUpload.value) {
    console.log("warning", "正在读取文件计算哈希中，请耐心等待");
    return;
  }
  chunkDoneTotal.value = 0;
  // 1.获取文件
  if (!fileElemRef.value.files[0]) {
    console.log("error", "获取文件失败，请重试");
    return;
  }
  // 2.跟后台校验当前文件是否已经上传过 or 是否需要切换断点续传 返回数据中 res.data == 2(文件已上传过) 1(断点续传) 0(从未上传)
  const res = await postFileHash();
  if (res && res.type == 2) {
    console.log("warning", "检查成功，文件在服务器上已存在，不需要重复上传");
    return;
  } else {
    console.log("warning", "分片正在加紧上传中，请勿关闭网页窗口");
    // 3.初始化对应请求队列并执行
    await buildFormDataToSend(
      chunkTotal.value,
      fileElemRef.value.files[0],
      fileHash.value,
      res
    );
  }
};

const postFileHash = async () => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/hash_check", {
        hash: fileHash.value,
        chunkSize: chunkSize.value,
        total: chunkTotal.value,
      })
      .then((res) => {
        if (res.data.success) {
          resolve(res.data.data);
        }
      })
      .catch((err) => {
        reject(err);
        console.log("error", err);
      });
  });
};

// 构建HTTP FormData数据并请求，最后请求合并分片
const buildFormDataToSend = async (chunkCount, file, hash, res) => {
  const chunkReqArr = [];
  for (let i = 0; i < chunkCount; i++) {
    if (
      res.type == 0 ||
      (res.type == 1 &&
        res.index &&
        res.index.length > 0 &&
        !res.index.includes(i.toString()))
    ) {
      // 构建需要上传的分片数据
      const start = i * chunkSize.value;
      const end = Math.min(file.size, start + chunkSize.value);
      const form = new FormData();
      form.append("file", blobSlice.call(file, start, end));
      form.append("name", file.name);
      form.append("total", chunkCount);
      form.append("chunkSize", chunkSize.value);
      form.append("index", i);
      form.append("size", file.size);
      form.append("hash", hash);
      const chunkReqItem = axios.post("/api/chunks_upload", form, {
        onUploadProgress: (e) => {
          // e为ProgressEvent，当loaded===total表明该分片上传完成
          if (e.loaded === e.total) {
            chunkDoneTotal.value += 1;
          }
        },
      });
      chunkReqArr.push(chunkReqItem);
    }
  }

  for (let item of chunkReqArr) {
    await item;
  }
  console.log("success", "分片上传完成，正在请求合并分片");
  // 合并chunks
  const data = {
    chunkSize: chunkSize.value,
    name: file.name,
    total: chunkTotal.value,
    hash: fileHash.value,
  };
  postChunkMerge(data);
};

// 发送合并分支请求
const postChunkMerge = async (data) => {
  axios
    .post("/api/chunks_merge", data)
    .then((res) => {
      if (res.data.success) {
        chunkDoneTotal.value = chunkTotal.value;
        console.log("success", "文件分片上传完结并合并成功");
      } else {
        console.log("error", res.data.msg);
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};
</script>

<style scoped>
.start-upload {
  flex: 1;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: rgb(81, 111, 250);
  border-radius: 5px;
  cursor: pointer;
}
.start-upload-noallow {
  cursor: no-drop;
}
</style>
