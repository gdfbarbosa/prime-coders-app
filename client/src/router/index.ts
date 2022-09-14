import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { Home, ListEmployee, NewEmployee } from "@/views/";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list-employee",
    name: "ListEmployee",
    component: ListEmployee,
  },
  {
    path: "/new-employee",
    name: "NewEmployee",
    component: NewEmployee,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export const useRouter = (): VueRouter => router;
export default router;
