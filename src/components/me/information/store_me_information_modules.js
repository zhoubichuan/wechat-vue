export default {
  namespaced: true,
  state: {
    meInformationHeader: {
      left: "<",
      middle: "个人信息",
      right: {
        text: "..."
      }
    },
    meInformationData: {
      data: [{
        title: "头像",
        image: "",
        link: "meInformationPhoto",
        ico: "photo"
      },
      {
        title: "名字",
        image: "",
        link: "meInformationName",
        tips: "asdfasdfasd"
      },
      {
        title: "微信号",
        tips: "zbc159x",
        image: ""
      },
      {
        title: "我的二维码",
        image: "",
        link: "meInformationCode",
        ico: "photo"
      },
      {
        title: "更多",
        image: "",
        link: "meInformationMore"
      },
      {
        title: "我的地址",
        image: "",
        link: "meInformationAddress"
      }
      ]
    }
  }
}