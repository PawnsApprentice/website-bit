<template>
  <a
    :href="href"
    class="underline-link"
    :class="{ hovered: hoverEffect }"
    @mouseover="hoverEffect = true"
    @mouseleave="hoverEffect = false"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot></slot>
    <span v-if="hoverEffect" class="icon">
      <img src="../../assets/link.png" alt="Icon" />
    </span>
  </a>
</template>

<script setup>
import { ref } from "vue";

const hoverEffect = ref(false);

const props = {
  href: {
    type: String,
    required: true,
  },
};
</script>

<style scoped>
.underline-link {
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: #150136;
  background: linear-gradient(90deg, #8437e6 0%, #f73877 100%);
  background-clip: text;
  text-decoration: underline;
  text-decoration-color: grey;
  text-underline-offset: 13px;
}

.underline-link.hovered {
  text-decoration-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.underline-link::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #8437e6 0%, #f73877 100%);
  transform-origin: bottom right;
  transition: transform 0.4s ease-out;
}

.underline-link.hovered::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.icon {
  position: absolute;
  top: -0.5rem;
  right: -2rem;
  width: 2.5rem;
}
</style>
