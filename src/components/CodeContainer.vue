<template>
  <div class="w-full flex mt-10 bg-card py-12 px-12 rounded-lg">
    <div class="w-1/2 mr-16">
      <span class="text-deep-purple font-extrabold text-3xl"
        >What is Apache AGE?</span
      >
      <p class="mt-10 text-deep-purple font-medium leading-8">
        Apache AGE® is a PostgreSQL extension that provides graph database
        functionality. The goal of Apache AGE® is to provide graph data
        processing and analytics capability to all relational databases.
      </p>
      <button
        class="rounded-full bg-pink mt-10 px-12 py-3.5 text-white font-semibold hover:bg-white hover:text-pink"
      >
        View Full Document
      </button>
      <div class="mt-10 flex items-center">
        <img class="mr-3" src="/src/assets/discord.png" alt="Discord" />
        <Arrow link-text="Connect with developers on Discord" />
      </div>
      <div class="mt-3 flex items-center">
        <img class="mr-3" src="/src/assets/reddit.png" alt="Discord" />
        <Arrow link-text="Ask and answer on Reddit forum" />
      </div>
      <div class="mt-3 mb-28 flex items-center">
        <img class="mr-3" src="/src/assets/github.png" alt="Discord" />
        <Arrow link-text="Download and contribute on Github" />
      </div>
    </div>
    <div class="w-1/2 flex font-Roboto">
      <div
        class="w-32 h-full flex flex-col items-center bg-light-purple rounded-tl-3xl"
      >
        <span class="text-white mt-10">1</span>
        <span class="text-white mt-4">2</span>
        <span class="text-white mt-4">3</span>
        <span class="text-white mt-4">4</span>
        <span class="text-white mt-4">5</span>
        <span class="text-white mt-4">6</span>
        <br />
        <span class="text-white mt-4">7</span>
        <br />
        <span class="text-white mt-4">8</span>
      </div>
      <div class="w-full h-full bg-deep-purple pl-7">
        <p class="text-peach mt-10"># To create an edge and set properties.</p>
        <p class="text-white mt-14">
          <span class="uppercase">select </span>
          <span class="text-faded-purple">*</span>
        </p>
        <p class="text-white mt-4">
          <span class="uppercase">from </span>
          <span> cypher&lpar; </span>
          <span class="text-faded-green">'graph_name' </span>
          <span>, $$</span>
        </p>
        <p class="text-white mt-4">
          <span class="uppercase">match </span>
          <span> &lpar;a:label&rpar;,&nbsp;&nbsp;&lpar;b:label&rpar; </span>
        </p>
        <p class="text-white mt-4">
          <span class="uppercase">where </span>
          <span>a.property = </span>
          <span class="text-faded-green">'Node A' </span>
          <span class="uppercase">and </span>
          <span>b.property =</span>
        </p>
        <p class="text-white mt-2">
          <span class="text-faded-green">'Node B' </span>
        </p>
        <p class="text-white mt-2">
          <span class="uppercase">create </span>
          <span> &lpar;a&rpar;-[e:]</span>
          <span class="uppercase">RELTYPE </span>
          <span>&#123;property:a.property +</span>
        </p>
        <p class="text-white mt-2">
          <span class="text-faded-green">'&lt->' </span>
          <span> + b.property&#125;]-></span>
          <span class="text-faded-green">'&lpar;b&rpar;' </span>
          <span class="uppercase">return </span>
          <span>e</span>
        </p>
        <p class="text-white mt-2">
          <span>$$&rpar; as {e agtype};</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Arrow from "../components/Arrow.vue";
</script>
