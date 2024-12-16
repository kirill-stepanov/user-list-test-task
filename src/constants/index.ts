import HomeView from "@/views/HomeView.vue";
import UserView from "@/views/UserView.vue";

export const appRouters = {
  HOME: {
    path: "/",
    name: "home",
    component: HomeView,
  },
  USER: {
    path: `/user/:id`,
    name: "user",
    component: UserView,
  },
};

export const apiRouters = {
  USERS: "/users",
};
