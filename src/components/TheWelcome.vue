

<template>
  <div class="about">
    <h1>Mouse position is at: {{ x }}, {{ y }}</h1>
  </div>
</template>


<script setup>
import { useMouse } from "./mouse.js";

const { x, y } = useMouse();
</script>
