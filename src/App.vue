<script setup>
import { useDarkModeStore } from "@/stores/darkModeStore";
const store = useDarkModeStore();
</script>
<template>
  <div :class="{ dark: store.isDark }">
    <navigation-bar class="hidden md:block" />
    <div
      class="flex min-h-screen text-slate-800 dark:text-slate-400 select-none"
      :class="store.isDark ? 'main-dark' : 'main-light'"
    >
      <div
        class="px-6 pt-12 w-full sm:1-2/3 2xl:w-1/3 md:ml-[10vw] 2xl:mx-auto"
      >
        <router-view v-slot="{ Component, route }">
          <transition name="scale" mode="out-in">
            <component :is="Component" :key="route.fullPath"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
