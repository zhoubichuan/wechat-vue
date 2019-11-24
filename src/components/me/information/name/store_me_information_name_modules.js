export default {
  namespaced: true,
  state: {
    meInformationNameHeader: {
      left: '取消',
      middle: '设置名字',
      right: {
        text: '完成'
      }
    }
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
          data: ''
        }
      }

    }
  }
}