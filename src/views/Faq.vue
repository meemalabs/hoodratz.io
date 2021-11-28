<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="w-full h-full bg-gray-8 text-gray-4">
    <AppHeader />

    <div class="container px-2 mx-auto mt-20 md:mt-24">
      <div class="mx-auto md:w-2/3">
        <div class="w-full my-4">
          <div class="flex items-center justify-center">
            <h1 class="-mt-2 tracking-widest uppercase text-pink-3 font-sora">
              Hoodratz
            </h1>
          </div>
        </div>

        <div class="mx-4 text-center">
          <div class="mb-20">
            <h2
              class="mb-4 -mt-6 text-3xl text-white font-kumbh-bold md:text-5xl"
            >
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div
          v-for="(item, index) in faq"
          class="mb-8 border rounded-md border-pink-2 bg-gray-5"
        >
          <div class="px-4 py-4 mx-auto max-w-7xl sm:py-4 sm:px-6 lg:px-8">
            <div>
              <dl class="space-y-6 divide-y divide-gray-200">
                <div>
                  <dt class="text-lg">
                    <!-- Expand/collapse question button -->
                    <button
                      @click="toggleFaqAnswer(index)"
                      type="button"
                      class="flex items-start justify-between w-full text-left text-gray-400 "
                      aria-controls="faq-0"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-100">
                        {{ item.question }}
                      </span>
                      <span class="flex items-center ml-6 h-7">
                        <svg
                          v-if="!faqAnswer[index]"
                          class="w-6 h-6 text-gray-100 transform rotate-0"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <svg
                          v-else
                          class="w-6 h-6 text-gray-100"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd v-show="faqAnswer[index]" class="pr-12 mt-2" id="faq-0">
                    <p class="text-base text-gray-300">
                      {{ item.answer }}
                    </p>
                  </dd>
                </div>
                <!-- More questions... -->
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-32"></div>

    <AppFooter />
  </div>
</template>

<script>
import { faq } from "@/content/app.json";
export default {
  data() {
    return {
      faq,
      faqAnswer: [],
    };
  },
  mounted() {
    faq.forEach((item, index) => {
      this.faqAnswer[index] = false;
    });
  },
  methods: {
    toggleFaqAnswer(index) {
      this.faqAnswer[index] = !this.faqAnswer[index];
    },
  },
};
</script>