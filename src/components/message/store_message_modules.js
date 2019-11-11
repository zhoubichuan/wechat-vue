export default {
  namespaced: true,
  state: {
    opPage: {
      class: "message",
      header: true,
      footer: true,
    },
    titleData: "",
    informationIsShow: false,
    messageHeader: {
      style: "color:black ;background-color: white;",
      left: "",
      middle: "微信(18)",
      right: {
        ico: "more"
      }
    }
  }
};