
import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "@/view/Register";
import Login from "@/view/Login";
import Dashboard from "@/view/Dashboard";
import Home from "@/view/Home";
import MyAccount from "@/view/MyAccount"

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
  {
    path:"/myaccount",
    name:"myaccount",
    component:MyAccount
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;