export default {
    namespaced: true,
    state: {
        opPage: {
            class: "find",
            header: true,
            footer: true,
            headContent: {
              middle: "发现"
            }
          },
          dataOp: {
            data: [
              {
                title: "朋友圈",
                img: "friend",
                route: "/find/friend",
                active: true
              },
              {
                title: "扫一扫",
                img: "scan",
                route: "/find/scan"
              },
              {
                title: "摇一摇",
                img: "shake",
                route: "/find/shake",
                active: true
              },
              {
                title: "看一看",
                img: "shop",
                route: "/find/see"
              },
              {
                title: "搜一搜",
                img: "shop",
                route: "/find/search",
                active: true
              },
              {
                title: "附近的人",
                img: "shop",
                route: "/find/nearby",
                active: true
              },
              {
                title: "购物",
                img: "shop",
                route: "/find/shop"
              },
              {
                title: "游戏",
                img: "game",
                route: "/find/game",
                active: true
              },
              {
                title: "小程序",
                img: "shop",
                route: "/find/program"
              }
            ]
          }
    }
};