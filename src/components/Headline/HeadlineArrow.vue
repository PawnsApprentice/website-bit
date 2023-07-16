<template>
  <a href="#" class="link-white flex items-center">
    <span class="mr-2 text-white font-bold">{{ linkText }}</span>
    <svg>
      <defs>
        <marker
          id="m2"
          markerWidth="4"
          markerHeight="8"
          refX="0"
          refY="1"
          viewBox="0 0 1 2"
        >
          <polygon points="0,0 1,1 0,2" fill="white" />
        </marker>
      </defs>
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke-width="1"
        marker-end="url(#m2)"
        stroke="white"
      />
    </svg>
  </a>
</template>

<script setup>
const props = defineProps({
  linkText: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.link-white {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.link-white:hover > span {
  text-decoration: underline;
}

.link-white:hover > svg {
  width: 40px;
}

.link-white svg {
  width: 20px;
  height: 20px;
  transition: width 0.5s ease;
  overflow: visible;
}
</style>
