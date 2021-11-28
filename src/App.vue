<template>
  <div class="overflow-hidden">
    <router-view />
  </div>
</template>

<style lang="postcss">
.bg-pink-gradient {
  background: radial-gradient(
    82.01% 81.61% at 94.63% 16.78%,
    #ed9db9 0%,
    #ec83a2 57.37%,
    #f05281 100%
  );
}

a.bg-pink-gradient:hover {
  background: radial-gradient(
    82.01% 81.61% at 94.63% 16.78%,
    #e679a0 0%,
    #e55781 57.37%,
    #ee356c 100%
  );
}
.bg-black-gradient {
  background: linear-gradient(
    103.6deg,
    rgba(255, 255, 255, 0.4) 1.67%,
    rgba(255, 255, 255, 0.1) 81.8%
  );
}
</style>
