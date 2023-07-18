<template>
  <div class="mt-20">
    <div>
      <p class="text-6xl font-extrabold text-deep-purple leading-snug">
        Discover more <span class="gradient-word">AGEDB </span>benefits
      </p>
    </div>
    <div class="mt-10 flex flex-wrap justify-between md:justify-start">
      <Capsule
        class="mr-10 mb-5"
        text="Graph Database Services"
        :imageSrc="share"
        id="m3"
        marginRight="10rem"
      />
      <Capsule
        class="mr-10 mb-5"
        text="Recommendation System"
        :imageSrc="filter"
        id="m4"
        marginRight="10rem"
      />
    </div>
    <div class="mt-5 flex flex-wrap justify-between md:justify-start">
      <Capsule
        class="mr-10 mb-5"
        text="High Availability"
        :imageSrc="interactive"
        id="m5"
        marginRight="10rem"
      />
      <Capsule
        class="mr-10 mb-5"
        text="Relational Database Services"
        :imageSrc="layers"
        id="m6"
        marginRight="10rem"
      />
    </div>
    <div class="mt-5 flex flex-wrap justify-between md:justify-start">
      <Capsule
        class="mr-10 mb-5"
        text="Fraud Detection System"
        :imageSrc="share"
        id="m7"
        marginRight="10rem"
      />
      <Capsule
        class="mr-10 mb-5"
        text="Data Integration"
        :imageSrc="present"
        id="m8"
        marginRight="10rem"
      />
    </div>
    <div class="mt-5 flex flex-wrap justify-between md:justify-start">
      <Capsule
        class="mr-10 mb-5"
        text="Meta Data Expansion"
        :imageSrc="globe"
        id="m9"
        marginRight="10rem"
      />
      <Capsule
        class="mr-10 mb-5"
        text="Data Lineage"
        :imageSrc="disk"
        id="m10"
        marginRight="10rem"
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
