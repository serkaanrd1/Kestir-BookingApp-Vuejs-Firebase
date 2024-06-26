import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "welcome" });
  } else {
    next();
  }
};
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "homeview" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/homeview",
    name: "homeview",
    component: () => import("../views/HomeView.vue"),
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
