import store from '../store'
export default {
  path: "/find",
  name: "find",
  component: () => import("@/components/find"),
  beforeEnter:(to, from, next) => {
    let data={
      middle: "发现"
  }
    store.commit('change_header_data',data)
    next()
  },
  children: [
    {
      path: "friend",
      name: "friend",
      component: () => import("@/components/find/friend")
    },
    {
      path: "game",
      name: "game",
      component: () => import("@/components/find/game")
    },
    {
      path: "nearby",
      name: "nearby",
      component: () => import("@/components/find/nearby")
    },
    {
      path: "program",
      name: "program",
      component: () => import("@/components/find/program")
    },
    {
      path: "scan",
      name: "scan",
      component: () => import("@/components/find/scan")
    },
    {
      path: "search",
      name: "search",
      component: () => import("@/components/find/search")
    },
    {
      path: "shake",
      name: "shake",
      component: () => import("@/components/find/shake")
    },
    {
      path: "shop",
      name: "shop",
      component: () => import("@/components/find/shop")
    }
  ]
};
