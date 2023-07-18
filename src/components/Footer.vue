<template>
  <div class="pt-10 pb-20 px-20 bg-card text-purple">
    <router-link :to="'/'">
      <img class="h-14 w-44" :src="logo" />
    </router-link>
    <div class="flex justify-between">
      <div class="flex justify-between w-1/4">
        <div>
          <p class="block uppercase font-bold mt-10 text-lg">About</p>
          <a class="block uppercase font-medium mt-3" href="">agedb</a>
          <a class="block font-medium mt-3" href="">Careers</a>
          <a class="block font-medium mt-3" href="">Privacy Policy</a>
        </div>
        <div>
          <p class="block uppercase font-bold mt-10 text-lg">Resources</p>
          <a class="block uppercase font-medium mt-3" href="">Use Cases</a>
          <a class="block font-medium mt-3" href="">Blogs</a>
        </div>
      </div>
      <div class="mr-40 md:mr-0">
        <div class="mt-7 flex items-center">
          <img class="mr-3" src="/src/assets/twitter.png" alt="Twitter" />
          <Arrow link-text="Cotch our latest updates on twitter" />
        </div>
        <div class="mt-3 flex items-center">
          <img class="mr-3" src="/src/assets/linkedin.png" alt="Linkedin" />
          <Arrow link-text="Join our prof network on Linkedin" />
        </div>
        <div class="mt-3 flex items-center">
          <img class="mr-3" src="/src/assets/discord.png" alt="Discord" />
          <Arrow link-text="Connect with developers on Discord" />
        </div>
        <div class="mt-3 flex items-center">
          <img class="mr-3" src="/src/assets/reddit.png" alt="Reddit" />
          <Arrow link-text="Ask and answer on Reddit forum" />
        </div>
        <div class="mt-3 flex items-center">
          <img class="mr-3" src="/src/assets/github.png" alt="Github" />
          <Arrow link-text="Download and contribute on Github" />
        </div>
      </div>
    </div>

    <p class="font-medium text-sm">
      &copy; 2023 Advanced Graph Enterprise Database Inc.
    </p>
  </div>
</template>

<script setup>
import logo from "../assets/logo.png";
import Arrow from "../components/Arrow.vue";
</script>
