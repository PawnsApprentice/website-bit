<template>
  <a href="#" class="link-deep-purple">
    <span class="mr-2 text-deep-purple font-extrabold">{{ linkText }}</span>
    <svg>
      <defs>
        <marker
          id="m1"
          markerWidth="4"
          markerHeight="8"
          refX="0"
          refY="1"
          viewBox="0 0 1 2"
        >
          <polygon points="0,0 1,1 0,2" fill="#150136" />
        </marker>
      </defs>
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke-width="1"
        marker-end="url(#m1)"
        stroke="#150136"
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
.link-deep-purple {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.link-deep-purple:hover > span {
  text-decoration: underline;
}

.link-deep-purple:hover > svg {
  width: 40px;
}

.link-deep-purple svg {
  width: 20px;
  height: 20px;
  transition: width 0.5s ease;
  overflow: visible;
}
.link-deep-purple polygon {
  fill: #150136;
}
</style>
