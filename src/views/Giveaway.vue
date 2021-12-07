<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div
    class="w-full h-full  bg-gray-8 text-gray-4 selection:bg-pink-3 selection:text-white"
  >
    <AppHeader />

    <div class="container pb-24 mx-auto">
      <div class="relative mx-auto md:mt-32">
        <div class="mx-auto md:w-2/3">
          <img
            class="absolute hidden  xl:left-3/4 xl:-top-10 lg:block lg:-top-16 lg:right-0"
            src="/images/home/hoodratz-ellipse-97.png"
            alt=""
          />
          <div class="relative w-full my-4">
            <div class="w-full">
              <img src="/images/honorary.png" alt="About" />
            </div>
            <div class="absolute inset-0 flex items-center justify-center -top-10">
              <h1 class="-mt-2 tracking-widest uppercase text-pink-3 font-sora">
                Influencers
              </h1>
            </div>
          </div>

          <div class="mx-4 text-center relative -top-44">
            <div class="mb-20">
              <h2
                class="mb-4 -mt-6 text-3xl text-white  font-kumbh-bold md:text-5xl"
              >
                What’s this hype all about?!
              </h2>
              <p class="leading-7 font-sora">
                Join us in this mythic venture of creating this ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto md:mb-32 -top-24">
        <img
          class="absolute hidden  xl:top-0 xl:-left-12 lg:top-0 lg:-left-5 lg:block"
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
          class="absolute hidden  left-90 xl:top-3/4 lg:block lg:top-3/4 lg:left-0"
          src="/images/home/hoodratz-ellipse-88.png"
          alt="background particle image"
        />
        <img
          class="absolute hidden  xl:left-10 xl:top-1/4 lg:block lg:top-1/2 lg:left-0"
          src="/images/home/hoodratz-ellipse-97.png"
          alt="background particle image"
        />
        <img
          class="absolute hidden  xl:left-2 xl:top-1/2 lg:block lg:top-3/4 lg:left-0"
          src="/images/home/hoodratz-ellipse-88.png"
          alt="background particle image"
        />
        <img
          class="absolute hidden xl:top-1/2 left-85 lg:top-1/3 lg:block"
          src="/images/home/hoodratz-ellipse-1424.svg"
          alt="background particle image"
        />
        <img
          class="absolute hidden  xl:top-3/4 xl:left-2 lg:top-3/4 lg:-left-10 lg:block"
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

        <div class="relative mx-auto">
          <div class="max-w-5xl mx-auto mt-12">
            <div class="max-w-xl mx-auto">
              <h1
                class="pl-4 mt-10 text-white underline  md:pl-0 font-kumbh-bold text-title"
              >
                On the List?
              </h1>
              <p
                class="inline-flex items-center mt-4 ml-2  font-sora text-caption"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-7 h-7 text-pink-nude"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-base text-white"
                  >Claim your 1/1 Hoodratz NFT by sharing it on Twitter.</span
                >
              </p>
              <h1
                class="pl-4 mt-10 text-white underline  md:pl-0 font-kumbh-bold text-title"
              >
                Not on the List?
              </h1>
              <h2
                class="pl-4 mt-4 mb-6  md:pl-0 text-pink-3 font-sora-semibold text-button"
              >
                <em>Spread good vibes and win a mythic Hoodratz NFT!</em>
              </h2>
              <p
                class="inline-flex items-center pb-3 ml-2  font-sora text-caption"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-7 h-7 text-pink-nude"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-base text-white"
                  >Tweet positively about your favorite people on this
                  list</span
                >
              </p>
              <p
                class="inline-flex items-center pb-3 ml-2  font-sora text-caption"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-7 h-7 text-pink-nude"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-base text-white"
                  >Tweet must include @hoodratznft</span
                >
              </p>
              <p
                class="inline-flex items-center pb-3 ml-2  font-sora text-caption"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-7 h-7 text-pink-nude"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-base text-white"
                  >Join Discord for questions</span
                >
              </p>
              <p
                class="inline-flex items-center pb-3 ml-2  font-sora text-caption"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-7 h-7 text-pink-nude"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-base text-white"
                  >Winners announced 12/10 @ 11am PT</span
                >
              </p>

              <div class="flex justify-center mt-12">
                <a
                  href="https://discord.gg/jsahnpyr4X"
                  target="_blank"
                  class="px-8 py-3 text-white uppercase rounded-full  cta cta-gradient font-sora shadow-hoodratz-btn text-button"
                >
                  Join Discord
                </a>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 pt-24 mt-10 sm:grid-cols-3">
              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/drake.jpg"
                    alt="Sample"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div
                      class="w-8 h-8 transition duration-150 transform  hover:scale-125"
                    >
                      <img
                        class="duration-150 rounded-full  hover:transform hover:scale-125"
                        src="https://pbs.twimg.com/profile_images/1466187175771451393/i_WlaN5B_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/DrakeBell"
                      target="_blank"
                      class="text-center text-white transition duration-150  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@DrakeBell</a
                    >
                  </div>
                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>

              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/ian.png"
                    alt="Sample"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div class="w-8 h-8">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1466978133270319113/5OFI3lr5_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/ianlandsman"
                      target="_blank"
                      class="text-center text-white transition duration-150 transform  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@ianlandsman</a
                    >
                  </div>

                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>

              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/SolNFTs.jpg"
                    alt="Sample"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div class="w-8 h-8">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1467363893634809857/gJfi7NM3_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/SolNFTs"
                      target="_blank"
                      class="text-center text-white transition duration-150 transform  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@SolNFTs</a
                    >
                  </div>

                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 pt-24 mt-10 sm:grid-cols-3">
              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/jack.jpg"
                    alt="Sample"
                    class="object-cover object-center w-full h-full"
                  />
                </div>

                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div class="w-8 h-8">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/989296839194173440/ZRsVtbV5_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/JackEllis"
                      target="_blank"
                      class="text-center text-white transition duration-150 transform  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@JackEllis</a
                    >
                  </div>

                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>

              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/solnftradar.jpg"
                    alt="Sample"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div class="w-8 h-8">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1462864055157334020/YFwq6HAj_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/solnftradar"
                      target="_blank"
                      class="text-center text-white transition duration-150 transform  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@solnftradar</a
                    >
                  </div>
                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>

              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/nuno.jpg"
                    alt="Nunos NFT"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div class="w-8 h-8">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1433501939648565257/hT4oXpfq_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/enunomaduro"
                      target="_blank"
                      class="text-center text-white transition duration-150 transform  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@enunomaduro</a
                    >
                  </div>

                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 pt-24 mt-10 sm:grid-cols-3">
              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/dabit.jpg"
                    alt="Sample"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div class="w-8 h-8">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1467551717961179145/D272PwD2_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/dabit3"
                      target="_blank"
                      class="text-center text-white transition duration-150 transform  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@dabit3</a
                    >
                  </div>

                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>

              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/angie.jpg"
                    alt="Sample"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div class="w-8 h-8">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/sarah_edo"
                      target="_blank"
                      class="text-center text-white transition duration-150 transform  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@sarah_edo</a
                    >
                  </div>

                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>

              <div>
                <div class="w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/images/SOLbuckets.jpg"
                    alt="Sample"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <div class="flex flex-col py-2 mt-4">
                  <div class="flex items-center justify-center space-x-4">
                    <div class="w-8 h-8">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1440746527568236548/PkUzoGY2_400x400.jpg"
                      />
                    </div>
                    <a
                      href="https://twitter.com/SOLbuckets"
                      target="_blank"
                      class="text-center text-white transition duration-150 transform  font-kumbh-bold text-h3 hover:text-pink-2"
                      >@SOLbuckets</a
                    >
                  </div>
                  <div class="flex justify-center pt-4">
                    <a
                      href="https://twitter.com/intent/tweet?text=@hoodratznft"
                      target="_blank"
                      class="w-3/4 p-3 mt-3 text-center text-white transition duration-150 transform border rounded-full  bg-gray-8 font-sora-semibold shadow-hoodratz-btn hover:bg-gray-6 border-pink-3"
                    >
                      Tweet @hoodratznft
                    </a>
                  </div>
                  <p class="mt-5 text-center text-pink-3 font-sora text-title">
                    Not Claimed!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          class="pt-48 mb-4 -mt-6 text-3xl text-center text-white  font-kumbh-bold md:text-3xl"
        >
          And a whole lot more to come...
        </p>
        <p
          class="pt-4 mb-4 -mt-6 text-3xl text-center  text-pink-3 font-kumbh-bold md:text-3xl"
        >
          Rat pack, stay tuned and #stayhood
        </p>

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

.cta {
  display: inline-block;
  vertical-align: middle;
  -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  font-family: inherit;
  -webkit-appearance: none;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  background-color: #6e7f91;
  color: #fefefe;
}

.cta:hover,
.cta:focus {
  text-decoration: none;
}

.cta-gradient {
  border: 0;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  background: #f05281;
  background-image: linear-gradient(
    to right,
    #f05281,
    #ed9db9,
    #ed9db9,
    #f05281
  );
  background-size: 300% 100%;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.cta-gradient:hover {
  background-position: 100% 0;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
</style>
