<script setup>
import { useDarkModeStore } from "@/stores/darkModeStore";
const store = useDarkModeStore();
</script>
<template>
  <div>
    <h1
      class="font-extrabold text-headline text-magenta dark:text-frost"
      :class="store.isDark ? 'headline-dark' : 'headline'"
    >
      Upwork &nearr;
    </h1>
    <p class="text-base dark:text-gray-300 font-light tracking-tight mt-5">
      Upwork is a freelancing website for many different professionals, highly
      used by developers like me. It is packed with robust features like a
      payment gateway, hour tracking, milestone creation, and more. An employer
      can easily verify potential candidate&apos;s work history on the site as
      well as feedback left by previous contractors. If you don&apos;t already
      have a solution in place and would like to contract my services, Upwork is
      a great place to facilitate that.
    </p>
    <p class="text-base dark:text-gray-300 font-light tracking-tight mt-5">
      You can visit my Upwork profile
      <a
        href="https://www.upwork.com/freelancers/~017915d053d8eda84a?s=1110580755107926016"
        target="_blank"
        class="text-raspberry dark:text-frost hover:text-magenta dark:hover:text-mint"
        >here</a
      >. Please bear in mind that you will need to create an account to view my
      work history and feedback.
    </p>
  </div>
</template>
<style scoped>
.headline {
  background: url("@/assets/light_bg1.svg") repeat fixed;
  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;
  animation: bp 8s infinite linear;
}

.headline-dark {
  background: url("@/assets/dark_bg1.svg") repeat fixed;
  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;
  animation: bp 8s infinite linear;
}

@keyframes bp {
  100% {
    background-position: 0% 552px;
  }
  0% {
    background-position: 0% 0px;
  }
}
</style>
