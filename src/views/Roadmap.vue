<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
<div class="bg-gray-8 w-screen h-full text-gray-4">
    <AppHeader />

    <div class="relative w-full my-4">
        <div class="w-full"><img src="/images/roadmap.svg" alt="About"></div>
        <div class="absolute inset-0 flex items-center justify-center">
            <h1 class="text-pink-3 uppercase font-sora mt-8 tracking-widest -mt-2">Roadmap</h1>
        </div>
    </div>

    <div class="text-center mx-4">
        <div class="mb-20">
            <h2 class="text-white font-kumbh-bold text-3xl mb-4 -mt-6">Find out what's the plan!</h2>
            <p class="font-sora leading-7">
                There’s a long road ahead, but we like keeping deadlines.
            </p>
        </div>
    </div>

    <div class="text-center mx-4 my-20">
            <div class="rounded-4xl bg-gray-7 p-6 font-sora relative">
                <div class="absolute inset-x-0 top-0 flex justify-center -mt-6">
                    <div class="bg-pink-gradient w-12 h-12 rounded-full flex items-center justify-center text-xl text-white">
                        <div><img src="/images/check.svg" alt=""></div>
                    </div>
                </div>
                <div class="mt-6">
                    <div class="uppercase">December 2021</div>
                    <div class="text-white text-2xl font-bold my-4">First generation drop</div>
                    <p class="leading-8">
                        Launch all 10,000 algorithmically generated Hoodratz to our awesome community.
                    </p>
                </div>
            </div>

        <div class="rounded-4xl bg-gray-7 my-8 p-6 font-sora relative">
            <div class="absolute inset-x-0 top-0 flex justify-center -mt-6">
                <div class="bg-pink-gradient w-12 h-12 rounded-full flex items-center justify-center text-xl text-white">
                    <div><img src="/images/check.svg" alt=""></div>
                </div>
            </div>
            <div class="mt-6">
                <div class="uppercase">January 2021</div>
                <div class="text-white text-2xl font-bold my-4">Marketplace integration</div>
                <p class="leading-8">
                    Buy, sell and trade Hoodratz on nakednft.com and opensea.com
                </p>
            </div>
        </div>

        <div class="rounded-4xl bg-gray-7 my-8 p-6 font-sora relative">
            <div class="absolute inset-x-0 top-0 flex justify-center -mt-6">
                <div class="bg-gray-6 w-12 h-12 rounded-full flex items-center justify-center text-xl text-white">
                    <div>3</div>
                </div>
            </div>
            <div class="mt-6">
                <div class="uppercase">January 2021</div>
                <div class="text-white text-2xl font-bold my-4">Merch</div>
                <p class="leading-8">
                    Exclusive Hoodratz merch will be available in our store... Our team has been working on this one a lot so we are sure you will love it!
                </p>
            </div>
        </div>

        <div class="rounded-4xl bg-gray-7 my-8 p-6 font-sora relative">
            <div class="absolute inset-x-0 top-0 flex justify-center -mt-6">
                <div class="bg-gray-6 w-12 h-12 rounded-full flex items-center justify-center text-xl text-white">
                    <div>4</div>
                </div>
            </div>
            <div class="mt-6">
                <div class="uppercase">March 2021</div>
                <div class="text-white text-2xl font-bold my-4">Lorem ipsum</div>
                <p class="leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

        <div class="rounded-4xl bg-gray-7 my-8 p-6 font-sora relative">
            <div class="absolute inset-x-0 top-0 flex justify-center -mt-6">
                <div class="bg-gray-6 w-12 h-12 rounded-full flex items-center justify-center text-xl text-white">
                    <div>5</div>
                </div>
            </div>
            <div class="mt-6">
                <div class="uppercase">March 2021</div>
                <div class="text-white text-2xl font-bold my-4">Lorem ipsum</div>
                <p class="leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
        </div>
    </div>

    <AppFooter />
</div>
</template>
