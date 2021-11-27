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
        class="p-3 rounded-md  hover:text-pink-3 focus:outline-none focus:bg-pink-custom-2"
        ><img class="w-32" src="/images/logo.svg" alt=""
      /></router-link>
      <div class="md:hidden">
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
      <div class="hidden text-white md:block">
        <ul class="flex">
          <li class="relative flex flex-col items-center mx-2">
            <router-link
              to="/"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <a
                :class="{ 'text-pink-3': isActive }"
                class="transition duration-150 ease-in-out rounded-md  lg:px-2 hover:text-pink-3 focus:outline-none focus:bg-pink-custom-2"
                @click="navigate"
                :href="href"
                >Home</a
              >
              <div
                v-if="isActive"
                class="absolute bottom-0 w-2 h-2 -mb-3 rounded bg-pink-gradient"
              ></div>
            </router-link>
          </li>
          <li class="relative flex flex-col items-center mx-2">
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
          <li class="relative flex flex-col items-center mx-2">
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
          <li class="mx-2 cursor-not-allowed">
            Rarity
            <span
              class="px-1 mx-1 text-xs uppercase bg-white rounded-full  text-gray-6"
              >Soon</span
            >
          </li>
          <li class="mx-2 cursor-not-allowed">
            Merch
            <span
              class="px-1 mx-1 text-xs uppercase bg-white rounded-full  text-gray-6"
              >Soon</span
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
            <a
              href="#"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-4 hover:text-pink-3"
              >Rarity</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-6 text-lg font-medium transition duration-150 ease-in-out rounded-md  text-gray-4 hover:text-pink-3"
              >Merch</a
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