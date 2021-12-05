import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import dayjs from "./plugins/day.js";
import tippy from "./plugins/tippy";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(dayjs);
app.use(tippy);
app.mount("#app");
