import Vue from "vue";
import Router from "vue-router";
import message from "@/components/page/message/message";
import address from "@/components/page/address/address";
import find from "@/components/page/find/find";
import me from "@/components/page/me/me";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: message
    },
    {
      path: "/message",
      component: message
    },
    {
      path: "/address",
      component: address
    },
    {
      path: "/find",
      component: find
    },
    {
      path: "/me",
      component: me
    }
  ]
});
