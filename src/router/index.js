import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import GithubView from "../views/GithubView.vue";
import UpworkView from "../views/UpworkView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/github",
    name: "github",
    component: GithubView,
  },
  {
    path: "/upwork",
    name: "upwork",
    component: UpworkView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
