<template>
  <div class="mt-24 mb-28 pr-40">
    <p class="text-grey font-semibold text-4xl leading-relaxed">
      We're <hover-word href="https://example.com"> AgeDB </hover-word> a
      company that provides enterprise-grade
      <hover-word href="https://example.com"
        >relational and graph databases </hover-word
      >. We also offer expert
      <hover-word href="https://example.com">services</hover-word> to manage
      this databases. Proudly, we contribute to a top level Apache project
      called <hover-word href="https://example.com">Apache AGE</hover-word>,
      which makes Postgres even better by adding cool
      <hover-word href="https://example.com"
        >graph database functionality</hover-word
      >.
    </p>
  </div>
</template>

<script setup>
import HoverWord from "./HoverWord.vue";
</script>
