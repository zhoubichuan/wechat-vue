import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "//",
      redirect: {
        path: "//message"
      }
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/components/message"),
    },
    {
      path: "/people:id",
      name: "people",
      component: () => import("@/components/message/people"),
    },
    {
      path: "/setting:id",
      name: "setting",
      component: () => import("@/components/message/setting")
    },
    {
      path: "/people:id",
      name: "people",
      component: () => import("@/components/message/people")
    }, {
      path: "/people:id",
      name: "people",
      component: () => import("@/components/message/people")
    }, {
      path: "/people:id",
      name: "people",
      component: () => import("@/components/message/people")
    },
    {
      path: "/address",
      name: "address",
      component: () => import("@/components/address"),
    },
    {
      path: "/friends",
      name: "friends",
      component: () => import("@/components/address/newfriend")
    },
    {
      path: "/number",
      name: "number",
      component: () => import("@/components/address/number")
    },
    {
      path: "/talk",
      name: "talk",
      component: () => import("@/components/address/talk")
    },
    {
      path: "/tips",
      name: "tips",
      component: () => import("@/components/address/tips")
    },
    {
      path: "/people:id",
      name: "people",
      component: () => import("@/components/address/people"),
    },
    {
      path: "/settingAndTips",
      name: "settingAndTips",
      component: () => import("@/components/address/people/settingAndTips")
    },
    {
      path: "/friend",
      name: "friend",
      component: () => import("@/components/address/people/friend")
    },
    {
      path: "/moreInformation",
      name: "moreInformation",
      component: () => import("@/components/address/people/moreInformation")
    },
    {
      path: "/sendInformation",
      redirect: {
        path: "//message/people:id"
      }
    },
    {
      path: "/find",
      name: "find",
      component: () => import("@/components/find"),
    },
    {
      path: "/friend",
      name: "friend",
      component: () => import("@/components/find/friend")
    },
    {
      path: "/game",
      name: "game",
      component: () => import("@/components/find/game")
    },
    {
      path: "/nearby",
      name: "nearby",
      component: () => import("@/components/find/nearby")
    },
    {
      path: "/program",
      name: "program",
      component: () => import("@/components/find/program")
    },
    {
      path: "/scan",
      name: "scan",
      component: () => import("@/components/find/scan")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/components/find/search")
    },
    {
      path: "/shake",
      name: "shake",
      component: () => import("@/components/find/shake")
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("@/components/find/shop")
    },
    {
      path: "/me",
      name: "me",
      component: () => import("@/components/me"),
    },
    {
      path: "/information",
      name: "information",
      component: () => import("@/components/me/information"),
    },
    {
      path: "/address",
      name: "meaddress",
      component: () => import("@/components/me/information/address")
    },
    {
      path: "/code",
      name: "code",
      component: () => import("@/components/me/information/code")
    },
    {
      path: "/more",
      name: "meaddress",
      component: () => import("@/components/me/information/more")
    },
    {
      path: "/name",
      name: "meaddress",
      component: () => import("@/components/me/information/name")
    },
    {
      path: "/photo",
      name: "meaddress",
      component: () => import("@/components/me/information/photo")
    },
    {
      path: "/album",
      component: () => import("@/components/me/album")
    },
    {
      path: "/cardBag",
      component: () => import("@/components/me/cardBag")
    },
    {
      path: "/collection",
      component: () => import("@/components/me/collection")
    },
    {
      path: "/emoji",
      component: () => import("@/components/me/emoji")
    },
    {
      path: "/moneyBag",
      component: () => import("@/components/me/moneyBag")
    },
    {
      path: "/setting",
      component: () => import("@/components/me/setting"),
    },
    {
      path: "/accountSafe",
      component: () => import("@/components/me/setting/accountSafe")
    },
    {
      path: "/newMessageNote",
      component: () => import("@/components/me/setting/newMessageNote")
    },
    {
      path: "/privacy",
      component: () => import("@/components/me/setting/privacy")
    },
    {
      path: "/common",
      component: () => import("@/components/me/setting/common")
    },
    {
      path: "/helpAndFeedback",
      component: () =>
        import("@/components/me/setting/helpAndFeedback")
    },
    {
      path: "/aboutWeChate",
      component: () => import("@/components/me/setting/aboutWeChate")
    },
    {
      path: "/weChatePlugin",
      component: () => import("@/components/me/setting/weChatePlugin")
    },
    {
      path: "/changeAcount",
      component: () => import("@/components/me/setting/changeAcount")
    },
    {
      path: "/outLogin",
      component: () => import("@/components/me/setting/outLogin")
    }
  ]
});