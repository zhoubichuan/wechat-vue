export default {
  namespaced: true,
  state: {
    informationHeader: {
      left: '<',
      middle: '个人信息'
    },
    photoHeader: {
      left: '<',
      middle: '个人头像',
      right: {
        text: '...'
      }
    },
    nameHeader: {
      left: '取消',
      middle: '设置名字',
      right: {
        text: '完成'
      }
    },
    codeHeader: {
      left: '<',
      middle: '我的二维码',
      right: {
        text: '...'
      }
    },
    moreHeader: {
      left: '<'
    },
    addressHeader: {
      left: '<',
      middle: '我的地址'
    }
  }
}