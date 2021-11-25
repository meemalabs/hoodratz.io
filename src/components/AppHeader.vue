<template>
  <header class="bg-gray-7 font-sora">
    <div class="container mx-auto h-16 md:h-24 px-6 flex items-center justify-between">
      <a href="/" class="w-32"><img src="/images/logo.svg" alt=""></a>
      <div class="md:hidden">
        <img src="/images/menu.svg" alt="">
      </div>
      <div class="hidden md:block text-white">
        <ul class="flex">
          <li class="mx-4 flex flex-col items-center relative">
            <router-link 
              to="/"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }">
              <a :class="{ 'text-pink-3': isActive }" :href="href">Home</a>
              <div v-if="isActive" class="w-2 h-2 bg-pink-gradient rounded absolute bottom-0 -mb-3"></div>
            </router-link>
          </li>
          <li class="mx-4 flex flex-col items-center relative">
            <router-link 
              to="/about"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }">
              <a :class="{ 'text-pink-3': isActive }" :href="href">About</a>
              <div v-if="isActive" class="w-2 h-2 bg-pink-gradient rounded absolute bottom-0 -mb-3"></div>
            </router-link>
          </li>
          <li class="mx-4 flex flex-col items-center relative">
            <router-link 
              to="/roadmap"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }">
              <a :class="{ 'text-pink-3': isActive }" :href="href">Roadmap</a>
              <div v-if="isActive" class="w-2 h-2 bg-pink-gradient rounded absolute bottom-0 -mb-3"></div>
            </router-link>
          </li>
          <li class="mx-4 cursor-not-allowed">Rarity  <span class="bg-white text-gray-6 rounded-full px-1 text-xs uppercase">Soon</span></li>
          <li class="mx-4 cursor-not-allowed">Merch <span class="bg-white text-gray-6 rounded-full px-1 text-xs uppercase">Soon</span></li>
        </ul>
      </div>
    </div>
  </header>
</template>
