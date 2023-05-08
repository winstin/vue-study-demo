

<template>
  <div>
    <header>
      <nav>
        <RouterLink v-for="item in routes" :key="item.path" :to="item.path">
          {{ item.name }}
        </RouterLink>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/UploadLargeFile">UploadLargeFile</RouterLink>
        <RouterLink to="/SvgView">SvgView</RouterLink>
        <RouterLink to="/SvgPro">SvgPro</RouterLink>
        <RouterLink to="/GridView">GridView</RouterLink> -->
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import router from "@/router";
import { ref, onMounted } from "vue";

const routes = ref([]);
onMounted(() => {
  console.log(router);
  routes.value = router.getRoutes();
});
</script>

<style scoped>
header {
  line-height: 1.5;
  height: 60px;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
