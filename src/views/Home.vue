<template>
  <div class="relative w-screen h-full bg-hoodratz-grey-8">
    <header class="flex items-center justify-between h-16 px-6 bg-purple-800">
        <div class="w-32"><img src="/images/logo.svg" alt=""></div>
        <div><img src="/images/menu.svg" alt=""></div>
    </header>
    <section id="hero" class="relative w-screen h-screen max-h-full bg-no-repeat bg-cover bg-hero-sm">
      <div class="flex flex-col mx-4">
        <img class="object-contain w-full h-full" src="/images/home/hoodratz-card-sm.png" alt="">
        <div>
          <h1 class="text-white font-kumbh-bold" style="line-height: 45px; font-size: 33px; letter-height: 1%;">Discover HoodRatz, a new NFT collection </h1>
          <p class="mt-5 text-base leading-8 font-sora text-hoodratz-grey-2">
            A limited edition of 10.000 collectible pixel rats.
          </p>
        </div>
        <button class="w-full py-4 mt-5 text-lg bg-white rounded-full font-sora" style="box-shadow: 6px 30px 60px 5px #592736;">
          JOIN DISCORD
        </button>
        <button class="w-full py-4 mt-5 text-lg text-white border border-white rounded-full font-sora" style="background: rgba(255, 255, 255, 0.01);">
          FOLLOW US
        </button>
      </div>
    </section>
    <section id="about-us" class="relative h-full ">
      <img src="/images/home/hoodratz-about-us.svg" alt="" style="height: auto;">
      <div class="absolute flex flex-col mx-4 top-44">
        <h1 class="text-hoodratz-pink-3 font-sora">ABOUT US</h1>
        <h1 class="mt-3 text-white font-kumbh-bold" style="font-size: 28px; line-height: 36px; letter-spacing: 1%;">What are Hoodratz?</h1>
        <p class="mt-5 text-hoodratz-grey-4 font-sora" style="font-size: 16px; line-height: 30px; letter-spacing: 1%">
          Hodratz are uniquely generated and collectible NFTs. Each of them is one-of-a-kind and 100% owned by you.
        </p>
      </div>
      <div class="mx-4 mt-5">
        <div class="relative border border-white rounded-4xl" style="background: radial-gradient(82.01% 81.61% at 94.63% 16.78%, #ED9DB9 0%, #EC83A2 57.37%, #F05584 100%);">
          <div class="flex items-center justify-center bg-cover bg-hoodratz-card-bg h-80 rounded-4xl">
            <img class="object-contain w-64 h-64 mb-4" src="/images/home/josephine.png" alt="">
          </div>
          <div class="relative flex items-center w-full p-5 bg-white rounded-br-3xl rounded-bl-3xl">
            <div class="p-3 mr-5 rounded-full bg-hoodratz-grey-7">
              <img src="/images/home/star.svg" alt="">
            </div>
            <div class="flex flex-col">
              <h1 class="text-hoodratz-grey-4 font-sora">Hoodrat #234</h1>
              <h1 class="text-hoodratz-grey-8 font-sora">Josephine, the town rat</h1>
            </div>
          </div>
        </div>

        <div class="flex flex-col p-6 mt-10 bg-hoodratz-grey-7 rounded-4xl font-sora">
          <div class="flex items-center">
            <img class="mr-auto" src="/images/home/hoodratz-nft-hand.png" alt="">
            <div class="flex flex-col text-right">
              <h1 class="text-hoodratz-pink-3">RARITY</h1>
              <h1 class="text-white">LEGENDARY</h1>
            </div>
          </div>
          <p class="mt-6 text-hoodratz-grey-4" style="font-size: 16px; line-height: 30px; letter-spacing: 1%;">
            Hoodratz come with various rare attributes. <br>The rarer the attribute, the rarer is your rat!
          </p>
        </div>

        <div class="flex flex-col p-6 mt-10 bg-hoodratz-grey-7 rounded-4xl font-sora">
          <div class="flex items-center">
            <div class="p-5 mr-auto" style="background: linear-gradient(103.6deg, rgba(255, 255, 255, 0.4) 1.67%, rgba(255, 255, 255, 0.1) 81.8%); border: 2px solid #463851; box-sizing: border-box; backdrop-filter: blur(40px); border-radius: 20px;">
              <img src="/images/home/hoodratz-gift.svg" alt="">
            </div>
            <div class="flex flex-col text-right">
              <h1 class="text-hoodratz-pink-3">AMOUNT</h1>
              <h1 class="text-white">10 000</h1>
            </div>
          </div>
          <p class="mt-6 text-hoodratz-grey-4" style="font-size: 16px; line-height: 30px; letter-spacing: 1%;">
            Remember that our stock is limited! There will only ever be 10 thousand Hoodratz created. <br>Grab yours while you still can!
          </p>
        </div>

        <div class="relative mt-10 rounded-4xl" style="background: radial-gradient(82.01% 81.61% at 94.63% 16.78%, #ED9DB9 0%, #EC83A2 57.37%, #F05584 100%);">
          <div class="flex flex-col w-full p-8 text-right bg-no-repeat bg-contain text-hoodratz-pink-1 h-72 bg-hoodratz-pink-bg rounded-4xl font-sora">
            <h1 style="line-height: 22px; letter-spacing: 5px; font-size: 14px;">BACKGROUNDS</h1>
            <h1 style="font-size: 22px; line-height: 27.72px; letter-spacing: 5px;">23</h1>
          </div>
        </div>
      </div>
    </section>

    <section id="proposition" class="relative pb-10">
      <img src="/images/home/hoodratz-proposition.svg" alt="" style="height: auto;">
      <div class="absolute mx-4 top-36">
        <h1 class="text-hoodratz-pink-3" style="font-size: 16px; line-height: 22px; letter-spacing: 10px;">VALUE PROPOSITION</h1>
        <h1 class="mt-3 text-white font-kumbh-bold" style="font-size: 28px; line-height: 36px;">What makes them so special?</h1>
        <p class="mt-4 text-hoodratz-grey-4 font-sora" style="font-size: 16px; line-height: 30px;">We are NFT and crypto lovers and created a collection drop that we would like to buy ourselves! Check this out:</p>
      </div>
      <div class="mx-4 mt-5">
        <div class="flex flex-col p-6 bg-hoodratz-grey-7 rounded-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-hoodratz-nude" style="font-size: 14px; line-height: 22px;">VARIETY</h1>
              <h1 class="text-white" style="font-size: 20px; line-height: 30px;">Over 200 attributes</h1>
            </div>
            <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
              <img src="/images/home/chevron-right.svg" alt="">
            </div>
          </div>
          <p class="mt-6 text-hoodratz-grey-4 font-sora" style="font-size: 16px; line-height: 30px;">
            Creativity is our second name! We designed over 200 attributes for our Hoodratz so that each and every one of them would be amazing and one-of-a-kind!
          </p>
        </div>

        <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-hoodratz-nude" style="font-size: 14px; line-height: 22px;">RARITY</h1>
              <h1 class="text-white" style="font-size: 20px; line-height: 30px;">4 rarity levels</h1>
            </div>
            <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
              <img src="/images/home/chevron-right.svg" alt="">
            </div>
          </div>
        </div>

        <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-hoodratz-nude" style="font-size: 14px; line-height: 22px;">POPULARITY</h1>
              <h1 class="text-white" style="font-size: 20px; line-height: 30px;">Amazing NFT community</h1>
            </div>
            <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
              <img src="/images/home/chevron-right.svg" alt="">
            </div>
          </div>
        </div>

        <div class="flex flex-col p-6 mt-5 bg-hoodratz-grey-7 rounded-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-hoodratz-nude" style="font-size: 14px; line-height: 22px;">OUR MISSION</h1>
              <h1 class="text-white" style="font-size: 20px; line-height: 30px;">Helping charities worldwide</h1>
            </div>
            <div class="px-4 py-5 bg-hoodratz-grey-6 rounded-xl">
              <img src="/images/home/chevron-right.svg" alt="">
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center mt-5">
          <img src="/images/home/hoodratz-attribute.svg" alt="">
        </div>
      </div>
    </section>

    <section id="future" class="relative pb-10 mx-4">
      <div class="flex flex-col items-center">
        <img src="/images/home/hoodratz-tech.svg" alt="">
        <h1 class="mt-5 text-center text-hoodratz-pink-3 font-sora" style="font-size: 16px; line-height: 22px; letter-spacing: 10px;">NEWSET TECH</h1>
        <img src="/images/home/hoodratz-future.svg" alt="">
        <div class="-mt-32 text-center font-sora">
          <h1 class="text-white" style="font-size: 28px; line-height: 36px;">Become a part of the future of NFT</h1>
          <p class="mt-5 text-hoodratz-grey-4" style="font-size: 16px; line-height: 30px; letter-spacing: 1.6px;">
            All hoodratz are stored on the Solana blockchain and their URL is secured by Meema. NFT world has never seen this before!
          </p>
          <img src="/images/home/hoodratz-circle.svg" alt="">
        </div>
        <div class="flex items-center justify-center">
          <img class="mr-5" src="/images/home/hoodratz-solana.svg" alt="">
          <img src="/images/home/hoodratz-meema.svg" alt="">
        </div>
      </div>
    </section>
  </div>
</template>
