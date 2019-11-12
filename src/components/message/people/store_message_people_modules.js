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
    messagePeopleHeader: {
      left: "<",
      middle: "微信(18)",
      right: {
        text: "..."
      }
    }
  }
};