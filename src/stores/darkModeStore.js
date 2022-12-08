import { defineStore } from "pinia";
export const useDarkModeStore = defineStore("darkMode", {
  state: () => ({
    isDark: true,
    apodUrl: "",
  }),
  getters: {
    getRepos(state) {
      return state.isDark;
    },
  },
  actions: {
    async toggleDark() {
      if (!this.isDark) {
        this.isDark = true;
      } else {
        this.isDark = false;
      }
    },
  },
});
