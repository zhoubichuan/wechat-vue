export default {
  namespaced: true,
  state: {
    opPage: {
      class: "addressComponents",
      header: true,
      footer: true
    },
    addressHeader: {
      middle: "通讯录",
      right: {
        ico: "add-friend"
      }
    },
    peopleHeader: {
      left: ">",
      right: {
        text: "..."
      }
    },
    addressPeopleData: {
      data: [{
        title: "设置备注和标签",
        img: "friend",
        link: "/addressPeopleSettingAndTips"
      },
      {
        title: "朋友圈",
        img: "scan",
        link: "/addressPeopleFriend:" + decodeURIComponent(location.href.split(":")[3]),
        active: true
      },
      {
        title: "更多信息",
        img: "shake",
        link: "/addressPeopleMoreInformation:" +
            decodeURIComponent(location.href.split(":")[3])
      },
      {
        title: "发消息",
        img: "shake",
        link: "/addressPeopleSendInformation:" +
            decodeURIComponent(location.href.split(":")[3])
      },
      {
        title: "音视频通话",
        img: "shake",
        link: "/addressPeopleAudioVideoTalk:" +
            decodeURIComponent(location.href.split(":")[3])
      }
      ]
    }
  }
};