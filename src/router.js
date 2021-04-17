import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard")
        },
        {
          path: "/ayarlar",
          name: "settings",
          component: () => import("@/view/pages/Settings")
        },
        {
          path: "/mesajlar",
          name: "messages",
          component: () => import("@/view/pages/Messages")
        },
        {
          path: "/üyeler",
          name: "users",
          component: () => import("@/view/pages/Users")
        },
        {
          path: "/firsatlar",
          name: "deals",
          component: () => import("@/view/pages/Deals")
        },
        {
          path: "/yeni-üyeler",
          name: "newUsers",
          component: () => import("@/view/pages/UserRequests")
        },
        {
          path: "/yeni-fırsatlar",
          name: "newDeals",
          component: () => import("@/view/pages/DealRequests")
        },
        {
          path: "/reklamlar",
          name: "advertise",
          component: () => import("@/view/pages/Advertise")
        },
        {
          path: "/yorumlar",
          name: "votes",
          component: () => import("@/view/pages/Votes")
        },
        {
          path: "/site-ayarları",
          name: "/sitesettings",
          component: () => import("@/view/pages/SiteSettings")
        },
        {
          path: "/tüm-elementler",
          name: "/allelements",
          component: () => import("@/view/pages/AllElements")
        }
      ]
    },
    {
      path: '/',
      component: () => import("@/view/pages/Login"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/Login")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/Login")
        },
      ]
    },

    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/Error")
    }
  ],
  mode: 'history'
});
