import Vue from "vue";
import Router from "vue-router";
import RedBagPage from "@/components/RedBag/RedBagPage";
import InformationPage from "@/components/InformationPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: RedBagPage
    },
    {
      path: "/RedBagPage",
      component: RedBagPage
    },
    {
      path: "/InformationPage",
      component: InformationPage
    }
  ]
});
