export default {
  namespaced: true,
  state: {
    meInformationCodeHeader: {
      left: "<",
      middle: "我的二维码",
      right: {
        text: "..."
      }
    },
    data: [{
      text: "换个样式"
    }, {
      text: "保存图片"
    }, {
      text: "扫描二维码"
    }, {
      text: "重置二维码"
    }, {
      text: "取消"
    }, ]
  },
  mutations: {
    handleHeaderRight(state, val) {
      if (val.show) {
        this.state.optionsList = {
          show: true,
          data: state.data
        }
      } else {
        this.state.optionsList = {
          show: false,
          data: ""
        }
      }

    }
  }
}