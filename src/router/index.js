
import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "@/view/Register";
import Login from "@/view/Login";
import Dashboard from "@/modules/Dashboard";
import Home from "@/modules/Home"

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
  {
    path: "/bloggerdashboard",
    name: "bdashboard",
    component: Dashboard
  },
  {
    path:"/",
    name:"home",
    component: Home
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;