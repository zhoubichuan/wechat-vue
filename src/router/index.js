import Vue from "vue";
import Router from "vue-router";
import address from "./address";
import find from "./find";
import me from "./me";
import message from "./message";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: { path: "/message" }
    },
    message,
    address,
    find,
    me
  ]
});
