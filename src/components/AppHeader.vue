<template>
  <header
    class="font-sora"
    :class="transparent ? 'bg-transparent' : 'bg-gray-7'"
  >
    <div
      class="container flex items-center justify-between h-16 px-6 mx-auto  md:h-24"
    >
      <router-link
        to="/"
        class="flex p-3 rounded-md  hover:text-pink-3 focus:outline-none focus:bg-pink-custom-2"
        ><img class="w-36" src="/images/logo.svg" alt="Hoodratz logo" />
        <div class="flex items-center ml-2 animate-pulse">
          <div
            class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink-3 blink"
            aria-hidden="true"
          ></div>

          <span class="ml-2 mr-1 text-xs">Minting Live</span>
        </div>
      </router-link>

      <div class="lg:hidden">
        <img
          v-if="!showMobile"
          src="/images/menu.svg"
          alt=""
          @click="showMobile = !showMobile"
        />
        <img
          v-else
          src="/images/close.svg"
          class="w-6 h-6 text-white"
          alt=""
          @click="showMobile = !showMobile"
        />
      </div>

      <div class="hidden text-white lg:block">
        <ul class="flex">
          <li class="relative flex flex-col items-center mx-2 lg:mx-4">
            <router-link
              to="/about"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <a
                :class="{ 'text-pink-3': isActive }"
                class="transition duration-150 ease-in-out rounded-md  lg:px-2 hover:text-pink-3 focus:outline-none focus:bg-pink-custom-2"
                @click="navigate"
                :href="href"
                >About</a
              >
              <div
                v-if="isActive"
                class="absolute bottom-0 w-2 h-2 -mb-3 rounded bg-pink-gradient"
              ></div>
            </router-link>
          </li>
          <li class="relative flex flex-col items-center mx-2 lg:mx-4">
            <router-link
              to="/roadmap"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <a
                @click="navigate"
                :class="{ 'text-pink-3': isActive }"
                class="transition duration-150 ease-in-out rounded-md  lg:px-2 hover:text-pink-3 focus:outline-none focus:bg-pink-custom-2"
                :href="href"
                >Roadmap</a
              >
              <div
                v-if="isActive"
                class="absolute bottom-0 w-2 h-2 -mb-3 rounded bg-pink-gradient"
              ></div>
            </router-link>
          </li>

          <li class="relative flex flex-col items-center mx-2 lg:mx-4">
            <router-link
              to="/influencers"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <a
                @click="navigate"
                :class="{ 'text-pink-3': isActive }"
                class="transition duration-150 ease-in-out rounded-md  lg:px-2 hover:text-pink-3 focus:outline-none focus:bg-pink-custom-2"
                :href="href"
                >Influencers</a
              >
              <div
                v-if="isActive"
                class="absolute bottom-0 w-2 h-2 -mb-3 rounded bg-pink-gradient"
              ></div>
            </router-link>
          </li>

          <li class="relative flex flex-col items-center mx-2 lg:mx-4">
            <router-link
              to="/white-paper"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <a
                @click="navigate"
                :class="{ 'text-pink-3': isActive }"
                class="transition duration-150 ease-in-out rounded-md  lg:px-2 hover:text-pink-3 focus:outline-none focus:bg-pink-custom-2"
                :href="href"
                >White Paper</a
              >
              <div
                v-if="isActive"
                class="absolute bottom-0 w-2 h-2 -mb-3 rounded bg-pink-gradient"
              ></div>
            </router-link>
          </li>

          <li class="relative flex flex-col items-center mx-2 lg:mx-4">
            <router-link
              to="/rarities"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <a
                @click="navigate"
                :class="{ 'text-pink-3': isActive }"
                class="transition duration-150 ease-in-out rounded-md  lg:px-2 hover:text-pink-3 focus:outline-none focus:bg-pink-custom-2"
                :href="href"
                >Rarities</a
              >
              <div
                v-if="isActive"
                class="absolute bottom-0 w-2 h-2 -mb-3 rounded bg-pink-gradient"
              ></div>
            </router-link>
          </li>

          <li class="mx-2 text-gray-4 lg:mx-4" v-tooltip="`Coming January`">
            Merchandise
            <span
              class="px-2 py-0.5 mx-2 text-xs bg-white rounded-full text-gray-6"
              >soon</span
            >
          </li>
        </ul>
      </div>
    </div>

    <div v-show="showMobile" class="bg-white" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <ul>
          <li>
            <router-link
              to="/"
              class="block px-3 py-6 text-lg font-medium rounded-md text-gray-8"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-8 hover:text-pink-3"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              to="/roadmap"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-8 hover:text-pink-3"
              >Roadmap</router-link
            >
          </li>
          <li>
            <router-link
              to="/influencers"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-8 hover:text-pink-3"
              >Influencers</router-link
            >
          </li>
          <li>
            <router-link
              to="/white-paper"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-8 hover:text-pink-3"
              >White Paper</router-link
            >
          </li>
          <li>
            <router-link
              to="/rarities"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-8 hover:text-pink-3"
              >Rarities</router-link
            >
          </li>
          <li>
            <a
              href="https://hoodratz.nakednfts.io"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-8 hover:text-pink-3"
              >Minting Now!
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-4 hover:text-pink-3"
              >Merchandise</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMobile: false,
    };
  },
};
</script>

<style>
.router-link-active {
  @apply text-pink-3;
}
</style>