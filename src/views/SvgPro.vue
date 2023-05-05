
<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect
        width="300"
        height="100"
        style="fill: rgb(0, 0, 255); stroke-width: 1; stroke: rgb(0, 0, 0)"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <circle
        cx="100"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="2"
        fill="red"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <ellipse
        cx="150"
        cy="80"
        rx="100"
        ry="50"
        style="fill: yellow; stroke: purple; stroke-width: 2"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <line
        x1="0"
        y1="0"
        x2="200"
        y2="200"
        style="stroke: rgb(255, 0, 0); stroke-width: 2"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <polyline
        points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
        style="fill: white; stroke: red; stroke-width: 4"
      />
    </svg>
    <svg height="210" width="500">
        <text x="120" y="100" style="fill: yellow; font-size: 20px">我是文字标签</text>
      <polygon
        points="200,10 250,190 160,210"
        style="fill: lime; stroke: purple; stroke-width: 1"
      />
    </svg>
  </div>
</template>


<script setup>
import ids from "virtual:svg-icons-names";
import { ref, onMounted } from "vue";
onMounted(() => {
  console.log(ids);
});
</script>

<style scoped>
.sss {
  font-size: 40px;
  color: aqua;
  margin: 40px;
}

.circle-progress-wrap {
  margin: auto;

  width: 245px;

  margin-top: 24px;

  height: 245px;

  position: relative;

  background: url("~@/assets/img/progress_bg@2x.png") no-repeat top/contain;
}

.circle-progress-num {
  position: absolute;

  top: 78px;

  width: 100%;

  margin: auto;
}

.circle-progress-label {
  color: var(--hll-color-black-40);
}

.circle-progress-value {
  font-weight: 700;

  color: var(--hll-color-black-90);

  margin-top: 4px;

  line-height: 53px;

  height: 53px;

  font-size: 40px;
}

.circle-progress {
  margin-top: 35px;

  transform: rotate(44deg);
}

.progress {
  animation: circleProgress 2s;

  animation-iteration-count: 1;

  animation-fill-mode: forwards;
}

@keyframes circleProgress {
  0% {
    stroke-dashoffset: 500;

    stroke: #ffe19d;
  }

  100% {
    stroke-dashoffset: 150;

    stroke: #c4955b;
  }
}

.progress-33 {
  animation: circleProgress33 2s;

  animation-iteration-count: 1;

  animation-fill-mode: forwards;
}

@keyframes circleProgress33 {
  0% {
    stroke-dasharray: 0, 400;

    stroke: #ffe19d;
  }

  100% {
    stroke-dasharray: 132, 268;

    stroke: #c4955b;
  }
}

.progress-50 {
  animation: circleProgress50 2s;

  animation-iteration-count: 1;

  animation-fill-mode: forwards;
}

@keyframes circleProgress50 {
  0% {
    stroke-dasharray: 0, 534;

    stroke: #ffe19d;
  }

  100% {
    stroke-dasharray: 200, 334;

    stroke: #c4955b;
  }
}
</style>