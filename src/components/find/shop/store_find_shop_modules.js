export default {
  namespaced: true,
  state: {
    opPage: {
      class: "find",
      header: true,
      footer: true,
    },
    dataOp: {
      data: [{
        title: "朋友圈",
        img: "friend",
        link: "/findFriend",
        active: true
      },
      {
        title: "扫一扫",
        img: "scan",
        link: "/findScan"
      },
      {
        title: "摇一摇",
        img: "shake",
        link: "/findShake",
        active: true
      },
      {
        title: "看一看",
        img: "shop",
        link: "/findSee"
      },
      {
        title: "搜一搜",
        img: "shop",
        link: "/findSearch",
        active: true
      },
      {
        title: "附近的人",
        img: "shop",
        link: "/findNearby",
        active: true
      },
      {
        title: "购物",
        img: "shop",
        link: "/findShop"
      },
      {
        title: "游戏",
        img: "game",
        link: "/findGame",
        active: true
      },
      {
        title: "小程序",
        img: "shop",
        link: "/findProgram"
      }
      ]
    },
    findHeader: {
      middle: "发现"
    }
  }
};