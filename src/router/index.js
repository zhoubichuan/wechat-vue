import Vue from "vue";
import Router from "vue-router";
import message from "@/components/message-list/message";

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
    }
  ]
});
