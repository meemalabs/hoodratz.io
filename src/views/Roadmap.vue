<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
<div class="bg-gray-8 w-screen h-full text-gray-4">
    <AppHeader />

    <div class="container mx-auto md:mt-32">
        <div class="md:w-2/3 mx-auto">
            <div class="relative w-full my-4">
                <div class="w-full"><img src="/images/roadmap.png" alt="About"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <h1 class="text-pink-3 uppercase font-sora mt-8 tracking-widest -mt-2">Roadmap</h1>
                </div>
            </div>

            <div class="text-center mx-4">
                <div class="mb-20">
                    <h2 class="text-white font-kumbh-bold text-3xl md:text-5xl mb-4 -mt-6">Find out what's the plan!</h2>
                    <p class="font-sora leading-7">
                        There’s a long road ahead, but we like keeping deadlines.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto md:mb-32">
        <div class="md:w-2/3 mx-auto">
            <div class="text-center md:text-left mx-4 my-20 relative">
                <div v-for="(item, index) in roadmap"
                    class="rounded-4xl bg-gray-7 font-sora relative"
                    :class="{ 'p-6 md:p-8': index === 0, 'my-8 p-6': index }">
                    <div class="absolute inset-x-0 top-0 md:-top-0 flex justify-center -mt-6 md:hidden">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white"
                            :class="{ 'bg-gray-6': !item.done, 'bg-pink-gradient': item.done }">
                            <div v-if="item.done"><img src="/images/check.svg" alt=""></div>
                            <div v-else>{{ $date(item.date).format('D') }}</div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 left-0 flex justify-center hidden md:block z-10">
                        <div class="-ml-16 h-full flex items-center">
                            <div v-if="item.done" class="bg-pink-gradient w-12 h-12 rounded-full flex items-center justify-center text-xl text-white">
                                <div><img src="/images/check.svg" alt=""></div>
                            </div>
                            <div v-else class="bg-pink-1 border-2 border-pink-3 w-12 h-12 rounded-full flex items-center justify-center text-xl text-white"></div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="flex justify-center md:justify-between">
                            <div class="hidden md:block text-pink-3">{{ $date(item.date).format('DD') }}</div>
                            <div class="uppercase">{{ $date(item.date).format('MMMM YYYY') }}</div>
                        </div>
                        <div class="text-white text-2xl font-bold my-4">{{ item.title }}</div>
                        <p class="leading-8">
                            {{ item.description }}
                        </p>
                    </div>
                </div>

                <div class="h-full border-l border-gray-4 -ml-10 border-dashed absolute top-0 hidden md:block"></div>
            </div>
        </div>
    </div>

    <AppFooter />
</div>
</template>

<script>
import { roadmap } from '@/content/app.json'

export default {
    data () {
        return {
            roadmap,
        }
    }
}
</script>
