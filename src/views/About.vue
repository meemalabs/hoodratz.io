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

            <p class="leading-8 font-sora">
              Hoodratz are uniquely generated, cute and collectible rats with
              proof of ownership stored on Solana's blockchain, and soon on the
              blockchain of your choice. All individual art pieces of the
              Hoodratz world have been created by hand and were algorithmically
              generated using custom code that we created to share with the
              community. <em>We ❤️ Open Source.</em>
            </p>

            <p class="mt-3 leading-8 font-sora">
              The Hoodratz collection is inspired by the global NFT hub that New
              York City has become. And which animal would reflect the city
              better than a ... Hoodrat? 🤐
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

      <div class="relative pt-32 lg:grid lg:grid-cols-2 md:mx-32">
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
            We are more than a company. Or even a decentralized autonomous
            organization (DAO). We are a group of friends coming from all walks
            of life who have worked in technical &amp; creative corporate web2
            environments. With all of our focus shifting to web3, we are trying
            to make the world a better place by socializing &amp; democratizing
            the way data is stored &amp; transferred.
          </p>

          <p class="mt-4 leading-7 font-sora">
            We believe NFTs, and the tech allowing for it, are an integral part
            of our future lives. We also believe NFTs allow for a whole lot more
            than "digital collectibles." As a consequence, we developed our own
            marketplace to allow for these up-and-coming features.
          </p>

          <p class="mt-4 leading-7 font-sora">
            Join us in
            <a
              href="https://discord.gg/jsahnpyr4X"
              target="_blank"
              class="transition duration-150 ease-in-out  text-pink-1 hover:text-pink-2"
              >Discord</a
            >
            to follow along. We are in it for the long run.
          </p>
        </div>

        <img
          class="absolute top-0 right-0 pt-32 md:hidden lg:block"
          src="/images/home/hoodratz-plain-cone.png"
          alt="background cone image"
        />
        <img
          class="absolute hidden  xl:left-1/2 xl:-top-14 lg:block lg:top-24 lg:left-1/2"
          src="/images/home/hoodratz-ellipse-97.png"
          alt="background cone image"
        />
      </div>

      <div
        class="relative mt-24 mb-20  md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-6 md:mx-4"
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
          class="absolute hidden  xl:left-0 xl:-top-24 lg:block lg:-top-16 lg:left-0"
          src="/images/home/hoodratz-ellipse-97.png"
          alt=""
        />
        <img
          class="absolute hidden  xl:left-3/4 xl:-top-14 lg:block lg:-top-16 lg:left-3/4"
          src="/images/home/hoodratz-ellipse-88.png"
          alt=""
        />
        <img
          class="absolute hidden  xl:left-1/2 xl:top-60 lg:block lg:top-52 lg:left-3/4"
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
