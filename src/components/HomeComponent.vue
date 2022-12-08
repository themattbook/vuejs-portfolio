<script setup>
import { useDarkModeStore } from "@/stores/darkModeStore";
const store = useDarkModeStore();
</script>
<template>
  <div>
    <h1
      class="hidden md:block font-extrabold text-headline text-magenta dark:text-frost"
      :class="store.isDark ? 'headline-dark' : 'headline'"
    >
      hey.
    </h1>
    <about-me class="hidden md:block" />
    <about-me-mobile class="md:hidden" />
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
