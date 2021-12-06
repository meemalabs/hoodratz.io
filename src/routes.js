import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Roadmap from "./views/Roadmap.vue";
import NotFound from "./views/NotFound.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import Giveaway from "./views/Giveaway.vue";
import Faq from "./views/Faq.vue";

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
  {
    path: "/faq",
    name: "faq",
    meta: { title: "FAQ" },
    component: Faq,
  },
  {
    path: "/influencers",
    name: "giveaway",
    meta: { title: "Giveaway" },
    component: Giveaway,
  },
  { path: "/:path(.*)", component: NotFound },
];
