<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="w-full h-full bg-gray-8 text-gray-4">
    <AppHeader />
    <div class="md:hidden">
      <img
        class="object-cover w-full"
        src="/images/about.png"
        alt="Hoodratz about"
      />
    </div>

    <!-- Content -->
    <div class="relative mx-4 md:container md:mx-auto">
      <img
        class="absolute hidden  xl:left-1/2 xl:top-0 lg:block lg:top-0 lg:left-1/2"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <div class="md:grid md:grid-cols-2 md:mx-32 md:mt-24">
        <div class="relative flex mb-8 md:mb-0 md:items-center">
          <img
            class="absolute hidden  xl:top-96 xl:-left-44 lg:top-3/4 lg:-left-56 lg:block"
            src="/images/home/hoodratz-ellipse-1424.svg"
            alt=""
          />
          <div class="relative">
            <div class="relative">
              <div class="w-64 -ml-4">
                <img src="/images/about-txt.svg" alt="About" />
              </div>
              <h1
                class="absolute inset-0 mt-8 tracking-widest uppercase  text-pink-3 font-sora"
              >
                About
              </h1>
            </div>

            <h2 class="mb-4 text-3xl text-white font-kumbh-bold md:text-5xl">
              The Hoodratz Story
            </h2>

            <p class="leading-7 font-sora">
              Hoodratz are uniquely generated, cute and collectible rats with
              proof of ownership stored on the Solana blockchain. All individual
              pieces of the Hoodratz world have been created by hand and were
              algorithmically generated using custom code that we created to
              share with the community.
            </p>

            <p class="mt-3 leading-7 font-sora">
              There are 165 attributes across 18 categories: These categories
              include background, body, type, pattern, tail, expression, mouth,
              eyes, skin, glasses, facial hair, hat/hair, mouth accessories,
              earring, neck, blankets, flags and best of all, cigars! With these
              combined, it gives a total mathematical combination of millions of
              unique Hoodratz - but with only 10,000 being minted, some are more
              unique and rare than others.
            </p>

            <img
              class="absolute hidden  xl:left-3/4 xl:top-full lg:block lg:top-3/4 lg:left-full"
              src="/images/home/hoodratz-ellipse-103.png"
              alt=""
            />
          </div>
        </div>

        <div class="relative hidden md:block md:-ml-20">
          <div><img src="/images/about-cover.png" alt="" /></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-80 lg:w-96 xl:w-108">
              <img src="/images/about-desktop.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="relative lg:grid lg:grid-cols-2 md:mx-32">
        <div>
          <div class="relative">
            <img
              class="absolute hidden  xl:left-36 xl:-top-14 lg:block lg:-top-14 lg:left-36"
              src="/images/home/hoodratz-ellipse-88.png"
              alt=""
            />
            <div class="absolute inset-x-0 top-0 -ml-4">
              <img src="/images/the-team.svg" alt="The Team" />
            </div>
            <h1 class="mt-8 tracking-widest uppercase text-pink-3 font-sora">
              The Team
            </h1>
          </div>
          <h2 class="my-4 text-3xl text-white font-kumbh-bold md:text-5xl">
            Who's behind it all?
          </h2>
          <p class="leading-7 font-sora">
            We are a small group of friends with the same vision and goal. Our
            core principles have always been to deliver the best possible NFT
            user experience from launch as well as creating collectible art with
            utility.
          </p>
        </div>
        <img
          class="absolute top-0 right-0 md:hidden lg:block"
          src="/images/home/hoodratz-plain-cone.png"
          alt=""
        />
        <img
          class="absolute hidden  xl:left-1/2 xl:-top-14 lg:block lg:top-24 lg:left-1/2"
          src="/images/home/hoodratz-ellipse-97.png"
          alt=""
        />
      </div>

      <div
        class="relative mt-12 mb-20  md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-6 md:mx-4"
      >
        <div
          class="flex px-8 py-6 my-6 md:flex-col bg-gray-7 rounded-4xl"
          v-for="(item, index) in team"
        >
          <div class="w-16 mr-4">
            <img class="rounded-full" :src="item.image" alt="Chris Breuer" />
          </div>
          <div class="flex flex-1 md:items-center md:mt-8">
            <div class="flex flex-col flex-1">
              <span class="text-2xl text-white">{{ item.name }}</span>
              <span>{{ item.role }}</span>
            </div>
            <div class="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
              <img src="/images/twitter.svg" alt="Twitter" />
              <img src="/images/linkedin.svg" alt="Linkedin" />
            </div>
          </div>
        </div>
        <img
          class="absolute hidden  xl:left-0 xl:-top-14 lg:block lg:-top-16 lg:left-0"
          src="/images/home/hoodratz-ellipse-97.png"
          alt=""
        />
        <img
          class="absolute hidden  xl:left-3/4 xl:-top-14 lg:block lg:-top-16 lg:left-3/4"
          src="/images/home/hoodratz-ellipse-88.png"
          alt=""
        />
        <img
          class="absolute hidden  xl:left-1/2 xl:top-52 lg:block lg:top-52 lg:left-3/4"
          src="/images/home/hoodratz-ellipse-97.png"
          alt=""
        />
        <img
          class="absolute hidden  xl:left-full xl:top-72 lg:block lg:top-96 lg:left-1/2"
          src="/images/home/hoodratz-ellipse-88.png"
          alt=""
        />
      </div>
    </div>

    <AppFooter />
  </div>
</template>
<script>
import { team } from "@/content/app.json";

export default {
  data() {
    return {
      team,
    };
  },
};
</script>
