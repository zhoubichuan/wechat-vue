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
import accountSafe from "@/components/page/me/setting/accountSafe";
import newMessageNote from "@/components/page/me/setting/newMessageNote";
import privacy from "@/components/page/me/setting/privacy";
import common from "@/components/page/me/setting/common";
import helpAndFeedback from "@/components/page/me/setting/helpAndFeedback";
import aboutWeChate from "@/components/page/me/setting/aboutWeChate";
import weChatePlugin from "@/components/page/me/setting/weChatePlugin";
import changeAcount from "@/components/page/me/setting/changeAcount";
import outLogin from "@/components/page/me/setting/outLogin";

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
        { path: "moneyBag", component: moneyBag },
        {
          path: "setting",
          component: setting,
          children: [
            { path: "accountSafe", component: accountSafe },
            { path: "newMessageNote", component: newMessageNote },
            { path: "privacy", component: privacy },
            { path: "common", component: common },
            { path: "helpAndFeedback", component: helpAndFeedback },
            { path: "aboutWeChate", component: aboutWeChate },
            { path: "weChatePlugin", component: weChatePlugin },
            { path: "changeAcount", component: changeAcount },
            { path: "outLogin", component: outLogin }
          ]
        }
      ]
    }
  ]
});
