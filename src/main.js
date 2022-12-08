import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import NavigationBar from "@/components/NavigationBar.vue";
import AboutMe from "@/components/AboutMe.vue";
import AboutMeMobile from "@/components/AboutMeMobile.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import ContactMe from "@/components/ContactMe.vue";
import GithubComponent from "@/components/GithubComponent.vue";
import UpworkComponent from "@/components/UpworkComponent.vue";
import "@/style.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.component("navigation-bar", NavigationBar);
app.component("about-me", AboutMe);
app.component("about-me-mobile", AboutMeMobile);
app.component("home-component", HomeComponent);
app.component("contact-me", ContactMe);
app.component("github-component", GithubComponent);
app.component("upwork-component", UpworkComponent);

app.mount("#app");
