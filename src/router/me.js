export default {
  path: "/me",
  name: "me",
  component: () => import("@/components/page/me"),
  children: [
    {
      path: "information",
      name: "information",
      component: () => import("@/components/page/me/information"),
      children: [
        {
          path: "address",
          name: "meaddress",
          component: () => import("@/components/page/me/information/address")
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
          component: () => import("@/components/page/me/setting/accountSafe")
        },
        {
          path: "newMessageNote",
          component: () => import("@/components/page/me/setting/newMessageNote")
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
          component: () => import("@/components/page/me/setting/aboutWeChate")
        },
        {
          path: "weChatePlugin",
          component: () => import("@/components/page/me/setting/weChatePlugin")
        },
        {
          path: "changeAcount",
          component: () => import("@/components/page/me/setting/changeAcount")
        },
        {
          path: "outLogin",
          component: () => import("@/components/page/me/setting/outLogin")
        }
      ]
    }
  ]
};
