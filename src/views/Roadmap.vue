<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="w-full h-full bg-gray-8 text-gray-4 selection:bg-pink-3 selection:text-white">
    <AppHeader />

    <div class="container pb-24 mx-auto">
      <div class="relative mx-auto md:mt-32">
        <div class="mx-auto md:w-2/3">
          <img
            class="absolute hidden xl:left-3/4 xl:-top-10 lg:block lg:-top-16 lg:right-0"
            src="/images/home/hoodratz-ellipse-97.png"
            alt=""
          />
          <div class="relative w-full my-4">
            <div class="w-full">
              <img src="/images/honorary.png" alt="About" />
            </div>
            <div class="absolute inset-0 flex items-center justify-center -top-10">
              <h1 class="tracking-widest uppercase text-pink-3 font-sora">
                Roadmap
              </h1>
            </div>
          </div>

          <div class="relative mx-4 text-center -top-24 lg:-top-32 xl:-top-44">
            <div class="mb-20">
              <h2
                class="mb-4 text-3xl text-white lg:-mt-6 font-kumbh-bold md:text-5xl"
              >
                Find out the plan!
              </h2>
              <p class="leading-7 font-sora">
                There’s a long road ahead, but we like keeping deadlines.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto md:mb-32 -top-24">
        <img
          class="absolute hidden xl:top-0 xl:-left-12 lg:top-0 lg:-left-5 lg:block"
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
          class="absolute hidden xl:left-10 xl:top-1/4 lg:block lg:top-1/2 lg:left-0"
          src="/images/home/hoodratz-ellipse-97.png"
          alt="background particle image"
        />
        <img
          class="absolute hidden xl:left-2 xl:top-1/2 lg:block lg:top-3/4 lg:left-0"
          src="/images/home/hoodratz-ellipse-88.png"
          alt="background particle image"
        />
        <img
          class="absolute hidden xl:top-1/2 left-85 lg:top-1/3 lg:block"
          src="/images/home/hoodratz-ellipse-1424.svg"
          alt="background particle image"
        />
        <img
          class="absolute hidden xl:top-3/4 xl:left-2 lg:top-3/4 lg:-left-10 lg:block"
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
            <div class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora">
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                >
                  <div>
                    <img src="/images/check.svg" alt="check icon" />
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                  >
                    <div><img src="/images/check.svg" alt="" /></div>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">1</div>
                  <div class="mt-2 uppercase md:mt-0">Nov '21</div>
                </div>
                <div class="my-4 text-2xl font-bold text-white">
                  Marketing Campaign Kickoff
                </div>
                <p class="leading-8">
                  Launch the marketing site, Discord channel, and social
                  campaigns. 🚀
                </p>
              </div>
            </div>

            <div class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora">
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                >
                  <div>
                    <img src="/images/check.svg" alt="check icon" />
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full bg-pink-1 border-pink-3"
                  >
                    <!-- <div><img src="/images/check.svg" alt="" /></div> -->
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">2</div>
                  <div class="mt-2 uppercase md:mt-0">Dec 11 '21</div>
                </div>

                <div class="my-4 text-2xl font-bold text-white">
                  Presale / Whitelist
                </div>

                <p class="leading-8">
                  Join our Whitelist to purchase up to 3 Hoodratz NFTs for a
                  discounted rate of 0.75 SOL. Share those ratz on social media
                  and we may just airdrop you some more! 😉
                </p>

                <p class="pt-3 leading-8">
                  Follow us on
                  <a
                    href="https://twitter.com/HoodratzNFT"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Twitter</a
                  >
                  or
                  <a
                    href="https://discord.gg/jsahnpyr4X"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Discord</a
                  >
                  to stay up-to-date.
                </p>
              </div>
            </div>

            <div class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora">
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                >
                  <div>
                    <img src="/images/check.svg" alt="check icon" />
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full bg-pink-1 border-pink-3"
                  >
                    <!-- <div><img src="/images/check.svg" alt="" /></div> -->
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">3</div>
                  <div class="mt-2 uppercase md:mt-0">Dec 12 '21</div>
                </div>

                <div class="my-4 text-2xl font-bold text-white">Public Sale</div>

                <p class="leading-8">
                  A day after our Whitelist Sale, we will have our Public Sale to
                  sell the remaining items of the 10,000 NFT collection. We will
                  launch the collection at 11am PT &amp; more news will be dripped
                  via our social mediums up until launch. 🚀
                </p>

                <p class="pt-3 leading-8">
                  The total number of available NFTs will vary and it depends on
                  the amount of NFTs the "whitelist" purchases. We are estimating
                  around 8,500 - 9,000 NFTs to be released to the public on this
                  day.
                </p>
              </div>
            </div>

            <div class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora">
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                >
                  <div>
                    <img src="/images/check.svg" alt="check icon" />
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full bg-pink-1 border-pink-3"
                  >
                    <!-- <div><img src="/images/check.svg" alt="" /></div> -->
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">4</div>
                  <div class="mt-2 uppercase md:mt-0">Dec 12 '21</div>
                </div>

                <div class="my-4 text-2xl font-bold text-white">
                  NakedNFTs Marketplace &mdash; v1.0 Release
                </div>

                <p class="leading-8">
                  For several months, our team has been hard at work creating a
                  unique and beautifully designed marketplace.
                </p>

                <p class="pt-3 leading-8">
                  <em class="pr-1"
                    >What makes the NakedNFTs marketplace unique? Aren’t there
                    enough alternatives?</em
                  >
                  We believe there aren’t. Additionally, many of the novel NFT
                  use-cases are still being conceptualized, on many levels. As a
                  result, we won’t simply be a "jpeg marketplace," our vision is
                  bigger &amp; our flag-ship feature will be major cross-chain
                  compatibility.
                </p>

                <p class="pt-3 leading-8">
                  Ever tried purchasing a SOL NFT with ETH? 👀
                </p>
              </div>
            </div>

            <div class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora">
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                >
                  <div>
                    <img src="/images/check.svg" alt="check icon" />
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full bg-pink-1 border-pink-3"
                  >
                    <!-- <div><img src="/images/check.svg" alt="" /></div> -->
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">5</div>
                  <div class="mt-2 uppercase md:mt-0">Dec 19 '21</div>
                </div>

                <div class="my-4 text-2xl font-bold text-white">
                  DAO Foundation
                </div>

                <p class="leading-8">
                  This Sunday, we will launch our DAO and kickoff the development
                  for a Open Source cross-chain DAO framework. 🚀
                </p>

                <p class="pt-3 leading-8">
                  The DAO will choose and determine the future and direction of
                  these organizations. Follow us on
                  <a
                    href="https://twitter.com/HoodratzNFT"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Twitter</a
                  >
                  or
                  <a
                    href="https://discord.gg/jsahnpyr4X"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Discord</a
                  >
                  to stay up-to-date. And if you are tech-savvy, find us on
                  <a
                    href="https://github.com/meemalabs/"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >GitHub</a
                  >.
                </p>
              </div>
            </div>

            <div class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora">
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                >
                  <div>
                    <img src="/images/check.svg" alt="check icon" />
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full bg-pink-1 border-pink-3"
                  >
                    <!-- <div><img src="/images/check.svg" alt="" /></div> -->
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">6</div>
                  <div class="mt-2 uppercase md:mt-0">Dec '21</div>
                </div>

                <div class="my-4 text-2xl font-bold text-white">
                  DeFi Staking Tools
                </div>

                <p class="leading-8">
                  <ul class="pl-8 leading-8 list-disc">
                    <li>Launch &amp; operate a Solana Validator Node for staking purposes &amp; reinvest the mint fund 🚀</li>
                    <li>Launch &amp; operate Cardano Stake Pool with at least 400k ADA pledge 🚀</li>
                  </ul>
                </p>

                <p class="pt-3 leading-8">
                  Follow us on
                  <a
                    href="https://twitter.com/HoodratzNFT"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Twitter</a
                  >
                  or
                  <a
                    href="https://discord.gg/jsahnpyr4X"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Discord</a
                  >
                  to stay up-to-date.
                </p>
              </div>
            </div>

            <div class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora">
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                >
                  <div>
                    <img src="/images/check.svg" alt="check icon" />
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full bg-pink-1 border-pink-3"
                  >
                    <!-- <div><img src="/images/check.svg" alt="" /></div> -->
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">7</div>
                  <div class="mt-2 uppercase md:mt-0">Jan '21</div>
                </div>

                <div class="my-4 text-2xl font-bold text-white">
                  January Backlog
                </div>

                <p class="leading-8">
                  <ul class="pl-8 leading-8 list-disc">
                    <li><em>Launch Meema’s Early Access for Hoodratz holders</em></li>
                    <li>Instagram’s @earthpix founder to release a "Stock Photography" collection with various social media influencer. Hoodratz will get in early ❤️</li>
                    <li>Nonprofit donations will start being distributed. Updates will be posted in Discord.</li>
                    <li>Merchandise store opens which will include Hoodratz, NakedNFTs, and Meema swag</li>
                    <li>Kickoff design &amp; development for mobile apps for Meema’s decentralized file manager which, ultimately, will turn into a custom crypto wallet</li>
                    <li>Marketplace improvements</li>
                    <li>Kickoff design &amp; development for a Metaplex alternative that integrates into NakedNFT’s and Meema’s ecosystem, allowing for cross-chain NFT management. This library will extend <code class="px-1 mx-1 py-0.5">nft-elements</code> functionalities.</li>
                  </ul>
                </p>

                <p class="pt-3 leading-8">
                  Follow us on
                  <a
                    href="https://twitter.com/HoodratzNFT"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Twitter</a
                  >
                  or
                  <a
                    href="https://discord.gg/jsahnpyr4X"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Discord</a
                  >
                  to stay up-to-date.
                </p>
              </div>
            </div>


            <div class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora">
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                >
                  <div>
                    <img src="/images/check.svg" alt="check icon" />
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full bg-pink-1 border-pink-3"
                  >
                    <!-- <div><img src="/images/check.svg" alt="" /></div> -->
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">8</div>
                  <div class="mt-2 uppercase md:mt-0">Feb '21</div>
                </div>

                <div class="my-4 text-2xl font-bold text-white">
                  February Backlog
                </div>

                <p class="leading-8">
                  <ul class="pl-8 leading-8 list-disc">
                    <li>Meema v1.0 Launch 🚀</li>
                    <li><code class="px-1 mx-1 py-0.5">nft-elements</code> Library v1.0 Launch 🚀</li>
                    <li>Marketplace improvements</li>
                    <li>Elaborate on tokenomics &amp; start implementation of custom token</li>
                    <li>Scaffold ecosystem whitepaper</li>
                  </ul>
                </p>

                <p class="pt-3 leading-8">
                  Follow us on
                  <a
                    href="https://twitter.com/HoodratzNFT"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Twitter</a
                  >
                  or
                  <a
                    href="https://discord.gg/jsahnpyr4X"
                    target="_blank"
                    class="transition duration-150 ease-in-out text-pink-1 hover:text-pink-2"
                    >Discord</a
                  >
                  to stay up-to-date.
                </p>
              </div>
            </div>

            <div
              class="absolute top-0 hidden h-full -ml-10 border-l border-dashed border-gray-4 md:block"
            ></div>
          </div>
        </div>

        <p class="mb-4 -mt-6 text-3xl text-center text-white font-kumbh-bold md:text-3xl">And a whole lot more to come...</p>
        <p class="pt-4 mb-4 -mt-6 text-3xl text-center text-pink-3 font-kumbh-bold md:text-3xl">Rat pack, stay tuned and #stayhood</p>

        <!-- <div class="relative mx-auto md:w-2/3">
          <div class="relative mx-4 my-20 text-center md:text-left">
            <div
              v-for="(item, index) in roadmap"
              class="relative p-6 my-8 rounded-4xl bg-gray-7 font-sora"
            >
              <div
                class="absolute inset-x-0 top-0 flex justify-center -mt-6 md:-top-0 md:hidden"
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
                class="absolute inset-y-0 left-0 z-10 flex justify-center hidden md:block"
              >
                <div class="flex items-center h-full -ml-16">
                  <div
                    v-if="item.done"
                    class="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-pink-gradient"
                  >
                    <div><img src="/images/check.svg" alt="" /></div>
                  </div>
                  <div
                    v-else
                    class="flex items-center justify-center w-12 h-12 text-xl text-white border-2 rounded-full bg-pink-1 border-pink-3"
                  ></div>
                </div>
              </div>

              <div>
                <div class="flex justify-center md:justify-between">
                  <div class="hidden md:block text-pink-3">
                    {{ $date(item.date).format("DD") }}
                  </div>
                  <div class="uppercase">
                    {{ $date(item.date).format("MMM YYYY @ hh:mm A Z") }}
                  </div>
                </div>
                <div class="my-4 text-2xl font-bold text-white">
                  {{ item.title }}
                </div>
                <p v-html="item.description" class="leading-8"></p>
              </div>
            </div>

            <div
              class="absolute top-0 hidden h-full -ml-10 border-l border-dashed border-gray-4 md:block"
            ></div>
          </div>
        </div> -->
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
code {
  color: #f05b88;
  font-weight: 400;
  font-size: 0.875em;
  background-color: #f5f7fa;
  border-radius: 0.25rem;
}
</style>
