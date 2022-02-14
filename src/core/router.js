import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("../pages/home.vue");

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const history = createWebHistory();

// create router instance
const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { top: 0 };
      // return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
