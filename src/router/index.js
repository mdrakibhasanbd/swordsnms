import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataTree from "../views/DataTree.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/CreatePost",
      name: "CreatePost",
      component: () => import("../views/CreatePostView.vue"),
    },
    {
      path: "/Posts",
      name: "Posts",
      component: () => import("../views/DeviceView.vue"),
    },
    {
      // path: '/device/:name/:routerName',
      path: "/:name/:routerName",
      name: "device",
      component: () => import("../views/DataTree.vue"),
      history: null,

      // mode: 'abstract'
    },
    {
      path: "/device",
      name: "dataTree",
      component: () => import("../views/TreeView.vue"),
    },
    {
      path: "/loader",
      name: "loader",
      component: () => import("../components/LoadingSpinner.vue"),
    },
  ],
});

export default router;
