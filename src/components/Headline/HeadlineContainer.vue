<template>
  <div class="mt-8 pt-40 pb-10 px-28 rounded-3xl intro-container">
    <img :src="Headline" alt="" />
    <div class="w-2/5 mt-10 text-white leading-8 text-lg">
      <p>
        We are a reliable and innovative data solution provider that offers
        advanced database management services with our own graph and relational
        database products. As one of top contributors to Apache AGE project, we
        shape the future of data management.
      </p>
      <button
        class="mt-10 mr-7 rounded-3xl px-8 py-2 outline hover:bg-white hover:text-purple"
      >
        Contact Us
      </button>
      <Arrow class="mt-10 text-white" link-text="Learn More About Apache AGE" />
    </div>
  </div>
</template>

<script setup>
import Headline from "../../assets/Headline.png";
import Arrow from "./HeadlineArrow.vue";
</script>

<style scoped>
.intro-container {
  background-image: url("../../assets/textBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
