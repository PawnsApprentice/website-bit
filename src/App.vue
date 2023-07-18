<template>
  <div class="bg-background px-12 pb-32 font-Wix">
    <main-nav />
    <router-view />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
</script>

<style scoped></style>
