import { createRouter, createWebHistory } from "vue-router";
import Admin from "../pages/Admin.vue";
import Authorization from "../pages/Authorization.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Authorization },
  { path: "/admin", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
