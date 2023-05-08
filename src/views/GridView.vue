

<template>
  <div>
    <div class="grid-box-1">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
    </div>

    <div class="grid-box-3">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>

    <p>不确定容器尺寸下的自动填充</p>
    <div class="grid-box-6">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
    </div>

    <p>填充缺口</p>
    <div class="grid-box-9">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>

    <p>元素的对齐</p>
    <div class="grid-box-10">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.grid-box-1 {
  /* border: 1px solid #999; */
  width: 300px;
  height: 200px;
  display: grid;
  margin: 20px 0px;
  grid-template-columns: 1fr 1fr 1fr; /* 指定 3 列*/
  grid-template-rows: 1fr 1fr; /* 指定 2行 */
  grid-auto-rows: 40px; /* 添加隐式网格的行高30px */
}
.grid-box-1 > div {
  background-color: bisque;
  border: 1px solid #ccc;
}

.grid-box-3 {
  width: 300px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: 40px; /* 添加隐式网格的行高30px */

  /* grid-column-gap: 2px;
  grid-row-gap: 6px; */
  gap: 2px 2px;
}
.grid-box-3 > div {
  background-color: bisque;
  border: 1px solid #ccc;
}
.grid-box-3 > div:nth-of-type(1) {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2; /* 如果只占一行或一列，grid-xx-end属性可以不用写 */

  /* 等同于下面的代码 */
  grid-area: 1 / 1 / 3 / 5; /* 这里的顺序是：row-start / column-start / row-end / column-end */
}
.grid-box-3 > div:nth-of-type(2) {
  grid-row: 3 / 4; /* grid-row 是 grid-row-start 和 grid-row-end的缩写 */
}
.grid-box-3 > div:nth-of-type(3) {
  grid-column: 2 / span 2; /* span表示占据几行，这里表示从2开始，占据2行，也就是网格线2到4 */
}
.grid-box-3 > div:nth-of-type(5) {
  grid-column: 1 / span 1;
}
.grid-box-3 > div:nth-of-type(6) {
  grid-column: 2 / span 3;
}

/* Grid 容器尺寸不固定，自动适配子元素 */
.grid-box-6 {
  border: 1px solid #999;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}
.grid-box-6 > div {
  height: 50px;
  background-color: bisque;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.grid-box-9 {
  width: 200px;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 50px;
  grid-auto-flow: row dense;
}
.grid-box-9 > div {
  background-color: bisque;
  border: 1px solid #ccc;
}
.grid-box-9 > div:nth-of-type(1) {
  grid-column-end: span 3;
}
.grid-box-9 > div:nth-of-type(2n) {
  grid-column-end: span 2;
  grid-row-end: span 2;
}

.grid-box-10 {
  width: 200px;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 50px;
  grid-auto-flow: row dense;
  align-items:center;
}
.grid-box-10 > div {
  background-color: bisque;
  border: 1px solid #ccc;
}
</style>