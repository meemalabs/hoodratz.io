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
                <div class="absolute inset-0 flex items-center justify-center">
                    <h1 class="text-pink-3 uppercase font-sora mt-8 tracking-widest -mt-2">Privacy</h1>
                </div>
            </div>

            <div class="text-center mx-4">
                <div class="mb-20">
                    <h2 class="text-white font-kumbh-bold text-3xl md:text-5xl mb-4 -mt-6">Hoodratz Policy</h2>
                    <p class="font-sora leading-7">
                        We take privacy serious.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div id="privacy-policy" class="mx-4 md:container md:mx-auto mt-8 mb-20 font-sora">
        <div class="w-2/3 mx-auto">
            <Content />
        </div>
    </div>  

    <AppFooter />
</div>
</template>

<script>
import Content from '@/content/privacy-policy.md'

export default {
    components: {
        Content
    }
 }
</script>
