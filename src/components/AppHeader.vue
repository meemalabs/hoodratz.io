<template>
  <header class="bg-gray-7 font-sora">
    <div class="container mx-auto h-16 md:h-24 px-6 flex items-center justify-between">
      <div class="w-32"><img src="/images/logo.svg" alt=""></div>
      <div class="md:hidden">
        <img src="/images/menu.svg" alt="">
      </div>
      <div class="hidden md:block text-white">
        <ul class="flex">
          <li class="mx-4"><a href="#">Home</a></li>
          <li class="mx-4 flex flex-col items-center text-pink-3 relative">
            <a href="#">About</a>
            <div class="w-2 h-2 bg-pink-gradient rounded absolute bottom-0 -mb-3"></div>
          </li>
          <li class="mx-4"><a href="#">Roadmap</a></li>
          <li class="mx-4">Rarity  <span class="bg-white text-gray-6 rounded-full py-1 px-2 text-xs uppercase">Soon</span></li>
          <li class="mx-4">Merch <span class="bg-white text-gray-6 rounded-full py-1 px-2 text-xs uppercase">Soon</span></li>
        </ul>
      </div>
    </div>
  </header>
</template>
