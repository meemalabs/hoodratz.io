<script setup>
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="bg-gray-8 font-sora text-gray-4">
    <main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto py-16 sm:py-24">
        <div class="text-center">
          <h1
            class="
              mt-2
              text-4xl
              font-extrabold
              tracking-tight
              sm:text-5xl
              text-white
              font-kumbh-bold
            "
          >
            This page does not exist.
          </h1>
          <p class="mt-2 text-lg text-pink-3">
            The page you are looking for could not be found.
          </p>
        </div>
        <div class="mt-12">
          <h2
            class="text-sm font-semibold text-gray-500 tracking-wide uppercase"
          >
            Popular pages
          </h2>
          <ul
            role="list"
            class="mt-4 border-t border-b border-gray-7 divide-y divide-gray-7"
          >
            <li
              class="relative py-6 flex items-start space-x-4 hover:text-white"
            >
              <div class="flex-shrink-0">
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-lg
                    bg-indigo-50
                  "
                >
                  <svg
                    class="h-6 w-6 text-pink-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium">
                  <span
                    class="
                      rounded-sm
                      focus-within:ring-2
                      focus-within:ring-offset-2
                      focus-within:ring-indigo-500
                    "
                  >
                    <a
                      href="/about"
                      class="focus:outline-none font-sora-semibold"
                    >
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      About
                    </a>
                  </span>
                </h3>
                <p class="text-base">Know about the Hoodratz Story!</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <img src="/images/chevron.svg" alt="chevron icon" />
              </div>
            </li>

            <li
              class="relative py-6 flex items-start space-x-4 hover:text-white"
            >
              <div class="flex-shrink-0">
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-lg
                    bg-indigo-50
                  "
                >
                  <svg
                    class="h-6 w-6 text-pink-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium">
                  <span
                    class="
                      rounded-sm
                      focus-within:ring-2
                      focus-within:ring-offset-2
                      focus-within:ring-indigo-500
                    "
                  >
                    <a
                      href="/roadmap"
                      class="focus:outline-none font-sora-semibold"
                    >
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      Roadmap
                    </a>
                  </span>
                </h3>
                <p class="text-base">Find out the plan!</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <img src="/images/chevron.svg" alt="chevron icon" />
              </div>
            </li>
          </ul>
          <div class="mt-8">
            <a
              href="/"
              class="text-base font-medium text-pink-3 hover:text-pink-2"
              >Or go back home<span aria-hidden="true"> &rarr;</span></a
            >
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
