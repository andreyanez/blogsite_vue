import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import createPost from "../views/createPost.vue";
import loginForm from "../views/loginForm.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: loginForm,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post",
    name: "createPost",
    component: createPost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      // <----
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
