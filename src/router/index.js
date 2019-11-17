
import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "@/modules/Register";
import Login from "@/modules/Login";
import Dashboard from "@/modules/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;