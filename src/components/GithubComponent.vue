<script setup>
import { useGithubStore } from "@/stores/githubRepoStore";

const store = useGithubStore();
store.githubApi();

function convertTimeToLocale(arr) {
  const date = new Date(arr);
  return date.toLocaleString("en-US");
}
</script>
<template>
  <div>
    <div class="overflow-x-auto rounded-xl">
      <table
        class="w-full text-sm text-left text-slate-500 dark:text-slate-200"
      >
        <caption
          class="p-5 text-lg font-semibold text-left text-slate-900 dark:text-slate-200"
        >
          <h1 class="font-bold text-xl text-raspberry dark:text-frost">
            <a href="https://github.com/themattbook" target="_blank">
              github.com/themattbook
            </a>
          </h1>
          <p class="text-sm dark:text-slate-300 font-light tracking-tight">
            Click the title to visit the repo on Github (opens new tab)
          </p>
        </caption>
        <thead class="text-slate-700 uppercase dark:text-slate-400">
          <tr>
            <th scope="col" class="py-3 px-6">Project Name</th>
            <th scope="col" class="py-3 px-6">Description</th>
            <th scope="col" class="py-3 px-6">Date Created</th>
            <th scope="col" class="py-3 px-6">Language</th>
            <th scope="col" class="py-3 px-6">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b dark:border-slate-700"
            v-for="repo in store.sortedRepos"
            :key="repo.id"
          >
            <th
              scope="row"
              class="py-4 px-6 font-bold text-raspberry whitespace-nowrap dark:text-frost"
            >
              <a :href="repo.html_url" target="_blank"> {{ repo.name }}</a>
            </th>
            <td class="py-4 px-6">
              {{ repo.description || "No description given" }}
            </td>
            <td class="py-4 px-6">
              {{ convertTimeToLocale(repo.created_at) }}
            </td>
            <td class="py-4 px-6">{{ repo.language || "None" }}</td>
            <td class="py-4 px-6">
              {{ convertTimeToLocale(repo.updated_at) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
