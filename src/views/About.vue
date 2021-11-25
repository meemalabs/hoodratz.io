<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
<div class="bg-gray-8 w-screen h-full text-gray-4">
    <AppHeader />
    <div class="md:hidden">
        <img class="object-cover w-full" src="/images/about.png" alt="Hoodratz about">
    </div>
    <!-- Content -->
    <div class="mx-4 md:container md:mx-auto">
        <div class="md:grid md:grid-cols-2">
            <div class="mb-8 md:mb-0 flex md:items-center">
                <div>
                    <div class="relative">
                        <div class="w-64 -ml-4"><img src="/images/about-txt.svg" alt="About"></div>
                        <h1 class="text-pink-3 uppercase font-sora mt-8 absolute inset-0 tracking-widest">About</h1>
                    </div>
                    <h2 class="text-white font-kumbh-bold text-3xl md:text-5xl mb-4">The Hoodratz story</h2>
                    <p class="font-sora leading-7">
                        Hoodratz are uniquely generated, cute and collectible rats with proof of ownership stored on the Solana blockchain. All individual pieces of the Hoodratz world have been created by hand and algorithmically generated using custom code.  There are 165 attributes across 18 categories: These categories include background, body, type, pattern, tail, expression, mouth, eyes, skin, glasses, facial hair, hat/hair, mouth accessories, earring, neck, blankets, flags and best of all, cigars! With these combined, it gives a total mathematical combination of millions of unique Hoodratz - but with only 10,000 being minted, some are more unique and rare than others.
                    </p>
                </div>
            </div>
            <div class="relative hidden md:block md:-ml-20">
                <div><img src="/images/about-cover.png" alt=""></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-80 lg:w-96 xl:w-108">
                        <img src="/images/about-desktop.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="md:grid md:grid-cols-2">
            <div>
                <div class="relative">
                    <div class="-ml-4 absolute inset-x-0 top-0"><img src="/images/the-team.svg" alt="The Team"></div>
                    <h1 class="text-pink-3 uppercase font-sora mt-8 tracking-widest">The Team</h1>
                </div>
                <h2 class="text-white font-kumbh-bold text-3xl md:text-5xl my-4">Who's behind it all?</h2>
                <p class="font-sora leading-7">
                    We are a small group of friends with the same vision and goal. Our core principles have always been to deliver the best possible NFT user experience from launch as well as creating collectible art with utility.
                </p>
            </div>
        </div>

        <div class="mt-12 mb-20 md:grid md:grid-cols-4 md:gap-6">
            <div class="flex md:flex-col bg-gray-7 my-6 px-8 py-6 rounded-4xl">
                <div class="w-16 mr-4">
                    <img src="/images/team/chris.png" alt="Chris Breuer">
                </div>
                <div class="flex flex-1 md:items-center md:mt-8">
                    <div class="flex flex-col flex-1">
                        <span class="text-white text-2xl">Chris</span>
                        <span>CEO</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/images/twitter.svg" alt="Twitter">
                        <img src="/images/linkedin.svg" alt="Linkedin">
                    </div>
                </div>
            </div>
            <div class="flex md:flex-col bg-gray-7 my-6 px-8 py-6 rounded-4xl">
                <div class="w-16 mr-4">
                    <img src="/images/team/avery.png" alt="Chris Breuer">
                </div>
                <div class="flex flex-1 md:items-center md:mt-8">
                    <div class="flex flex-col flex-1">
                        <span class="text-white text-2xl">Avery</span>
                        <span>PM</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/images/twitter.svg" alt="Twitter">
                        <img src="/images/linkedin.svg" alt="Linkedin">
                    </div>
                </div>
            </div>
            <div class="flex md:flex-col bg-gray-7 my-6 px-8 py-6 rounded-4xl">
                <div class="w-16 mr-4">
                    <img src="/images/team/chris.png" alt="Chris Breuer">
                </div>
                <div class="flex flex-1 md:items-center md:mt-8">
                    <div class="flex flex-col flex-1">
                        <span class="text-white text-2xl">Kyle</span>
                        <span>Developer</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/images/twitter.svg" alt="Twitter">
                        <img src="/images/linkedin.svg" alt="Linkedin">
                    </div>
                </div>
            </div>
            <div class="flex md:flex-col bg-gray-7 my-6 px-8 py-6 rounded-4xl">
                <div class="w-16 mr-4">
                    <img src="/images/team/chris.png" alt="Chris Breuer">
                </div>
                <div class="flex flex-1 md:items-center md:mt-8">
                    <div class="flex flex-col flex-1">
                        <span class="text-white text-2xl">Denis</span>
                        <span>Designer</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="#" target="_blank"><img src="/images/twitter.svg" alt="Twitter"></a>
                        <img src="/images/linkedin.svg" alt="Linkedin">
                    </div>
                </div>
            </div>
        </div>
    </div>  

    <AppFooter />
</div>
</template>
