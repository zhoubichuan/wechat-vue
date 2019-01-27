import Vue from "vue";
import Router from "vue-router";
import message from "@/components/page/message/message";
import address from "@/components/page/address/address";
import find from "@/components/page/find/find";
import me from "@/components/page/me/me";
import information from "@/components/page/me/information";
import album from "@/components/page/me/album";
import collection from "@/components/page/me/collection";
import cardBag from "@/components/page/me/cardBag";
import emoji from "@/components/page/me/emoji";
import moneyBag from "@/components/page/me/moneyBag";
import setting from "@/components/page/me/setting";

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
      component: me,
      children: [
        { path: "information", component: information },
        { path: "album", component: album },
        { path: "cardBag", component: cardBag },
        { path: "collection", component: collection },
        { path: "emoji", component: emoji },
        { path: "setting", component: setting },
        { path: "moneyBag", component: moneyBag }
      ]
    }
  ]
});
