<template>
  <a class="link" href="#">
    <div class="bg-card py-5 px-5 rounded-2xl text-deep-purple font-bold">
      <img class="inline-block h-7 mr-4" :src="imageSrc" alt="" />
      <span :style="`margin-right: ${marginRight};`">{{ text }}</span>
      <svg>
        <defs>
          <marker
            :id="markerId"
            markerWidth="4"
            markerHeight="8"
            refX="0"
            refY="1"
            viewBox="0 0 1 2"
          >
            <polygon id="arrow" points="0,0 1,1 0,2" fill="#150136" />
          </marker>
        </defs>
        <line
          id="line"
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke-width="1"
          :marker-end="`url(#${markerId})`"
          stroke="#150136"
        />
      </svg>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: "m4",
  },
  marginRight: {
    type: String,
    default: "0",
  },
  text: {
    type: String,
    default: "Graph Database Services",
  },
  imageSrc: {
    type: String,
    default: "../../assets/share.png",
  },
});
const markerId = props.id;
</script>

<style scoped>
.link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.link:hover svg {
  width: 40px;
}

.link:hover svg #arrow {
  fill: white; /* Set the fill color to card color on hover */
}

.link:hover svg #line {
  stroke: white; /* Set the fill color to card color on hover */
}
.link:hover > div {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: #f3eafc;
  background-color: #150136;
}
.link svg {
  display: inline;
  width: 20px;
  height: 20px;
  transition: width 0.5s ease;
  overflow: visible;
}
</style>
