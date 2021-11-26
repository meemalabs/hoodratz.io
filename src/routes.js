import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Roadmap from "./views/Roadmap.vue";
import NotFound from "./views/NotFound.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", name: "home", component: Home, meta: { title: "Home" } },
  {
    path: "/about",
    name: "about",
    meta: { title: "About" },
    component: About,
  },
  {
    path: "/roadmap",
    name: "roadmap",
    meta: { title: "Roadmap" },
    component: Roadmap,
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    meta: { title: "Privacy Policy" },
    component: PrivacyPolicy,
  },
  { path: "/:path(.*)", component: NotFound },
];
