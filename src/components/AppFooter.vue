<template>
  <footer class="text-gray-3 font-sora bg-gray-6">
    <div class="container mx-auto">
      <div class="md:hidden bg-gray-8">
        <h3 class="px-4 py-3 text-sm text-white uppercase bg-gray-7">
          Company
        </h3>
        <ul class="text-xs divide-y divide-gray-7">
          <li class="p-4">
            <router-link to="/about" class="flex items-center justify-between">
              <div>About</div>
              <div><img src="/images/chevron.svg" alt="chevron icon" /></div>
            </router-link>
          </li>
          <li class="p-4">
            <router-link
              to="/roadmap"
              class="flex items-center justify-between"
            >
              <div>Roadmap</div>
              <div><img src="/images/chevron.svg" alt="chevron icon" /></div>
            </router-link>
          </li>
          <li class="p-4">
            <span class="flex items-center justify-between">
              <div>FAQ</div>
              <div><img src="/images/chevron.svg" alt="chevron icon" /></div>
            </span>
          </li>
        </ul>
        <h3 class="px-4 py-3 text-sm text-white uppercase bg-gray-7">
          Hoodratz
        </h3>
        <ul class="text-xs divide-y divide-gray-7">
          <li class="flex items-center justify-between p-4">
            <div>
              Attributes
              <small class="px-1 uppercase bg-white rounded-full text-gray-7"
                >soon</small
              >
            </div>
            <div><img src="/images/chevron.svg" alt="chevron icon" /></div>
          </li>
          <li class="flex items-center justify-between p-4">
            <div>
              Merchandise
              <small class="px-1 uppercase bg-white rounded-full text-gray-7"
                >soon</small
              >
            </div>
            <div><img src="/images/chevron.svg" alt="chevron icon" /></div>
          </li>
        </ul>
        <h3 class="px-4 py-3 text-sm text-white uppercase bg-gray-7">
          Policies
        </h3>
        <ul class="text-xs divide-y divide-gray-7">
          <li class="flex items-center justify-between p-4">
            <div>
              <router-link to="/privacy-policy">Privacy Policy</router-link>
            </div>
            <div><img src="/images/chevron.svg" alt="chevron icon" /></div>
          </li>
        </ul>
      </div>
      <div class="px-3 py-8 text-sm md:grid md:grid-cols-3 md:gap-4">
        <div>
          <div class="flex justify-center my-6 md:justify-start">
            <router-link
              to="/"
              class="p-2 rounded-md focus:outline-none focus:bg-pink-custom-2"
            >
              <img src="/images/logo-light.svg" alt="Hoodratz" />
            </router-link>
          </div>
          <p
            class="my-4 mr-0 text-sm leading-6 text-center  md:mr-12 md:text-left md:text-xs"
          >
            Created &amp; designed in Silicon Beach, CA, Hoodratz are uniquely
            generated &amp; collectible NFTs. Inspired by New York City’s
            underground, each of them is one-of-a-kind &amp; 100% owned by you.
          </p>
          <div class="flex justify-center mb-4 md:hidden">
            <ul class="flex">
              <li
                class="flex items-center justify-center p-4 mx-3 border rounded-full  border-gray-5"
              >
                <a :href="social.discord" target="_blank">
                  <img src="/images/discord.svg" alt="Discord" />
                </a>
              </li>
              <li
                class="flex items-center justify-center p-4 mx-3 border rounded-full  border-gray-5"
              >
                <a :href="social.twitter" target="_blank">
                  <img src="/images/twitter.svg" alt="Twitter" />
                </a>
              </li>
              <li
                class="flex items-center justify-center p-4 mx-3 border rounded-full  border-gray-5"
              >
                <a :href="social.instagram" target="_blank">
                  <img src="/images/insta.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div class="text-center md:text-left text-gray-4">
            <small>© 2021 Hoodratz Inc. All right reserved</small>
          </div>
        </div>
        <div class="hidden col-span-2 md:block">
          <div class="grid grid-cols-4 mt-6">
            <div>
              <h3 class="px-2 mb-8 text-white uppercase">Company</h3>
              <ul>
                <li class="my-2">
                  <router-link
                    class="px-2 transition duration-150 ease-in-out rounded-md  hover:text-white focus:outline-none focus:bg-pink-custom-2"
                    to="/about"
                    >About</router-link
                  >
                </li>
                <li class="my-2">
                  <router-link
                    class="px-2 transition duration-150 ease-in-out rounded-md  hover:text-white focus:outline-none focus:bg-pink-custom-2"
                    to="/roadmap"
                    >Roadmap</router-link
                  >
                </li>
                <li class="px-2 my-2 text-gray-5">FAQ</li>
              </ul>
            </div>
            <div>
              <h3 class="px-2 mb-8 text-white uppercase">Hoodratz</h3>
              <ul>
                <li class="my-2">
                  <a
                    class="px-2 transition duration-150 ease-in-out rounded-md  hover:text-white focus:outline-none focus:bg-pink-custom-2"
                    href="/#utility"
                  >
                    Utility
                  </a>
                </li>
                <li class="my-2">
                  <span
                    class="px-2 transition duration-150 ease-in-out rounded-md  text-gray-5 focus:outline-none focus:bg-pink-custom-2"
                  >
                    Attributes
                  </span>
                </li>
                <li class="my-2">
                  <span
                    class="px-2 transition duration-150 ease-in-out rounded-md  text-gray-5 focus:outline-none focus:bg-pink-custom-2"
                  >
                    Merchandise
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="px-2 mb-8 text-white uppercase">
                <!-- Policies -->
              </h3>
              <ul>
                <li class="my-2">
                  <!-- <router-link
                    class="px-2 transition duration-150 ease-in-out rounded-md hover:text-white focus:outline-none focus:bg-pink-custom-2"
                    to="/privacy-policy"
                    >Privacy Policy</router-link
                  > -->
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mb-8 text-center text-white">Connect</h3>
              <div class="flex justify-center mb-4">
                <ul class="grid grid-cols-3 gap-1 lg:gap-3 xl:gap-4">
                  <li class="flex items-center justify-center">
                    <a
                      :href="social.discord"
                      target="_blank"
                      class="block w-8 h-8 p-2 transition duration-150 ease-in-out border rounded-full  lg:w-12 lg:h-12 lg:p-4 hover:bg-gray-4 border-gray-5"
                    >
                      <img
                        class="w-full h-full"
                        src="/images/discord.svg"
                        alt="Discord"
                      />
                    </a>
                  </li>
                  <li class="flex items-center justify-center">
                    <a
                      :href="social.twitter"
                      target="_blank"
                      class="block w-8 h-8 p-2 transition duration-150 ease-in-out border rounded-full  lg:w-12 lg:h-12 lg:p-4 hover:bg-gray-4 border-gray-5"
                    >
                      <img
                        class="w-full h-full"
                        src="/images/twitter.svg"
                        alt="Twitter"
                      />
                    </a>
                  </li>
                  <li class="flex items-center justify-center">
                    <a
                      :href="social.instagram"
                      target="_blank"
                      class="block w-8 h-8 p-2 transition duration-150 ease-in-out border rounded-full  lg:w-12 lg:h-12 lg:p-4 hover:bg-gray-4 border-gray-5"
                    >
                      <img
                        class="w-full h-full"
                        src="/images/insta.svg"
                        alt="Instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { social } from "@/content/app.json";

export default {
  data() {
    return {
      social,
    };
  },
};
</script>
