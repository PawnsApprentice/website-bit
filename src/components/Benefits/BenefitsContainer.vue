<template>
  <div class="mt-20">
    <div>
      <p class="text-6xl font-extrabold text-deep-purple leading-snug">
        Discover more <span class="gradient-word">AGEDB </span>benefits
      </p>
    </div>
    <div class="mt-10 flex justify-between">
      <Capsule
        marginRight="10rem"
        text="Graph Database Services"
        :imageSrc="share"
        id="m3"
      />
      <Capsule
        marginRight="10rem"
        text="Recommendation System"
        :imageSrc="filter"
        id="m4"
      />
      <Capsule
        marginRight="10rem"
        text="High Availability"
        :imageSrc="interactive"
        id="m5"
      />
    </div>
    <div class="mt-5 flex justify-between">
      <Capsule
        marginRight="7rem"
        text="Relational Database Services"
        :imageSrc="layers"
        id="m6"
      />
      <Capsule
        marginRight="10rem"
        text="Fraud Detection System"
        :imageSrc="share"
        id="m7"
      />
      <Capsule
        marginRight="10rem"
        text="Data Integration"
        :imageSrc="present"
        id="m8"
      />
    </div>
    <div class="mt-5 flex">
      <Capsule
        class="mr-64"
        marginRight="10rem"
        text="Meta Data Expansion"
        :imageSrc="globe"
        id="m9"
      />
      <Capsule
        class="ml-4"
        marginRight="10rem"
        text="Data Lineage"
        :imageSrc="disk"
        id="m10"
      />
    </div>
  </div>
</template>

<script setup>
import Capsule from "../Benefits/BenefitsCapsule.vue";
import share from "../../assets/share.png";
import disk from "../../assets/disk.png";
import filter from "../../assets/filter.png";
import globe from "../../assets/globe.png";
import interactive from "../../assets/interactive.png";
import layers from "../../assets/layers.png";
import present from "../../assets/presentation.png";
import shield from "../../assets/shield-warning.png";
</script>

<style scoped>
.gradient-word {
  background: linear-gradient(90deg, #8437e6 0%, #f73877 100%);
  background-clip: text;
  text-decoration-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
