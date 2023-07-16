<template>
  <div class="flex justify-between items-center pt-2">
    <router-link :to="'/'">
      <img class="h-16 w-52" :src="logo" />
    </router-link>
    <div class="flex flex-wrap items-center">
      <router-link
        class="mr-10 font-Wix font-semibold text-purple hover:text-pink"
        to="/about"
        >Product</router-link
      >
      <router-link
        class="mr-10 font-Wix font-semibold text-purple hover:text-pink"
        to="/about"
        >Resources</router-link
      >
      <router-link
        class="mr-10 font-Wix font-semibold text-purple hover:text-pink"
        to="/about"
        >Price</router-link
      >
      <router-link
        class="mr-10 font-Wix font-semibold text-purple hover:text-pink"
        to="/about"
        >Company</router-link
      >
      <button
        class="rounded-full bg-pink px-5 py-3.5 text-white font-semibold hover:bg-white hover:text-pink"
      >
        Contact Us
      </button>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/logo.png";
</script>
