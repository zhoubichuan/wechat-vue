import storeInformationModules from "@/components/me/information/storeInformationModules";

export default {
  namespaced: true,
  modules: {
    storeInformationModules
  },
  state: {
    opPage: {
      class: "me",
      header: true,
      footer: true
    },
    application: [{
        ico: "photo",
        title: "会跑的鸡腿",
        content: "微信号：zbc159x",
        link: "information"
      },
      {
        ico: "moneyBag",
        title: "支付",
        link: "moneyBag"
      },
      {
        ico: "collection",
        title: "收藏",
        link: "collection"
      },
      {
        ico: "album",
        title: "相册",
        link: "album"
      },
      {
        ico: "cardBag",
        title: "卡包",
        link: "cardBag"
      },
      {
        ico: "emoji",
        title: "表情",
        link: "emoji"
      },
      {
        ico: "setting",
        title: "设置",
        link: "setting"
      }
    ],
    meHeader: {
      right: {
        ico: "camera"
      }
    }
  }
};