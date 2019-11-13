export default {
  namespaced: true,
  state: {
    meInformationHeader: {
      left: '<',
      middle: '个人信息'
    },
    meInformationData: {
      data: [{
          title: "头像",
          image: "",
          link: "meInformationPhoto",
          ico: 'photo'
        },
        {
          title: "名字",
          image: "",
          link: "meInformationName"
        },
        {
          title: "微信号",
          tips: 'zbc159x',
          image: ""
        },
        {
          title: "我的二维码",
          image: "",
          link: "meInformationCode",
          ico: 'photo'
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
    },
    informationFooter: {

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