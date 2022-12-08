<script setup>
import { workHistory } from "@/data/history";
</script>
<template>
  <div>
    <h1 class="font-bold text-xl dark:text-gray-300 mt-10">About Me</h1>
    <p class="text-base dark:text-gray-300 font-light tracking-tight">
      I&apos;m an aspiring web developer with the same hopes and dreams as
      anyone&semi; to become a professional bear trainer. Ever since I was a
      boy, I thought about the audacity, tenacity, violence, speed, momentum,
      and romance surrounding the life of a bear trainer. Dreams are great, but
      execution is what&apos;s important. In 2020, I sold all of my belongings
      and moved to Bear Mountain to achieve my dream.
    </p>
    <p class="text-base dark:text-gray-300 font-light tracking-tight mt-5">
      Thanks to the pandemic and my inability to tame wild bears without
      incredible bodily injury, I decided to instead shoot for a more feasible
      dream: Astronaut. I once again sold all of my belongings and moved to
      NASA&apos;s Jet Propulsion Labratory in California. After a few months of
      living the off-grid life in the parking lot and not being able to get past
      the initial government screening, I joined a league of amateur astronauts
      with the promise of a hot shower, food, and drinkable water. It had been
      months since I had eaten anything more than wild berries and twigs.
    </p>
    <p class="text-base dark:text-gray-300 font-light tracking-tight mt-5">
      You didn't come here to read my life story, though. I&apos;ll post the
      non-fiction highlights and some tidbits about the real me below. Thank you
      for stopping by!
    </p>
    <div class="flex">
      <div>
        <h1 class="font-bold text-xl dark:text-gray-300 mt-10">Work History</h1>
        <ol class="relative border-l border-gray-300 dark:border-gray-700 mt-5">
          <li class="mb-10 ml-4" v-for="item in workHistory" :key="item.id">
            <div
              class="absolute w-3 h-3 bg-raspberry rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-frost"
            ></div>
            <time
              class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >{{ item.dateRange }}</time
            >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              <span class="text-raspberry dark:text-frost">{{
                item.jobTitle
              }}</span>
              - {{ item.company }}
            </h3>
            <p
              class="text-base dark:text-gray-300 font-light tracking-tight mb-4"
            >
              {{ item.description }}
            </p>
            <p
              class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              Technologies used: {{ item.techUsed }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
