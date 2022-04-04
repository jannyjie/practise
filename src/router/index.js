import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";
// 
// 當頁面簡單時不要使用動態載入的方式，不然會增加request 數量

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView, // 預設底一個預設載入
  },
  {
    path: "/about", //
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/work", //
    name: "work",
    // 用這個方式一開始 component 不會先載入進去，會進入你的 router 才會載入
    component: () => import("../views/WorkView.vue"),
  },
  {
    path: "/Courses", //
    name: "Courses",
    // 用這個方式一開始 component 不會先載入進去，會進入你的 router 才會載入
    component: () => import("../views/Courses/index.vue"),
  },
  {
    path: "/Courses/:id",
    name: "Courses_id",
    component: () => import("../views/Courses/_id.vue"),
  },
  { path: '/:pathMatch(.*)', component: NotFoundComponent } // router 例外處理
];

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
