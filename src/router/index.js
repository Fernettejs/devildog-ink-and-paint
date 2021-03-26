import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tattoos from "../views/Tattoos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Tattoos",
    component: Tattoos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
