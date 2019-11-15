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
      middle: decodeURIComponent(location.href.split(":")[3]),
      right: {
        text: "..."
      }
    }
  }
};