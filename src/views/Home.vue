<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="relative h-full bg-hoodratz-grey-8">
    <AppHeader class="block md:hidden" />
    <section
      id="hero"
      class="relative h-full bg-no-repeat bg-contain  lg:h-screen md:bg-cover sm:bg-cover md:bg-hero bg-hero-sm"
    >
      <AppHeader :transparent="true" class="hidden md:block" />
      <div class="grid grid-cols-1 mx-4 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:ml-0 lg:ml-36">
          <h1 class="text-white font-kumbh-bold md:text-h1 text-h3">
            Discover HoodRatz, <br class="hidden md:block" />a new NFT
            collection
          </h1>
          <p
            class="mt-5 leading-8  md:text-body font-sora text-gray-2 text-body-2"
          >
            A limited edition of 10.000 collectible pixel rats.
          </p>
          <div class="flex flex-col items-center w-full lg:flex-row">
            <a
              :href="social.discord"
              target="_blank"
              class="w-full px-8 py-3 mt-5 text-white rounded-full  lg:w-auto lg:mr-10 bg-pink-gradient md:shadow-none text-a font-sora shadow-hoodratz-btn"
            >
              JOIN DISCORD
            </a>
            <a
              :href="social.twitter"
              target="_blank"
              class="w-full px-8 py-3 mt-5 text-white border border-white rounded-full  lg:w-auto text-button font-sora"
            >
              FOLLOW US
            </a>
          </div>
        </div>
        <div class="flex justify-center order-first mt-20 lg:order-last">
          <img
            class="object-contain w-3/4 h-full"
            src="/images/home/hoodratz-card-sm.png"
            alt=""
          />
        </div>
      </div>
    </section>
    <section id="about-us-desktop" class="relative hidden h-full lg:block">
      <div>
        <img src="/images/home/hoodratz-about-us-lg.png" alt="" />
      </div>
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col">
          <div class="flex flex-col -mt-56">
            <h1 class="text-pink-3 font-sora text-h4">ABOUT US</h1>
            <h1 class="mt-3 text-white font-kumbh-bold text-h2">
              What are Hoodratz?
            </h1>
            <p class="mt-5 text-gray-4 font-sora text-body-2">
              Hodratz are uniquely generated and collectible NFTs. <br />Each of
              them is one-of-a-kind and 100% owned by you.
            </p>
          </div>
          <div class="flex mt-24">
            <img
              class="mr-24 w-96 h-1/4"
              src="/images/home/hoodratz-josephine.png"
              alt=""
            />
            <div class="relative flex w-full">
              <div
                class="absolute flex flex-col h-56 p-6 mt-10  -top-24 bg-hoodratz-grey-7 rounded-4xl font-sora"
              >
                <div class="flex items-center">
                  <img
                    class="mr-auto"
                    src="/images/home/hoodratz-nft-hand.png"
                    alt=""
                  />
                  <div class="flex flex-col text-right">
                    <h1 class="text-pink-3">RARITY</h1>
                    <h1 class="text-white">LEGENDARY</h1>
                  </div>
                </div>
                <p
                  class="mt-6 text-gray-4"
                  style="font-size: 16px; line-height: 30px; letter-spacing: 1%"
                >
                  Hoodratz come with various rare attributes. <br />The rarer
                  the attribute, the rarer is your rat!
                </p>
              </div>
              <div
                class="absolute flex flex-col p-6 mt-10  -bottom-24 w-72 bg-hoodratz-grey-7 rounded-4xl font-sora"
              >
                <div class="flex items-center">
                  <div
                    class="p-5 mr-auto"
                    style="
                      background: linear-gradient(
                        103.6deg,
                        rgba(255, 255, 255, 0.4) 1.67%,
                        rgba(255, 255, 255, 0.1) 81.8%
                      );
                      border: 2px solid #463851;
                      box-sizing: border-box;
                      backdrop-filter: blur(40px);
                      border-radius: 20px;
                    "
                  >
                    <img src="/images/home/hoodratz-gift.svg" alt="" />
                  </div>
                  <div class="flex flex-col text-right">
                    <h1 class="text-pink-3">AMOUNT</h1>
                    <h1 class="text-white">10 000</h1>
                  </div>
                </div>
                <p
                  class="mt-6 text-gray-4"
                  style="font-size: 16px; line-height: 30px; letter-spacing: 1%"
                >
                  Remember that our stock is limited! There will only ever be 10
                  thousand Hoodratz created. <br />Grab yours while you still
                  can!
                </p>
              </div>
              <div class="absolute right-0 top-48">
                <img src="/images/home/hoodratz-bg-count.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-us-mobile" class="relative block h-full lg:hidden">
      <img src="/images/home/hoodratz-about-us.svg" alt="" />
      <div class="absolute flex flex-col mx-4 top-44">
        <h1 class="text-pink-3 font-sora">ABOUT US</h1>
        <h1
          class="mt-3 text-white font-kumbh-bold"
          style="font-size: 28px; line-height: 36px; letter-spacing: 1%"
        >
          What are Hoodratz?
        </h1>
        <p
          class="mt-5 text-gray-4 font-sora"
          style="font-size: 16px; line-height: 30px; letter-spacing: 1%"
        >
          Hodratz are uniquely generated and collectible NFTs. <br />Each of
          them is one-of-a-kind and 100% owned by you.
        </p>
      </div>
      <div class="mx-4 mt-5">
        <div
          class="relative border border-white rounded-4xl"
          style="
            background: radial-gradient(
              82.01% 81.61% at 94.63% 16.78%,
              #ed9db9 0%,
              #ec83a2 57.37%,
              #f05584 100%
            );
          "
        >
          <div
            class="flex items-center justify-center bg-cover  bg-hoodratz-card-bg h-80 rounded-4xl"
          >
            <img
              class="object-contain w-64 h-64 mb-4"
              src="/images/home/josephine.png"
              alt=""
            />
          </div>
          <div
            class="relative flex items-center w-full p-5 bg-white  rounded-br-3xl rounded-bl-3xl"
          >
            <div class="p-3 mr-5 rounded-full bg-hoodratz-grey-7">
              <img src="/images/home/star.svg" alt="" />
            </div>
            <div class="flex flex-col">
              <h1 class="text-gray-4 font-sora">Hoodrat #234</h1>
              <h1 class="text-gray-8 font-sora">Josephine, the town rat</h1>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col p-6 mt-10  bg-hoodratz-grey-7 rounded-4xl font-sora"
        >
          <div class="flex items-center">
            <img
              class="mr-auto"
              src="/images/home/hoodratz-nft-hand.png"
              alt=""
            />
            <div class="flex flex-col text-right">
              <h1 class="text-pink-3">RARITY</h1>
              <h1 class="text-white">LEGENDARY</h1>
            </div>
          </div>
          <p
            class="mt-6 text-gray-4"
            style="font-size: 16px; line-height: 30px; letter-spacing: 1%"
          >
            Hoodratz come with various rare attributes. <br />The rarer the
            attribute, the rarer is your rat!
          </p>
        </div>

        <div
          class="flex flex-col p-6 mt-10  bg-hoodratz-grey-7 rounded-4xl font-sora"
        >
          <div class="flex items-center">
            <div
              class="p-5 mr-auto"
              style="
                background: linear-gradient(
                  103.6deg,
                  rgba(255, 255, 255, 0.4) 1.67%,
                  rgba(255, 255, 255, 0.1) 81.8%
                );
                border: 2px solid #463851;
                box-sizing: border-box;
                backdrop-filter: blur(40px);
                border-radius: 20px;
              "
            >
              <img src="/images/home/hoodratz-gift.svg" alt="" />
            </div>
            <div class="flex flex-col text-right">
              <h1 class="text-pink-3">AMOUNT</h1>
              <h1 class="text-white">10 000</h1>
            </div>
          </div>
          <p
            class="mt-6 text-gray-4"
            style="font-size: 16px; line-height: 30px; letter-spacing: 1%"
          >
            Remember that our stock is limited! There will only ever be 10
            thousand Hoodratz created. <br />Grab yours while you still can!
          </p>
        </div>

        <div
          class="relative mt-10 rounded-4xl"
          style="
            background: radial-gradient(
              82.01% 81.61% at 94.63% 16.78%,
              #ed9db9 0%,
              #ec83a2 57.37%,
              #f05584 100%
            );
          "
        >
          <div
            class="flex flex-col w-full p-8 text-right bg-no-repeat bg-contain  text-pink-1 h-72 bg-hoodratz-pink-bg rounded-4xl font-sora"
          >
            <h1 style="line-height: 22px; letter-spacing: 5px; font-size: 14px">
              BACKGROUNDS
            </h1>
            <h1
              style="font-size: 22px; line-height: 27.72px; letter-spacing: 5px"
            >
              23
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section id="proposition-desktop" class="hidden h-full lg:block">
      <div>
        <img src="/images/home/hoodratz-proposition-lg.png" alt="" />
      </div>
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-2">
          <div class="flex flex-col mr-24 -mt-72">
            <h1 class="text-pink-3 font-sora text-h4">VALUE PROPOSITION</h1>
            <h1 class="mt-3 text-white font-kumbh-bold text-h2">
              What makes them so special?
            </h1>
            <p class="mt-5 text-gray-4 font-sora text-body-2">
              We are NFT and crypto lovers and created a collection drop that we
              would like to buy ourselves! Check this out:
            </p>
            <div class="flex flex-col p-6 mt-20 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1
                    class="text-pink-nude"
                    style="font-size: 14px; line-height: 22px"
                  >
                    VARIETY
                  </h1>
                  <h1
                    class="text-white"
                    style="font-size: 20px; line-height: 30px"
                  >
                    Over 200 attributes
                  </h1>
                </div>
                <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
                  <img src="/images/home/chevron-right.svg" alt="" />
                </div>
              </div>
              <p
                class="mt-6 text-gray-4 font-sora"
                style="font-size: 16px; line-height: 30px"
              >
                Creativity is our second name! We designed over 200 attributes
                for our Hoodratz so that each and every one of them would be
                amazing and one-of-a-kind!
              </p>
            </div>

            <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1
                    class="text-pink-nude"
                    style="font-size: 14px; line-height: 22px"
                  >
                    RARITY
                  </h1>
                  <h1
                    class="text-white"
                    style="font-size: 20px; line-height: 30px"
                  >
                    4 rarity levels
                  </h1>
                </div>
                <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
                  <img src="/images/home/chevron-right.svg" alt="" />
                </div>
              </div>
            </div>

            <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1
                    class="text-pink-nude"
                    style="font-size: 14px; line-height: 22px"
                  >
                    POPULARITY
                  </h1>
                  <h1
                    class="text-white"
                    style="font-size: 20px; line-height: 30px"
                  >
                    Amazing NFT community
                  </h1>
                </div>
                <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
                  <img src="/images/home/chevron-right.svg" alt="" />
                </div>
              </div>
            </div>

            <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1
                    class="text-pink-nude"
                    style="font-size: 14px; line-height: 22px"
                  >
                    OUR MISSION
                  </h1>
                  <h1
                    class="text-white"
                    style="font-size: 20px; line-height: 30px"
                  >
                    Helping charities worldwide
                  </h1>
                </div>
                <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
                  <img src="/images/home/chevron-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/home/hoodratz-proposition-illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="proposition-mobile"
      class="relative block h-full pb-10 lg:hidden"
    >
      <img src="/images/home/hoodratz-proposition.svg" alt="" />
      <div class="absolute mx-4 top-36">
        <h1
          class="text-pink-3"
          style="font-size: 16px; line-height: 22px; letter-spacing: 10px"
        >
          VALUE PROPOSITION
        </h1>
        <h1
          class="mt-3 text-white font-kumbh-bold"
          style="font-size: 28px; line-height: 36px"
        >
          What makes them so special?
        </h1>
        <p
          class="mt-4 text-gray-4 font-sora"
          style="font-size: 16px; line-height: 30px"
        >
          We are NFT and crypto lovers and created a collection drop that we
          would like to buy ourselves! Check this out:
        </p>
      </div>
      <div class="mx-4 mt-5">
        <div class="flex flex-col p-6 bg-hoodratz-grey-7 rounded-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1
                class="text-pink-nude"
                style="font-size: 14px; line-height: 22px"
              >
                VARIETY
              </h1>
              <h1 class="text-white" style="font-size: 20px; line-height: 30px">
                Over 200 attributes
              </h1>
            </div>
            <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
              <img src="/images/home/chevron-right.svg" alt="" />
            </div>
          </div>
          <p
            class="mt-6 text-gray-4 font-sora"
            style="font-size: 16px; line-height: 30px"
          >
            Creativity is our second name! We designed over 200 attributes for
            our Hoodratz so that each and every one of them would be amazing and
            one-of-a-kind!
          </p>
        </div>

        <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1
                class="text-pink-nude"
                style="font-size: 14px; line-height: 22px"
              >
                RARITY
              </h1>
              <h1 class="text-white" style="font-size: 20px; line-height: 30px">
                4 rarity levels
              </h1>
            </div>
            <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
              <img src="/images/home/chevron-right.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1
                class="text-pink-nude"
                style="font-size: 14px; line-height: 22px"
              >
                POPULARITY
              </h1>
              <h1 class="text-white" style="font-size: 20px; line-height: 30px">
                Amazing NFT community
              </h1>
            </div>
            <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
              <img src="/images/home/chevron-right.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1
                class="text-pink-nude"
                style="font-size: 14px; line-height: 22px"
              >
                OUR MISSION
              </h1>
              <h1 class="text-white" style="font-size: 20px; line-height: 30px">
                Helping charities worldwide
              </h1>
            </div>
            <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
              <img src="/images/home/chevron-right.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center mt-5">
          <img src="/images/home/hoodratz-attribute.svg" alt="" />
        </div>
      </div>
    </section>

    <section id="future-desktop" class="hidden h-full my-36 lg:block">
      <div class="relative">
        <img src="/images/home/hoodratz-future-lg.png" alt="" />
        <div class="absolute inset-0 flex flex-col items-center left-7 top-12">
          <img src="/images/home/hoodratz-future-tech-lg.png" alt="" />
          <h1
            class="mt-5 tracking-widest text-center  text-pink-3 font-sora text-h4"
          >
            NEWSET TECH
          </h1>
          <h1 class="my-5 text-white text-h3 font-kumbh-bold">
            Become a part of the future of NFT
          </h1>
          <p class="text-center text-body-2 text-gray-4 font-sora">
            All hoodratz are stored on the Solana blockchain and their URL is
            secured by <br />
            Meema. NFT world has never seen this before!
          </p>
          <div class="flex items-center mt-5">
            <img
              class="mr-5"
              src="/images/home/hoodratz-solana-lg.png"
              alt=""
            />
            <img src="/images/home/hoodratz-meema-lg.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section
      id="future-mobile"
      class="relative block h-full pb-10 mx-4 lg:hidden"
    >
      <div class="flex flex-col items-center">
        <img src="/images/home/hoodratz-tech.svg" alt="" />
        <h1
          class="mt-5 text-center text-pink-3 font-sora"
          style="font-size: 16px; line-height: 22px; letter-spacing: 10px"
        >
          NEWSET TECH
        </h1>
        <img src="/images/home/hoodratz-future.svg" alt="" />
        <div class="-mt-32 text-center font-sora">
          <h1 class="text-white" style="font-size: 28px; line-height: 36px">
            Become a part of the future of NFT
          </h1>
          <p
            class="mt-5 text-gray-4"
            style="font-size: 16px; line-height: 30px; letter-spacing: 1.6px"
          >
            All hoodratz are stored on the Solana blockchain and their URL is
            secured by Meema. NFT world has never seen this before!
          </p>
          <img src="/images/home/hoodratz-circle.svg" alt="" />
        </div>
        <div class="flex items-center justify-center">
          <img class="mr-5" src="/images/home/hoodratz-solana.svg" alt="" />
          <img src="/images/home/hoodratz-meema.svg" alt="" />
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
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