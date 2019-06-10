import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: { path: "/message" }
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/components/page/message/message")
    },
    {
      path: "/address",
      name: "address",
      component: () => import("@/components/page/address/address"),
      children: [
        {
          path: "newfriend",
          name: "newfriend",
          component: () => import("@/components/page/address/newfriend")
        },
        {
          path: "number",
          name: "number",
          component: () => import("@/components/page/address/number")
        },
        {
          path: "talk",
          name: "talk",
          component: () => import("@/components/page/address/talk")
        },
        {
          path: "tips",
          name: "tips",
          component: () => import("@/components/page/address/tips")
        }
      ]
    },
    {
      path: "/find",
      name: "find",
      component: () => import("@/components/page/find/find"),
      children: [
        {
          path: "friend",
          name: "friend",
          component: () => import("@/components/page/find/friend")
        },
        {
          path: "game",
          name: "game",
          component: () => import("@/components/page/find/game")
        },
        {
          path: "nearby",
          name: "nearby",
          component: () => import("@/components/page/find/nearby")
        },
        {
          path: "program",
          name: "program",
          component: () => import("@/components/page/find/program")
        },
        {
          path: "scan",
          name: "scan",
          component: () => import("@/components/page/find/scan")
        },
        {
          path: "search",
          name: "search",
          component: () => import("@/components/page/find/search")
        },
        {
          path: "shake",
          name: "shake",
          component: () => import("@/components/page/find/shake")
        },
        {
          path: "shop",
          name: "shop",
          component: () => import("@/components/page/find/shop")
        }
      ]
    },
    {
      path: "/me",
      name: "me",
      component: () => import("@/components/page/me/me"),
      children: [
        {
          path: "information",
          name: "information",
          component: () => import("@/components/page/me/information"),
          children: [
            {
              path: "address",
              name: "meaddress",
              component: () =>
                import("@/components/page/me/information/address")
            },
            {
              path: "code",
              name: "code",
              component: () => import("@/components/page/me/information/code")
            },
            {
              path: "more",
              name: "meaddress",
              component: () => import("@/components/page/me/information/more")
            },
            {
              path: "name",
              name: "meaddress",
              component: () => import("@/components/page/me/information/name")
            },
            {
              path: "photo",
              name: "meaddress",
              component: () => import("@/components/page/me/information/photo")
            }
          ]
        },
        {
          path: "album",
          component: () => import("@/components/page/me/album")
        },
        {
          path: "cardBag",
          component: () => import("@/components/page/me/cardBag")
        },
        {
          path: "collection",
          component: () => import("@/components/page/me/collection")
        },
        {
          path: "emoji",
          component: () => import("@/components/page/me/emoji")
        },
        {
          path: "moneyBag",
          component: () => import("@/components/page/me/moneyBag")
        },
        {
          path: "setting",
          component: () => import("@/components/page/me/setting"),
          children: [
            {
              path: "accountSafe",
              component: () =>
                import("@/components/page/me/setting/accountSafe")
            },
            {
              path: "newMessageNote",
              component: () =>
                import("@/components/page/me/setting/newMessageNote")
            },
            {
              path: "privacy",
              component: () => import("@/components/page/me/setting/privacy")
            },
            {
              path: "common",
              component: () => import("@/components/page/me/setting/common")
            },
            {
              path: "helpAndFeedback",
              component: () =>
                import("@/components/page/me/setting/helpAndFeedback")
            },
            {
              path: "aboutWeChate",
              component: () =>
                import("@/components/page/me/setting/aboutWeChate")
            },
            {
              path: "weChatePlugin",
              component: () =>
                import("@/components/page/me/setting/weChatePlugin")
            },
            {
              path: "changeAcount",
              component: () =>
                import("@/components/page/me/setting/changeAcount")
            },
            {
              path: "outLogin",
              component: () => import("@/components/page/me/setting/outLogin")
            }
          ]
        }
      ]
    }
  ]
});
