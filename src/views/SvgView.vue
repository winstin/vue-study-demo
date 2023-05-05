
<template>
  <div>
    <svg width="400" height="400">
      <defs>
        <path id="fly-path" d="M 5 5 L 395 5 L 395 395 L 5 395Z" />
      </defs>

      <radialGradient
        id="flyRadialId"
        cx="50%"
        cy="50%"
        fx="100%"
        fy="50%"
        r="50%"
      >
        <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
        <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
      </radialGradient>

      <mask id="fly-mask">
        <circle r="80" cx="0" cy="0" fill="url(#flyRadialId)">
          <animateMotion
            dur="3s"
            path="M 5 5 L 395 5 L 395 395 L 5 395Z"
            repeatCount="indefinite"
            rotate="auto"
          />
        </circle>
      </mask>
      <use href="#fly-path" fill="#000" stroke="#000" stroke-width="1"></use>
      <use
        href="#fly-path"
        fill="#000"
        stroke="#4fd2dd"
        stroke-width="5"
        mask="url(#fly-mask)"
      ></use>
    </svg>
    <svg width="100%" height="100%" viewBox="0 0 500 500">
      <!-- 需要执行动画的元素 -->
      <rect x="0" y="0" width="50" height="4" fill="rgba(0, 255, 255, 0.5)">
        <!-- 方式一 -->
        <!-- <animateMotion
          path="M 0 0 L 100 100 A 200 200 0 1 0 0 -100"
          dur="3s"
          rotate="auto"
        /> -->

        <!-- 方式二 -->
        <animateMotion dur="10s" rotate="auto" repeatCount="indefinite">
          <mpath xlink:href="#motion-path" />
        </animateMotion>
      </rect>
      <!-- 轨迹 -->
      <!-- <path
        id="motion-path"
        d="M 0 0 L 100 100 A 200 200 0 1 0 0 -100"
        fill="none"
        stroke="green"
      /> -->
      <path
        id="motion-path"
        d="M 5 5 L 395 5 L 395 395 L 5 395Z"
        fill="none"
        stroke="black"
      />
      <circle r="80" cx="200" cy="200" fill="blue"></circle>
    </svg>
    <svg-icon name="logo" class="sss" />
    <svg-icon name="icon1" class="sss" />
    <svg-icon name="icon2" class="sss" />
    <svg-icon name="icon3" class="sss" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      fill-rule="evenodd"
      xml:space="preserve"
    >
      <circle cx="0" cy="0" r="15">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          keyPoints="0;.5;1"
          keyTimes="0;.1;1"
          path="M 10 50 Q 30 0 50 50 T 90 50"
        ></animateMotion>
      </circle>
    </svg>

    <svg
      width="125"
      height="117"
      viewBox="0 0 125 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M83.8395 58.1957C83.8395 74.1393 81.3312 88.5106 77.3239 98.8453C75.3185 104.017 72.9647 108.108 70.4216 110.882C67.8795 113.655 65.2548 115.006 62.6594 115.006C60.0641 115.006 57.4393 113.655 54.8972 110.882C52.3542 108.108 50.0004 104.017 47.995 98.8453C43.9876 88.5106 41.4794 74.1393 41.4794 58.1957C41.4794 42.2521 43.9876 27.8808 47.995 17.5461C50.0004 12.3742 52.3542 8.28359 54.8972 5.50965C57.4393 2.73668 60.0641 1.38561 62.6594 1.38561C65.2548 1.38561 67.8795 2.73668 70.4216 5.50965C72.9647 8.28359 75.3185 12.3742 77.3239 17.5461C81.3312 27.8808 83.8395 42.2521 83.8395 58.1957Z"
        stroke="blue"
        stroke-width="2.77122"
      ></path>
      <path
        d="M52.068 76.5376C38.2605 68.5658 27.0687 59.2079 20.1222 50.5701C16.646 46.2474 14.2803 42.1636 13.1495 38.5743C12.0191 34.9863 12.1614 32.0377 13.4591 29.79C14.7568 27.5424 17.2392 25.9449 20.9117 25.1298C24.5855 24.3144 29.305 24.3213 34.7867 25.1705C45.7405 26.8674 59.4406 31.8808 73.2481 39.8526C87.0556 47.8244 98.2474 57.1823 105.194 65.8201C108.67 70.1428 111.036 74.2265 112.167 77.8158C113.297 81.4039 113.155 84.3525 111.857 86.6001C110.559 88.8478 108.077 90.4453 104.404 91.2604C100.731 92.0757 96.0111 92.0689 90.5294 91.2197C79.5756 89.5228 65.8755 84.5093 52.068 76.5376Z"
        stroke="blue"
        stroke-width="2.77122"
      ></path>
      <path
        d="M73.2503 76.5376C87.0579 68.5658 98.2497 59.2079 105.196 50.5701C108.672 46.2474 111.038 42.1636 112.169 38.5743C113.299 34.9863 113.157 32.0377 111.859 29.79C110.562 27.5424 108.079 25.9449 104.407 25.1298C100.733 24.3144 96.0133 24.3213 90.5317 25.1705C79.5779 26.8674 65.8778 31.8808 52.0703 39.8526C38.2627 47.8244 27.0709 57.1823 20.1245 65.8201C16.6482 70.1428 14.2825 74.2265 13.1517 77.8158C12.0214 81.4039 12.1636 84.3525 13.4613 86.6001C14.759 88.8478 17.2414 90.4453 20.914 91.2604C24.5878 92.0757 29.3073 92.0689 34.7889 91.2197C45.7427 89.5228 59.4428 84.5093 73.2503 76.5376Z"
        stroke="blue"
        stroke-width="2.77122"
      ></path>
      <circle r="4.90386" fill="blue" />
      <circle r="4.90386" fill="blue" />
    </svg>

    <svg
      width="400"
      height="120"
      viewBox="0 0 480 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 省略 theMotionPath，可以随便画个轨迹 -->

      <!-- Red arrow which will not rotate -->
      <path fill="red" d="M-5,-5 L10,0 -5,5 0,0 Z">
        <!-- Define the motion path animation -->
        <animateMotion dur="10s" repeatCount="indefinite" rotate="0">
          <mpath href="#theMotionPath" />
        </animateMotion>
      </path>

      <!-- Green arrow which will not rotate -->
      <path fill="green" d="M-5,-5 L10,0 -5,5 0,0 Z">
        <!-- Define the motion path animation -->
        <animateMotion
          begin="2s"
          dur="10s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#theMotionPath" />
        </animateMotion>
      </path>

      <!-- Orange arrow which will not rotate -->
      <path fill="orange" d="M-5,-5 L10,0 -5,5 0,0 Z">
        <!-- Define the motion path animation -->
        <animateMotion
          begin="4s"
          dur="10s"
          repeatCount="indefinite"
          rotate="auto-reverse"
        >
          <mpath href="#theMotionPath" />
        </animateMotion>
      </path>

      <path
        id="theMotionPath"
        d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z"
        fill="none"
        stroke="green"
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
</style>