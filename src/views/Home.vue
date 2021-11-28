<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="relative h-full bg-hoodratz-grey-8">
    <AppHeader class="block md:hidden" />
    <section
      id="hero"
      class="relative h-full bg-no-repeat bg-contain  xl:h-screen xl:bg-cover lg:bg-contain sm:bg-cover md:bg-hero bg-hero-sm"
    >
      <AppHeader :transparent="true" class="hidden md:block" />
      <img
        class="absolute hidden  xl:top-24 xl:right-1/2 lg:top-10 lg:right-1/2 lg:block"
        src="/images/home/hoodratz-ellipse-1424.svg"
        alt=""
      />
      <img
        class="absolute hidden  xl:right-0 xl:top-1/2 lg:block lg:top-1/2 lg:right-0"
        src="/images/home/hoodratz-ellipse-103.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-0 xl:top-3/4 lg:block lg:top-32 lg:left-36"
        src="/images/home/hoodratz-ellipse-103.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-1/2 xl:top-3/4 lg:block lg:top-2/3 lg:left-1/2"
        src="/images/home/hoodratz-ellipse-1425.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-1/2 xl:top-3/4 lg:block lg:top-2/3 lg:left-1/2"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <div class="grid grid-cols-1 mx-4 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:ml-0 lg:ml-10 xl:ml-36">
          <h1 class="text-white font-kumbh-bold xl:text-h1 lg:text-h2 text-h3">
            The first native NFT cross-chain collection. Ever.
          </h1>
          <p
            class="mt-5 font-semibold leading-8  md:text-body font-sora text-gray-1 text-body-2"
          >
            A limited edition of 10,000 rare Hoodratz.
          </p>
          <div
            class="flex flex-col items-center w-full  lg:flex-row lg:justify-start md:flex-row md:justify-center"
          >
            <a
              :href="social.discord"
              target="_blank"
              class="z-10 flex items-center justify-center w-full px-8 py-3 mt-5 mr-4 text-white uppercase rounded-full  bg-pink-gradient hover:bg-red-500 md:shadow-none text-a font-sora shadow-hoodratz-btn md:w-3/4 lg:w-auto text-button"
            >
              Join Discord
            </a>
            <a
              :href="social.twitter"
              target="_blank"
              class="z-10 inline-flex items-center justify-center w-full px-8 py-3 mt-5 text-white uppercase transition duration-150 ease-in-out border border-white rounded-full  md:w-3/4 lg:w-auto text-button font-sora backdrop-blur-sm hover:text-pink-3"
            >
              Follow Us
              <svg
                class="fill-current ml-2.5"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div
            class="absolute items-center hidden  xl:bottom-0 lg:-bottom-36 lg:flex"
          >
            <p class="text-button text-gray-4 font-sora">
              Launching on <span class="text-pink-3">12/12 @ 11am PST!</span>
            </p>
            <img
              class="mt-10 w-28 h-28"
              src="/images/home/hoodratz-rocket.svg"
              alt=""
            />
          </div>
        </div>
        <div class="flex justify-center order-first mt-20 lg:order-last">
          <img
            class="object-contain w-3/4 h-full xl:w-3/4 lg:w-full"
            src="/images/home/Hoodratz-card.png"
            alt="Hoodrat NFT"
          />
        </div>
      </div>
    </section>

    <section id="about-us-desktop" class="relative hidden h-full lg:block">
      <img
        class="absolute hidden  xl:left-36 xl:top-20 lg:block lg:top-24 lg:left-36"
        src="/images/home/hoodratz-ellipse-88.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-1/2 xl:top-20 lg:block lg:top-24 lg:left-1/2"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-36 xl:top-2/3 lg:block lg:top-96 lg:left-36"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <div>
        <img src="/images/home/hoodratz-about-us-lg.png" alt="" />
      </div>
      <div class="xl:mx-auto max-w-7xl lg:mx-20">
        <div class="flex flex-col">
          <div class="flex flex-col -mt-56">
            <h1 class="uppercase text-pink-3 font-sora text-h4">About Us</h1>
            <h1 class="mt-3 text-white font-kumbh-bold text-h2">
              What are Hoodratz?
            </h1>
            <p class="mt-5 text-gray-4 font-sora text-body-2">
              Hoodratz are uniquely generated &amp; collectible digital art
              pieces (NFTs).
              <br />Inspired by the global New York City NFT hub, each of these
              rats is <br />one-of-a-kind and 100% owned by you.
            </p>
          </div>
          <div class="flex mt-24">
            <img
              class="mr-24 w-96 h-1/43"
              src="/images/home/josephine.png"
              alt="Hoodratz Josephine NFT"
            />
            <img
              class="absolute block left-24 w-80 top-full xl:hidden lg:block"
              src="/images/home/hoodratz-cone.svg"
              alt=""
            />
            <div class="relative flex w-full">
              <img
                class="absolute lg:right-0 xl:right-96 -top-36 w-60"
                src="/images/home/hoodratz-ellipse-93.svg"
                alt=""
              />
              <img
                class="absolute right-0 w-80 -top-16 xl:block lg:hidden"
                src="/images/home/hoodratz-cone.svg"
                alt=""
              />
              <div
                class="absolute flex flex-col p-6 mt-10  xl:h-56 lg:h-64 -top-24 bg-hoodratz-grey-7 rounded-4xl font-sora"
              >
                <div class="flex items-center">
                  <img
                    class="mr-auto"
                    src="/images/home/hoodratz-nft-hand.png"
                    alt=""
                  />
                  <div class="flex flex-col text-right">
                    <h1 class="text-pink-3 font-sora text-caption">RARITY</h1>
                    <h1 class="text-white font-sora text-title">LEGENDARY</h1>
                  </div>
                </div>
                <p class="mt-6 text-gray-4 text-body-2 font-sora">
                  Hoodratz come in various rarity attributes. <br />The rarer
                  the attribute, the more collectible is your rat!
                </p>
              </div>
              <div
                class="absolute flex flex-col p-6 mt-10  xl:-bottom-24 lg:-bottom-64 w-72 left-1 bg-hoodratz-grey-7 rounded-4xl font-sora"
              >
                <div class="flex items-center">
                  <div
                    class="absolute p-5 mr-auto  -top-8 bg-black-gradient rounded-3xl backdrop-blur-3xl"
                  >
                    <img
                      class="w-8 h-8"
                      src="/images/home/hoodratz-gift.svg"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col ml-auto text-right">
                    <h1 class="uppercase text-pink-3 font-sora text-caption">
                      Amount
                    </h1>
                    <h1 class="text-white font-sora text-title">10 000</h1>
                  </div>
                </div>
                <p class="mt-6 text-gray-4 text-body-2 font-sora">
                  Our stock is limited! There will only ever be 10,000 Hoodratz
                  created.
                  <!-- TODO ONCE MINTING: Grab yours while you still can! -->
                </p>
              </div>
              <div
                class="absolute  xl:right-0 xl:left-72 xl:top-48 lg:top-48 lg:-left-16 lg:right-5"
              >
                <img src="/images/home/hoodratz-bg-count.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="absolute hidden  xl:left-36 xl:top-full lg:block lg:top-full lg:left-3/4"
        src="/images/home/hoodratz-ellipse-88.png"
        alt=""
      />
    </section>

    <section id="about-us-mobile" class="relative block h-full lg:hidden">
      <img src="/images/home/hoodratz-about-us.svg" alt="" />
      <div class="absolute flex flex-col mx-4 top-44">
        <h1 class="text-pink-3 font-sora">ABOUT US</h1>
        <h1 class="mt-3 text-white font-kumbh-bold text-h3">
          What are Hoodratz?
        </h1>
        <p class="mt-5 text-gray-4 font-sora text-body-2">
          Hoodratz are uniquely generated and collectible NFTs. <br />Inspired
          by New York City’s underground, each of them is one-of-a-kind and 100%
          owned by you.
        </p>
      </div>
      <div class="flex flex-col items-center mx-4 mt-16">
        <img
          class="w-full h-full sm:w-3/4 md:w-3/4"
          src="/images/home/hoodratz-josephine.png"
          alt=""
        />
        <div
          class="flex flex-col w-full p-6 mt-10  sm:w-3/4 md:w-3/4 bg-hoodratz-grey-7 rounded-4xl font-sora"
        >
          <div class="flex items-center">
            <img
              class="mr-auto"
              src="/images/home/hoodratz-nft-hand.png"
              alt=""
            />
            <div class="flex flex-col text-right">
              <h1 class="text-pink-3 font-sora text-caption">RARITY</h1>
              <h1 class="text-white font-sora text-title">LEGENDARY</h1>
            </div>
          </div>
          <p class="mt-6 text-gray-4 text-body-2 font-sora">
            Hoodratz come with various rare attributes. <br />The rarer the
            attribute, the rarer is your rat!
          </p>
        </div>

        <div
          class="flex flex-col w-full p-6 mt-10  sm:w-3/4 md:w-3/4 bg-hoodratz-grey-7 rounded-4xl font-sora"
        >
          <div class="flex items-center">
            <div
              class="p-5 mr-auto  bg-black-gradient rounded-3xl backdrop-blur-3xl"
            >
              <img src="/images/home/hoodratz-gift.svg" alt="" />
            </div>
            <div class="flex flex-col text-right">
              <h1 class="text-pink-3 font-sora text-caption">AMOUNT</h1>
              <h1 class="text-white font-sora text-title">10 000</h1>
            </div>
          </div>
          <p class="mt-6 text-gray-4 text-body-2 font-sora">
            Remember that our stock is limited! There will only ever be 10
            thousand Hoodratz created. Grab yours while you still can!
          </p>
        </div>

        <img
          class="w-full mt-10 sm:w-3/4 md:w-3/4"
          src="/images/home/hoodratz-bg-count-sm.png"
          alt=""
        />
      </div>
    </section>

    <section id="utility" class="relative hidden h-full lg:block lg:mt-64">
      <img
        class="absolute hidden  xl:left-36 xl:top-20 lg:block lg:top-24 lg:left-36"
        src="/images/home/hoodratz-ellipse-88.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-3/4 xl:-top-40 lg:block lg:top-5 lg:left-3/4"
        src="/images/home/hoodratz-ellipse-103.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-1/2 xl:top-20 lg:block lg:top-64 lg:left-1/2"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-36 xl:top-0 lg:block lg:-bottom-3/4 lg:left-36"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <div>
        <img src="/images/home/hoodratz-proposition-lg.png" alt="" />
      </div>
      <div class="xl:mx-auto max-w-7xl lg:mx-20">
        <div class="grid grid-cols-2">
          <div class="flex flex-col mr-24 -mt-72">
            <h1 class="uppercase text-pink-3 font-sora text-h4">
              Utility &amp; Rarity
            </h1>
            <h1 class="mt-3 text-white font-kumbh-bold text-h2">
              Why are the Hoodratz so special?
            </h1>
            <p class="mt-5 text-gray-4 font-sora text-body-2">
              We are NFT &amp; crypto lovers who created a collection drop that
              we would purchase ourselves!
            </p>
            <div class="flex flex-col p-6 mt-20 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1 class="uppercase text-pink-nude text-caption font-sora">
                    Variety &amp; Popularity
                  </h1>
                  <h1 class="text-white text-body font-sora">
                    7 Traits &amp; Over 50 Attributes
                  </h1>
                </div>

                <button
                  v-if="!accordion.variety"
                  @click.prevent="accordion.variety = !accordion.variety"
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img
                    src="/images/home/chevron-down.svg"
                    alt="chevron down icon"
                  />
                </button>

                <button
                  v-else
                  @click.prevent="accordion.variety = !accordion.variety"
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img
                    src="/images/home/chevron-up.svg"
                    alt="chevron up icon"
                  />
                </button>
              </div>
              <p
                v-show="accordion.variety"
                class="mt-6 text-gray-4 font-sora text-body-2"
              >
                Creativity is our second name! We designed over 50 attributes
                for our Hoodratz so that each and every one of them would be
                beautiful and one-of-a-kind!
              </p>
              <p
                v-show="accordion.variety"
                class="mt-4 text-gray-4 font-sora text-body-2"
              >
                Aside from creating awesome tech &amp; art, we specialize in
                building social communities. Whether it is
                <a
                  href="https://www.instagram.com/earthpix/"
                  target="_blank"
                  class="text-gray-2 hover:text-gray-1"
                  >@earthpix</a
                >
                that Kyle founded or
                <a
                  href="https://www.instagram.com/nakednfts/"
                  target="_blank"
                  class="text-gray-2 hover:text-gray-1"
                  >@NakedNFTs</a
                >, we have scaled communities enormously.
              </p>
            </div>

            <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1 class="uppercase text-pink-nude font-sora text-caption">
                    Free For 12 Months
                  </h1>
                  <h1 class="text-white text-body font-sora">
                    The First Decentralized File Manager
                  </h1>
                </div>
                <button
                  v-if="!accordion.free"
                  @click.prevent="accordion.free = !accordion.free"
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img src="/images/home/chevron-down.svg" alt="" />
                </button>

                <button
                  v-else
                  @click.prevent="accordion.free = !accordion.free"
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img src="/images/home/chevron-up.svg" alt="" />
                </button>
              </div>
              <p
                v-show="accordion.free"
                class="mt-6 text-gray-4 font-sora text-body-2"
              >
                Think of <em>Dropbox for Web 3.</em> For the past two years, we
                have been working on a custom file management experience &amp;
                ecosystem that ensures a blazing fast "media delivery." Our
                public launch is February 2022. Though, beta testers will
                receive early access.
              </p>
              <p
                v-show="accordion.free"
                class="mt-3 italic text-gray-4 font-sora text-body-2"
              >
                Every holder will receive 12 months of service for free! This is
                a value of at least 120 USD per year.
              </p>
            </div>

            <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1 class="uppercase text-pink-nude font-sora text-caption">
                    Reduced Trading Fees
                  </h1>
                  <h1 class="text-white text-body font-sora">
                    The First Cross-Chain NFT Marketplace
                  </h1>
                </div>
                <button
                  v-if="!accordion.marketplace"
                  @click.prevent="
                    accordion.marketplace = !accordion.marketplace
                  "
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img src="/images/home/chevron-down.svg" alt="" />
                </button>

                <button
                  v-else
                  @click.prevent="
                    accordion.marketplace = !accordion.marketplace
                  "
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img src="/images/home/chevron-up.svg" alt="" />
                </button>
              </div>
              <p
                v-show="accordion.marketplace"
                class="mt-6 text-gray-4 font-sora text-body-2"
              >
                Our brand
                <a
                  href="https://www.instagram.com/nakednfts/"
                  target="_blank"
                  class="text-gray-2 hover:text-gray-1"
                  >@NakedNFTs</a
                >
                is releasing an incredibly thoroughly designed &amp; architected
                NFT marketplace on 12/12 as well, the day of our Hoodratz
                launch! It will be our primary marketplace.
              </p>
              <p
                v-show="accordion.marketplace"
                class="mt-3 text-gray-4 font-sora text-body-2"
              >
                Not only will you, as a hodler, pay fewer taxes automatically,
                but also get to experience history listing on the first
                marketplace that will support Ethereum, Cardano, and Solana. The
                more eyes, the more exposure.
              </p>
            </div>

            <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1 class="uppercase text-pink-nude text-caption font-sora">
                    Airdrops
                  </h1>
                  <h1 class="text-white text-body font-sora">
                    Our creativity keeps creating
                  </h1>
                </div>
                <button
                  v-if="!accordion.airdrops"
                  @click.prevent="accordion.airdrops = !accordion.airdrops"
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img src="/images/home/chevron-down.svg" alt="" />
                </button>

                <button
                  v-else
                  @click.prevent="accordion.airdrops = !accordion.airdrops"
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img src="/images/home/chevron-up.svg" alt="" />
                </button>
              </div>
              <p
                v-show="accordion.airdrops"
                class="mt-6 text-gray-4 font-sora text-body-2"
              >
                Our "creative team" is one of the most qualified in the
                industry. Join our Discord to find out more about our upcoming
                cross-chain collection launches! Not only will we airdrop
                several to hodlers but you are not going to want to miss those
                mints, either.
              </p>
            </div>

            <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h1 class="uppercase text-pink-nude text-caption font-sora">
                    Giving Back
                  </h1>
                  <h1 class="text-white text-body font-sora">
                    Helping good causes worldwide
                  </h1>
                </div>
                <button
                  v-if="!accordion.mission"
                  @click.prevent="accordion.mission = !accordion.mission"
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img src="/images/home/chevron-down.svg" alt="" />
                </button>

                <button
                  v-else
                  @click.prevent="accordion.mission = !accordion.mission"
                  class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
                >
                  <img src="/images/home/chevron-up.svg" alt="" />
                </button>
              </div>
              <p
                v-show="accordion.mission"
                class="mt-6 text-gray-4 font-sora text-body-2"
              >
                Our passion and focus lies and lives on the intersection of
                where technology meets humanity. We try to connect and improve
                lives by leveraging our creative and technological skills by
                working with educational &amp; environmental nonprofits all
                throughout the world.
              </p>
            </div>
          </div>
          <div>
            <img
              class="xl:mt-0 lg:mt-52"
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
        <h1 class="text-pink-3 text-h4">VALUE PROPOSITION</h1>
        <h1 class="mt-3 text-white font-kumbh-bold text-h3">
          What makes them so special?
        </h1>

        <p class="mt-4 text-gray-4 font-sora text-body-2">
          We are NFT &amp; crypto lovers who created a collection drop that we
          would purchase ourselves!
        </p>
      </div>
      <div class="mx-4 mt-5 md:flex md:flex-col md:items-center">
        <div
          class="flex flex-col p-6  bg-hoodratz-grey-7 rounded-3xl sm:w-full md:w-3/4"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-pink-nude text-caption font-sora">
                Variety &amp; Popularity
              </h1>
              <h1 class="text-white font-sora text-body-2">
                7 Traits &amp; Over 50 Attributes
              </h1>
            </div>
            <button
              v-if="!accordion.variety"
              @click.prevent="accordion.variety = !accordion.variety"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-down.svg" alt="" />
            </button>

            <button
              v-else
              @click.prevent="accordion.variety = !accordion.variety"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-up.svg" alt="" />
            </button>
          </div>
          <p
            v-show="accordion.variety"
            class="mt-6 text-gray-4 font-sora text-body-2"
          >
            Creativity is our second name! We designed over 50 attributes for
            our Hoodratz so that each and every one of them would be beautiful
            and one-of-a-kind!
          </p>
          <p
            v-show="accordion.variety"
            class="mt-4 text-gray-4 font-sora text-body-2"
          >
            Aside from creating awesome tech &amp; art, we specialize in
            building social communities. Whether it is
            <a
              href="https://www.instagram.com/earthpix/"
              target="_blank"
              class="text-gray-2 hover:text-gray-1"
              >@earthpix</a
            >
            that Kyle founded or
            <a
              href="https://www.instagram.com/nakednfts/"
              target="_blank"
              class="text-gray-2 hover:text-gray-1"
              >@NakedNFTs</a
            >, we have scaled communities enormously.
          </p>
        </div>

        <div
          class="flex flex-col p-6 mt-5  bg-hoodratz-grey-7 rounded-3xl sm:w-full md:w-3/4"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-pink-nude font-sora text-caption">
                Free For 12 Months
              </h1>
              <h1 class="text-white font-sora text-body-2">
                The First Decentralized File Manager
              </h1>
            </div>
            <button
              v-if="!accordion.free"
              @click.prevent="accordion.free = !accordion.free"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-down.svg" alt="" />
            </button>

            <button
              v-else
              @click.prevent="accordion.free = !accordion.free"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-up.svg" alt="" />
            </button>
          </div>
          <p
            v-show="accordion.free"
            class="mt-6 text-gray-4 font-sora text-body-2"
          >
            Think of <em>Dropbox for Web 3.</em> For the past two years, we have
            been working on a custom file management experience &amp; ecosystem
            that ensures a blazing fast "media delivery." Our public launch is
            February 2022. Though, beta testers will receive early access.
          </p>
          <p
            v-show="accordion.free"
            class="mt-3 italic text-gray-4 font-sora text-body-2"
          >
            Every holder will receive 12 months of service for free! This is a
            value of at least 120 USD per year.
          </p>
        </div>

        <div
          class="flex flex-col p-6 mt-5  bg-hoodratz-grey-7 rounded-3xl sm:w-full md:w-3/4"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-pink-nude font-sora text-caption">
                Reduced Trading Fees
              </h1>
              <h1 class="text-white font-sora text-body-2">
                The First Cross-Chain NFT Marketplace
              </h1>
            </div>
            <button
              v-if="!accordion.marketplace"
              @click.prevent="accordion.marketplace = !accordion.marketplace"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-down.svg" alt="" />
            </button>

            <button
              v-else
              @click.prevent="accordion.marketplace = !accordion.marketplace"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-up.svg" alt="" />
            </button>
          </div>
          <p
            v-show="accordion.marketplace"
            class="mt-6 text-gray-4 font-sora text-body-2"
          >
            Our brand
            <a
              href="https://www.instagram.com/nakednfts/"
              target="_blank"
              class="text-gray-2 hover:text-gray-1"
              >@NakedNFTs</a
            >
            is releasing an incredibly thoroughly designed &amp; architected NFT
            marketplace on 12/12 as well, the day of our Hoodratz launch! It
            will be our primary marketplace.
          </p>
          <p
            v-show="accordion.marketplace"
            class="mt-3 text-gray-4 font-sora text-body-2"
          >
            Not only will you, as a hodler, pay fewer taxes automatically, but
            also get to experience history listing on the first marketplace that
            will support Ethereum, Cardano, and Solana. The more eyes, the more
            exposure.
          </p>
        </div>

        <div
          class="flex flex-col p-6 mt-5  bg-hoodratz-grey-7 rounded-3xl sm:w-full md:w-3/4"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-pink-nude text-caption font-sora">Airdrops</h1>
              <h1 class="text-white font-sora text-body-2">
                Our creativity keeps creating
              </h1>
            </div>
            <button
              v-if="!accordion.airdrops"
              @click.prevent="accordion.airdrops = !accordion.airdrops"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-down.svg" alt="" />
            </button>

            <button
              v-else
              @click.prevent="accordion.airdrops = !accordion.airdrops"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-up.svg" alt="" />
            </button>
          </div>
          <p
            v-show="accordion.airdrops"
            class="mt-6 text-gray-4 font-sora text-body-2"
          >
            Our "creative team" is one of the most qualified in the industry.
            Join our Discord to find out more about our upcoming cross-chain
            collection launches! Not only will we airdrop several to hodlers but
            you are not going to want to miss those mints, either.
          </p>
        </div>

        <div
          class="flex flex-col p-6 mt-5  bg-hoodratz-grey-7 rounded-3xl sm:w-full md:w-3/4"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-pink-nude text-caption font-sora">Giving Back</h1>
              <h1 class="text-white font-sora text-body-2">
                Helping good causes worldwide
              </h1>
            </div>
            <button
              v-if="!accordion.mission"
              @click.prevent="accordion.mission = !accordion.mission"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-down.svg" alt="" />
            </button>

            <button
              v-else
              @click.prevent="accordion.mission = !accordion.mission"
              class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl"
            >
              <img src="/images/home/chevron-up.svg" alt="" />
            </button>
          </div>
          <p
            v-show="accordion.mission"
            class="mt-6 text-gray-4 font-sora text-body-2"
          >
            Our passion and focus lies and lives on the intersection of where
            technology meets humanity. We try to connect and improve lives by
            leveraging our creative and technological skills by working with
            educational &amp; environmental nonprofits all throughout the world.
          </p>
        </div>

        <div class="flex items-center justify-center mt-5">
          <img src="/images/home/hoodratz-attribute.svg" alt="" />
        </div>
      </div>
    </section>

    <section
      class="relative max-w-screen-lg pt-20 mx-auto overflow-hidden text-center  md:pt-24 lg:pt-64 xl:max-w-screen-xl"
    >
      <img
        class="absolute hidden  xl:left-36 xl:top-20 lg:block lg:top-24 lg:left-36"
        src="/images/home/hoodratz-ellipse-88.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-0 xl:top-40 lg:block lg:top-5 lg:left-3/4"
        src="/images/home/hoodratz-ellipse-103.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-1/2 xl:top-20 lg:block lg:top-64 lg:left-1/2"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-36 xl:top-3/4 lg:block lg:top-full lg:left-36"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:right-0 xl:top-10 lg:block lg:top-5 lg:left-3/4"
        src="/images/home/hoodratz-ellipse-103.png"
        alt=""
      />
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <img
          class="absolute hidden  xl:left-20 xl:top-3/4 lg:block lg:top-3/4 lg:left-20"
          src="/images/home/hoodratz-ellipse-103.png"
          alt=""
        />
        <div class="relative">
          <div class="relative z-10 max-w-screen-lg mx-auto text-center">
            <h2
              class="mb-8 text-3xl font-extrabold leading-none tracking-tight  text-gray-1 sm:text-5xl lg:text-6xl font-kumbh-bold"
            >
              A truly unique NFT collection.<br />
              In several ways.
            </h2>
          </div>
          <blockquote class="mt-10">
            <p
              class="max-w-5xl mx-auto mb-6 space-y-6 text-lg font-medium  text-gray-3 sm:text-2xl sm:leading-10 font-sora"
            >
              Not only have we been trying to create beautiful art, but we have
              also been hard at work creating a collection that has an
              <span
                class="font-semibold text-pink-600"
                style="
                  box-shadow: inset 0 -0.1666666667em 0 0 #fff,
                    inset 0 -0.3333333333em 0 0 #bae6fd;
                "
                >incredible amount of utility.</span
              >
              It's quite simply unmatched. We are not advertising for something
              to hopefully be released. We have already put in the work and
              developed it. Our NakedNFTs marketplace &amp; Meema's
              decentralized file manager are incoming. dApps are the whole &amp;
              sole focus of our companies. ❤️
            </p>
          </blockquote>
          <figcaption
            class="flex flex-col items-center mt-12 font-medium sm:text-xl"
          >
            <div class="p-1 mb-3 border-2 border-pink-900 rounded-full">
              <img
                src="/images/chris.jpeg"
                alt=""
                class="w-10 h-10 bg-indigo-100 rounded-full"
                loading="lazy"
              />
            </div>
            <div class="text-gray-1">Chris Breuer</div>
            <div class="text-gray-5">
              Creator of Hoodratz &amp; Meema &amp; NakedNFTs
            </div>
          </figcaption>
        </div>
      </div>
    </section>

    <section id="future-desktop" class="relative hidden h-full py-36 lg:block">
      <img
        class="absolute hidden  xl:left-36 xl:top-20 lg:block lg:top-24 lg:left-36"
        src="/images/home/hoodratz-ellipse-88.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-0 xl:top-40 lg:block lg:top-5 lg:left-3/4"
        src="/images/home/hoodratz-ellipse-103.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-1/2 xl:top-20 lg:block lg:top-64 lg:left-3/4"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-96 xl:top-3/4 lg:block lg:top-3/4 lg:left-36"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-3/4 xl:top-3/4 lg:block lg:top-3/4 lg:left-3/4"
        src="/images/home/hoodratz-ellipse-88.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:left-3/4 xl:top-3/4 lg:block lg:top-3/4 lg:left-3/4"
        src="/images/home/hoodratz-ellipse-97.png"
        alt=""
      />
      <img
        class="absolute hidden  xl:right-0 xl:top-10 lg:block lg:top-5 lg:left-3/4"
        src="/images/home/hoodratz-ellipse-103.png"
        alt=""
      />
      <div class="relative">
        <img src="/images/home/hoodratz-future-lg.png" alt="" />
        <div class="absolute inset-0 flex flex-col items-center left-7 top-12">
          <img src="/images/home/hoodratz-future-tech-lg.png" alt="" />
          <h1
            class="mt-5 tracking-widest text-center uppercase  text-pink-3 font-sora text-h4"
          >
            Interoperability
          </h1>
          <h1 class="my-5 text-white text-h3 font-kumbh-bold">
            We are in it for the long run. Are you?
          </h1>
          <p class="text-center text-body-2 text-gray-4 font-sora">
            Initially launching on the Solana blockchain,
          </p>
          <p class="text-center text-body-2 text-gray-4 font-sora">
            then expanding into Ethereum &amp; Cardano blockchain.
          </p>
          <div class="flex items-center mt-5">
            <img class="mr-5" src="/images/solana-logo.svg" alt="Solana logo" />
          </div>
          <div class="flex items-center mt-5">
            <img
              class="mr-12 opacity-40"
              src="/images/logo-eth.svg"
              alt="Ethereum logo"
            />
            <img
              class="opacity-20"
              src="/images/logo-ada.svg"
              alt="Cardano logo"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="future-mobile"
      class="relative block h-full pb-10 mx-4 lg:hidden"
    >
      <div class="flex flex-col items-center">
        <img src="/images/home/hoodratz-tech.svg" alt="Hoodratz tech" />
        <h1 class="mt-5 text-center uppercase text-pink-3 font-sora text-h4">
          Interoperability
        </h1>
        <img src="/images/home/hoodratz-future.svg" alt="" />
        <div class="-mt-32 text-center font-sora">
          <h1 class="text-white text-h3 font-kumbh-bold">
            Become a part of the future of NFT
          </h1>
          <p class="mt-5 text-gray-4 text-body-2 font-sora">
            All hoodratz are stored on the Solana blockchain and their URL is
            secured by Meema. NFT world has never seen this before!
          </p>
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
      accordion: {
        variety: false,
        free: false,
        marketplace: false,
        mission: false,
        airdrops: false,
      },
      social,
    };
  },
};
</script>
