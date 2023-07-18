<template>
  <div class="w-5/12 bg-card py-32 px-10 rounded-xl text-deep-purple">
    <p class="uppercase text-pink font-semibold tracking-widest">
      for medium and large corporations
    </p>
    <p class="mt-10 text-5xl font-semibold">
      <span class="font-extrabold">AgeDB </span>
      <span class="gradient-word">Enterprise</span>
    </p>
    <p class="mt-10 w-2/3 text-xl">
      Optimize the Apache AGE utility with complete enterprise tools and
      dedicated professional services.
    </p>
    <p class="font-semibold uppercase text-lg mt-10">software</p>
    <p class="text-xl mt-4 font-extrabold">
      <img
        class="inline-block mr-2"
        src="../../assets/checkmark.svg"
        alt="checkmark"
      />
      AgeDB Community
    </p>
    <p class="text-xl mt-3 font-extrabold">
      <img
        class="inline-block mr-2"
        src="../../assets/checkmark.svg"
        alt="checkmark"
      />
      AgensSQL
    </p>
    <p class="text-xl mt-3 font-extrabold">
      <img
        class="inline-block mr-2"
        src="../../assets/checkmark.svg"
        alt="checkmark"
      />
      AEM &amp; AHM
    </p>
    <p class="font-semibold uppercase text-lg mt-10">support</p>
    <p class="text-xl mt-4">
      <img
        class="inline-block mr-2"
        src="../../assets/checkmark.svg"
        alt="checkmark"
      />
      Dedicated and instant
      <span class="font-extrabold">24/7 Support &amp; Monitoring</span>
    </p>
    <p class="text-xl mt-3">
      <img
        class="inline-block mr-2"
        src="../../assets/checkmark.svg"
        alt="checkmark"
      />
      Support timeframe: 24 hours
    </p>
    <div class="mt-15 flex items-center">
      <button
        class="rounded-full bg-pink mt-10 px-5 md:px-10 py-10 md:py-5 text-white font-semibold hover:bg-white hover:text-pink md:flex md:flex-row"
      >
        <span class="md:inline-block">Contact</span>
        <span class="md:inline-block ml-2">Us</span>
      </button>
      <Arrow class="ml-5 mt-10 text-xl" link-text="Learn More" />
    </div>
  </div>
</template>

<script setup>
import Arrow from "../../components/Arrow.vue";
</script>

<style scoped>
.gradient-word {
  background: linear-gradient(270deg, #150136 0%, #f73877 100%);
  background-clip: text;
  text-decoration-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
