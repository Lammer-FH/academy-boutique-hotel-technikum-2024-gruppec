<script>
import { RouterView } from 'vue-router';
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar
  }
}

</script>

<template>
  <div id="app">
    <NavBar />
    <div class="main-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

.main-container {
  padding-top: 70px;
}

</style>
