<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="w-full h-full bg-gray-8 text-gray-4">
    <AppHeader />

    <div class="container relative mx-auto md:mt-32">
      <div class="mx-auto md:w-2/3">
        <img
          class="absolute hidden  xl:left-3/4 xl:-top-10 lg:block lg:-top-16 lg:right-0"
          src="/images/home/hoodratz-ellipse-97.png"
          alt=""
        />
        <div class="relative w-full my-4">
          <div class="w-full">
            <img src="/images/roadmap.png" alt="About" />
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h1
              class="mt-8 -mt-2 tracking-widest uppercase text-pink-3 font-sora"
            >
              Roadmap
            </h1>
          </div>
        </div>

        <div class="mx-4 text-center">
          <div class="mb-20">
            <h2
              class="mb-4 -mt-6 text-3xl text-white font-kumbh-bold md:text-5xl"
            >
              Find out what's the plan!
            </h2>
            <p class="leading-7 font-sora">
              There’s a long road ahead, but we like keeping deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container relative mx-auto md:mb-32">
      <img
        class="absolute hidden  xl:top-0 xl:-left-12 lg:top-0 lg:-left-5 lg:block"
        src="/images/home/hoodratz-ellipse-1424.svg"
        alt="background particle image"
      />
      <img
        class="absolute hidden xl:top-0 left-90 lg:top-0 lg:-left-5 lg:block"
        src="/images/home/hoodratz-inverted-cone.png"
        alt=""
      />
      <img
        class="absolute hidden left-85 xl:top-72 lg:block lg:top-72 lg:left-0"
        src="/images/home/hoodratz-ellipse-88.png"
        alt="background particle image"
      />
      <img
        class="absolute hidden left-90 xl:top-3/4 lg:block lg:top-3/4 lg:left-0"
        src="/images/home/hoodratz-ellipse-88.png"
        alt="background particle image"
      />
      <img
        class="absolute hidden  xl:left-10 xl:top-1/4 lg:block lg:top-1/2 lg:left-0"
        src="/images/home/hoodratz-ellipse-97.png"
        alt="background particle image"
      />
      <img
        class="absolute hidden  xl:left-2 xl:top-1/2 lg:block lg:top-3/4 lg:left-0"
        src="/images/home/hoodratz-ellipse-88.png"
        alt="background particle image"
      />
      <img
        class="absolute hidden xl:top-1/2 left-85 lg:top-1/3 lg:block"
        src="/images/home/hoodratz-ellipse-1424.svg"
        alt="background particle image"
      />
      <img
        class="absolute hidden  xl:top-3/4 xl:left-2 lg:top-3/4 lg:-left-10 lg:block"
        src="/images/home/hoodratz-ellipse-1424.svg"
        alt=""
      />
      <img
        class="absolute hidden left-90 xl:top-full lg:block lg:top-full"
        src="/images/home/hoodratz-ellipse-97.png"
        alt="background particle image"
      />
      <img
        class="absolute hidden xl:-left-24 xl:top-full lg:block lg:top-full"
        src="/images/home/hoodratz-ellipse-88.png"
        alt="background particle image"
      />

      <div class="relative mx-auto md:w-2/3">
        <div class="relative mx-4 my-20 text-center md:text-left">
          <div
            v-for="(item, index) in roadmap"
            class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora"
          >
            <div
              class="absolute inset-x-0 top-0 flex justify-center -mt-6  md:-top-0 md:hidden"
            >
              <div
                class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full "
                :class="{
                  'bg-gray-6': !item.done,
                  'bg-pink-gradient': item.done,
                }"
              >
                <div v-if="item.done">
                  <img src="/images/check.svg" alt="" />
                </div>
                <div v-else>{{ $date(item.date).format("D") }}</div>
              </div>
            </div>
            <div
              class="absolute inset-y-0 left-0 z-10 flex justify-center hidden  md:block"
            >
              <div class="flex items-center h-full -ml-16">
                <div
                  v-if="item.done"
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full  bg-pink-gradient"
                >
                  <div><img src="/images/check.svg" alt="" /></div>
                </div>
                <div
                  v-else
                  class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full  bg-pink-1 border-pink-3"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-center md:justify-between">
                <div class="hidden md:block text-pink-3">
                  {{ $date(item.date).format("DD") }}
                </div>
                <div class="uppercase">
                  {{ $date(item.date).format('MMM YYYY @ hh:mm A Z') }}
                </div>
              </div>
              <div class="my-4 text-2xl font-bold text-white">
                {{ item.title }}
              </div>
              <p v-html="item.description" class="leading-8"></p>
            </div>
          </div>

          <div
            class="absolute top-0 hidden h-full -ml-10 border-l border-dashed  border-gray-4 md:block"
          ></div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import { roadmap } from "@/content/app.json";

export default {
  data() {
    return {
      roadmap,
    };
  },
};
</script>

<style scoped>
.left-90 {
  left: 90% !important;
}
.left-85 {
  left: 85% !important;
}
</style>
