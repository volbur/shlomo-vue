import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Authorization from "../pages/Authorization.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Authorization },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
