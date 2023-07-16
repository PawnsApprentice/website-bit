<template>
  <div class="flex justify-between">
    <FeatureCard
      :imageSrc="physicsImage"
      imageAlt="Physics"
      title="Looking to Migrate from Oracle database?"
      description="We offer enterprise-grade relational database solution, which ensures efficient data management with no compromise on performance."
    />
    <FeatureCard
      :imageSrc="speedImage"
      imageAlt="Speed"
      title="Need Advanced Data Analytics and Insights?"
      description="Tap into your data's full potential with AgeDB's advanced analytics capabilities. Gain deep insights and make data-driven decisions effortlessly."
    />
    <FeatureCard
      :imageSrc="medalImage"
      imageAlt="Medal"
      title="Seeking a Enterprise Postgres Upgrade?"
      description="Experience enhanced performance, scalability, and security with AgeDB's Postgres and AgensSQL solution. Make your data management hassle-free and efficient."
    />
  </div>
</template>

<script setup>
import FeatureCard from "./FeatureCard.vue";
import physicsImage from "../../assets/physics.png";
import speedImage from "../../assets/speed.png";
import medalImage from "../../assets/medal.png";
</script>
