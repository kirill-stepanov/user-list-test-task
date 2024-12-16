import { createRouter, createWebHistory } from "vue-router";

import { appRouters } from "@/constants";

const routes = [
  {
    path: appRouters.HOME.path,
    name: appRouters.HOME.name,
    component: appRouters.HOME.component,
  },
  {
    path: appRouters.USER.path,
    name: appRouters.USER.name,
    component: appRouters.USER.component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
