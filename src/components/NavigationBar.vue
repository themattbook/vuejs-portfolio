<script setup>
import { useDarkModeStore } from "@/stores/darkModeStore";

const store = useDarkModeStore();
</script>
<template>
  <div :class="{ dark: store.isDark }">
    <div
      class="flex justify-evenly min-h-screen fixed bg-off-white dark:bg-void-light shadow-lg"
    >
      <ul
        class="flex flex-col items-center justify-around font-light text-base text-slate-900 dark:text-white min-h-full hover:cursor-pointer"
      >
        <router-link
          to="/"
          class="navigation"
          :exact-active-class="store.isDark ? 'active-dark' : 'active'"
        >
          <li>Home</li>
        </router-link>
        <router-link
          to="github"
          class="navigation"
          :exact-active-class="store.isDark ? 'active-dark' : 'active'"
        >
          <li>Github</li>
        </router-link>
        <router-link
          to="upwork"
          class="navigation"
          :exact-active-class="store.isDark ? 'active-dark' : 'active'"
        >
          <li>Upwork</li>
        </router-link>
        <a href="https://www.linkedin.com/in/meetmattsweet/" target="_blank">
          <li class="navigation">Linkedin</li>
        </a>
        <router-link
          to="contact"
          class="navigation"
          :exact-active-class="store.isDark ? 'active-dark' : 'active'"
        >
          <li class="flex items-center justify-center">Hire Me</li>
        </router-link>
        <li class="navigation">
          <div class="flex items-center">
            <label class="label cursor-pointer mr-3">
              <span class="label-text">
                <svg
                  v-if="store.isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 fill-frost"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 fill-raspberry"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </label>
            <label
              class="inline-flex relative items-center mr-1 cursor-pointer"
            >
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-magenta dark:peer-focus:ring-frost peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-raspberry"
                @click="store.toggleDark"
              ></div>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.navigation {
  transform: rotate(-90deg);
}
</style>
