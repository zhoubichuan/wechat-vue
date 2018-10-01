import Vue from "vue";
import Router from "vue-router";
import InformationPage from "@/components/InformationPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: InformationPage
    },
    {
      path: "/InformationPage",
      component: InformationPage
    }
  ]
});
