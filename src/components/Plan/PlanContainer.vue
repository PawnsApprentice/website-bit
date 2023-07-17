<template>
  <div class="mt-20">
    <div class="text-container">
      <p class="text-6xl font-extrabold text-deep-purple leading-snug">
        Find out the most suitable <span class="gradient-word">AGEDB </span>plan
        for your business
      </p>
    </div>
    <div class="mt-20">
      <div class="flex flex-wrap justify-between">
        <PlanCardCom />
        <PlanCardEnt />
      </div>
    </div>
  </div>
</template>

<script setup>
import PlanCardCom from "./PlanCardCommunity.vue";
import PlanCardEnt from "./PlanCardEnterprise.vue";
</script>

<style scoped>
.text-container {
  width: 45rem;
}

.gradient-word {
  background: linear-gradient(90deg, #8437e6 0%, #f73877 100%);
  background-clip: text;
  text-decoration-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
