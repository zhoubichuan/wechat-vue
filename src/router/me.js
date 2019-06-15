export default {
  path: "/me",
  name: "me",
  component: () => import("@/components/me"),
  children: [
    {
      path: "information",
      name: "information",
      component: () => import("@/components/me/information"),
      children: [
        {
          path: "address",
          name: "meaddress",
          component: () => import("@/components/me/information/address")
        },
        {
          path: "code",
          name: "code",
          component: () => import("@/components/me/information/code")
        },
        {
          path: "more",
          name: "meaddress",
          component: () => import("@/components/me/information/more")
        },
        {
          path: "name",
          name: "meaddress",
          component: () => import("@/components/me/information/name")
        },
        {
          path: "photo",
          name: "meaddress",
          component: () => import("@/components/me/information/photo")
        }
      ]
    },
    {
      path: "album",
      component: () => import("@/components/me/album")
    },
    {
      path: "cardBag",
      component: () => import("@/components/me/cardBag")
    },
    {
      path: "collection",
      component: () => import("@/components/me/collection")
    },
    {
      path: "emoji",
      component: () => import("@/components/me/emoji")
    },
    {
      path: "moneyBag",
      component: () => import("@/components/me/moneyBag")
    },
    {
      path: "setting",
      component: () => import("@/components/me/setting"),
      children: [
        {
          path: "accountSafe",
          component: () => import("@/components/me/setting/accountSafe")
        },
        {
          path: "newMessageNote",
          component: () => import("@/components/me/setting/newMessageNote")
        },
        {
          path: "privacy",
          component: () => import("@/components/me/setting/privacy")
        },
        {
          path: "common",
          component: () => import("@/components/me/setting/common")
        },
        {
          path: "helpAndFeedback",
          component: () =>
            import("@/components/me/setting/helpAndFeedback")
        },
        {
          path: "aboutWeChate",
          component: () => import("@/components/me/setting/aboutWeChate")
        },
        {
          path: "weChatePlugin",
          component: () => import("@/components/me/setting/weChatePlugin")
        },
        {
          path: "changeAcount",
          component: () => import("@/components/me/setting/changeAcount")
        },
        {
          path: "outLogin",
          component: () => import("@/components/me/setting/outLogin")
        }
      ]
    }
  ]
};
