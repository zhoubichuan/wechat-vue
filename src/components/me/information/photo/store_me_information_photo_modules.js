export default {
  namespaced: true,
  state: {
    meInformationPhotoHeader: {
      left: '<',
      middle: '个人头像',
      right: {
        text: '...'
      }
    },
    data: [{
        text: '拍照'
      },
      {
        text: '从手机相册选择'
      },
      {
        text: '查看上一张头像'
      },
      {
        text: '保存图片'
      },
      {
        text: '取消'
      },
    ]
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
  },
  actions: {

  }
}