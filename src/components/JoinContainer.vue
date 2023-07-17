<template>
  <div class="mt-20">
    <p class="text-6xl font-extrabold text-deep-purple leading-snug">
      Join us,
    </p>
    <p class="text-6xl font-extrabold text-deep-purple leading-snug">
      let's build better
    </p>
  </div>
  <div class="flex justify-between">
    <div
      class="w-5/12 community-container py-28 px-10 text-white rounded-3xl mt-10"
    >
      <p class="uppercase text-xl tracking-widest">vancouver / on-site</p>
      <p class="text-5xl font-bold tracking-wide mt-8">Community</p>
      <p class="text-5xl font-bold tracking-wide mt-4">Operation</p>
      <p class="text-5xl font-bold tracking-wide mt-4">Manager</p>
      <Arrow class="mt-20 text-2xl" linkText="Learn More" />
    </div>
    <div
      class="w-5/12 software-container py-28 px-10 text-white rounded-3xl mt-10"
    >
      <p class="uppercase text-xl tracking-widest">global / remote</p>
      <p class="text-5xl font-bold tracking-wide mt-8">Software</p>
      <p class="text-5xl font-bold tracking-wide mt-4">Engineering</p>
      <p class="text-5xl font-bold tracking-wide mt-4">Intern</p>
      <Arrow class="mt-20 text-2xl" linkText="Learn More" />
    </div>
  </div>
</template>

<script setup>
import Arrow from "../components/Headline/HeadlineArrow.vue";
</script>

<style scoped>
.community-container {
  background-image: url("../assets/studio1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.software-container {
  background-image: url("../assets/studio2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
