<template>
<footer class="text-gray-3 font-sora bg-gray-6">
    <div class="container mx-auto">
        <div class="md:hidden bg-gray-8">
            <h3 class="bg-gray-7 text-white uppercase px-4 py-3 text-sm">Company</h3>
            <ul class="divide-y divide-gray-7 text-xs">
                <li class="p-4">
                    <router-link to="/about" class="flex items-center justify-between">
                        <div>About</div>
                        <div><img src="/images/chevron.svg" alt=""></div>
                    </router-link>
                </li>
                <li class="p-4">
                    <router-link to="/about" class="flex items-center justify-between">
                        <div>Roadmap</div>
                        <div><img src="/images/chevron.svg" alt=""></div>
                    </router-link>
                </li>
            </ul>
            <h3 class="bg-gray-7 text-white uppercase px-4 py-3 text-sm">Hoodratz</h3>
            <ul class="divide-y divide-gray-7 text-xs">
                <li class="p-4 flex items-center justify-between">
                    <div>Attributes <small class="uppercase bg-white rounded-full text-gray-7 px-1">Soon</small></div>
                    <div><img src="/images/chevron.svg" alt=""></div>
                </li>
                <li class="p-4 flex items-center justify-between">
                    <div>Merch <small class="uppercase bg-white rounded-full text-gray-7 px-1">Soon</small></div>
                    <div><img src="/images/chevron.svg" alt=""></div>
                </li>
            </ul>
            <h3 class="bg-gray-7 text-white uppercase px-4 py-3 text-sm">Policies</h3>
            <ul class="divide-y divide-gray-7 text-xs">
                <li class="p-4 flex items-center justify-between">
                    <div>Privay policy</div>
                    <div><img src="/images/chevron.svg" alt=""></div>
                </li>
                <li class="p-4 flex items-center justify-between">
                    <div>Cookie policy</div>
                    <div><img src="/images/chevron.svg" alt=""></div>
                </li>
            </ul>
        </div>
        <div class="py-8 px-3 text-sm md:grid md:grid-cols-3 md:gap-4">
            <div>
                <div class="flex justify-center md:justify-start my-6">
                    <router-link to="/">
                        <img src="/images/logo-light.svg" alt="Hoodratz">
                    </router-link>
                </div>
                <p class="my-4 text-center md:text-left leading-6">
                    Hodratz are uniquely generated and collectible NFTs. Each of them is one-of-a-kind and 100% owned by you.
                </p>
                <div class="flex justify-center mb-4 md:hidden">
                    <ul class="flex">
                        <li class="mx-3 rounded-full border p-4 flex items-center justify-center border-gray-5">
                            <a :href="social.discord" target="_blank">
                                <img src="/images/discord.svg" alt="Discord">
                            </a>
                        </li>
                        <li class="mx-3 rounded-full border p-4 flex items-center justify-center border-gray-5">
                            <a :href="social.twitter" target="_blank">
                                <img src="/images/twitter.svg" alt="Twitter">
                            </a>
                        </li>
                        <li class="mx-3 rounded-full border p-4 flex items-center justify-center border-gray-5">
                            <a :href="social.instagram" target="_blank">
                                <img src="/images/insta.svg" alt="Instagram">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center md:text-left text-gray-4">
                    <small>© 2021 Hoodratz Inc. All right reserved</small>
                </div>
            </div>
            <div class="col-span-2 hidden md:block">
                <div class="grid grid-cols-4 mt-6">
                    <div>
                        <h3 class="uppercase text-white mb-8">Company</h3>
                        <ul>
                            <li class="my-2"><router-link class="hover:text-white" to="/about">About</router-link></li>
                            <li class="my-2"><router-link class="hover:text-white" to="/roadmap">Roadmap</router-link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="uppercase text-white mb-8">Hoodratz</h3>
                        <ul>
                            <li class="my-2 cursor-not-allowed">Attributes</li>
                            <li class="my-2 cursor-not-allowed">Merch</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="uppercase text-white mb-8">Policies</h3>
                        <ul>
                            <li class="my-2"><a href="#">Private policy</a></li>
                            <li class="my-2"><a href="#">Cookie policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-white mb-8">Connect</h3>
                        <div class="flex justify-center mb-4">
                            <ul class="flex">
                                <li class="mx-1 xl:mx-3 rounded-full border flex items-center justify-center border-gray-5 w-12 h-12">
                                    <a :href="social.discord" target="_blank" class="block">
                                        <img class="w-4" src="/images/discord.svg" alt="Discord">
                                    </a>
                                </li>
                                <li class="mx-1 xl:mx-3 rounded-full border flex items-center justify-center border-gray-5 w-12 h-12">
                                    <a :href="social.twitter" target="_blank" class="block">
                                        <img class="w-4" src="/images/twitter.svg" alt="Twitter">
                                    </a>
                                </li>
                                <li class="mx-1 xl:mx-3 rounded-full border flex items-center justify-center border-gray-5 w-12 h-12">
                                    <a :href="social.instagram" target="_blank" class="block">
                                        <img class="w-4" src="/images/insta.svg" alt="Instagram">
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
import { social } from '@/content/app.json'

export default {
    data () {
        return {
            social
        }
    }
}
</script>
