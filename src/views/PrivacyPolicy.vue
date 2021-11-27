<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="w-full h-full bg-gray-8 text-gray-4">
    <AppHeader />

    <div class="container mx-auto mt-20 md:mt-24">
      <div class="mx-auto md:w-2/3">
        <div class="w-full my-4">
          <div class="flex items-center justify-center">
            <h1
              class="mt-8 -mt-2 tracking-widest uppercase text-pink-3 font-sora"
            >
              Privacy
            </h1>
          </div>
        </div>

        <div class="mx-4 text-center">
          <div class="mb-20">
            <h2
              class="mb-4 -mt-6 text-3xl text-white font-kumbh-bold md:text-5xl"
            >
              Hoodratz Policy
            </h2>
            <p class="leading-7 font-sora">We take privacy serious.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div
      id="privacy-policy"
      class="mx-4 mt-8 mb-20 md:container md:mx-auto font-sora"
    >
      <div class="mx-auto md:w-2/3">
        <Content />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import Content from "@/content/privacy-policy.md";

export default {
  components: {
    Content,
  },
};
</script>
