import { defineStore } from "pinia";
export const useGithubStore = defineStore("githubRepos", {
  state: () => ({
    repos: [],
  }),
  getters: {
    getRepos(state) {
      return state.repos;
    },
    sortedRepos(state) {
      return [...state.repos]
        .sort((a, b) => {
          let ra = a.created_at,
            rb = b.created_at;
          if (ra < rb) {
            return -1;
          }
          if (ra > rb) {
            return 1;
          }
          return 0;
        })
        .reverse();
    },
  },
  actions: {
    async githubApi() {
      fetch("https://api.github.com/users/themattbook/repos")
        .then((res) => res.json())
        .then((data) => {
          this.repos = data;
        })
        .catch((error) => {
          return error;
        });
    },
  },
});
