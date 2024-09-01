import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homePage.vue"),
    },
    {
      path: "/countryView/:countryName?",
      name: "countryView",
      component: () => import("../views/countryView.vue"),
      props: true,
    },
  ],
});

export default router;
