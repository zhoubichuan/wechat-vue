export default {
  path: "/find",
  name: "find",
  component: () => import("@/components/page/find"),
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
};
