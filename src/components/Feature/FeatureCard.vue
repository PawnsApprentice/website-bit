<template>
  <div class="bg-card card py-12 pl-12 rounded-lg">
    <img :src="imageSrc" :alt="imageAlt" />
    <p class="mt-7 text-deep-purple text-2xl font-extrabold">{{ title }}</p>
    <p class="mt-7 text-purple font-medium">{{ description }}</p>
    <Arrow class="mt-10" link-text="Learn More" />
  </div>
</template>

<script setup>
import Arrow from "../../components/Arrow.vue";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.card {
  width: 32rem;
}
</style>
