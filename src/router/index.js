import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      redirect: {
        path: "/message"
      }
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/components/message"),
    },
    {
      path: "/messageSetting:id",
      name: "messageSetting",
      component: () => import("@/components/message/setting")
    },
    {
      path: "/messagePeople:id",
      name: "people",
      component: () => import("@/components/message/people")
    }, {
      path: "/people:id",
      name: "people",
      component: () => import("@/components/message/people")
    }, {
      path: "/people:id",
      name: "people",
      component: () => import("@/components/message/people")
    },
    {
      path: "/address",
      name: "address",
      component: () => import("@/components/address"),
    },
    {
      path: "/addressFriends",
      name: "friends",
      component: () => import("@/components/address/newfriend")
    },
    {
      path: "/addressNumber",
      name: "number",
      component: () => import("@/components/address/number")
    },
    {
      path: "/addressTalk",
      name: "talk",
      component: () => import("@/components/address/talk")
    },
    {
      path: "/addressTips",
      name: "tips",
      component: () => import("@/components/address/tips")
    },
    {
      path: "/addressPeople:id",
      name: "people",
      component: () => import("@/components/address/people"),
    },
    {
      path: "/addressPeopleSettingAndTips",
      name: "settingAndTips",
      component: () => import("@/components/address/people/settingAndTips")
    },
    {
      path: "/addressPeopleFriend:id",
      name: "friend",
      component: () => import("@/components/message/people")
    },
    {
      path: "/addressPeopleMoreInformation:id",
      name: "moreInformation",
      component: () => import("@/components/address/people/moreInformation")
    },
    {
      path: "/sendInformation",
      redirect: {
        path: "/message/people:id"
      }
    },
    {
      path: "/find",
      name: "find",
      component: () => import("@/components/find"),
    },
    {
      path: "/findFriend",
      name: "findFriend",
      component: () => import("@/components/find/friend")
    },
    {
      path: "/findGame",
      name: "findGame",
      component: () => import("@/components/find/game")
    },
    {
      path: "/findNearby",
      name: "findNearby",
      component: () => import("@/components/find/nearby")
    },
    {
      path: "/findProgram",
      name: "findProgram",
      component: () => import("@/components/find/program")
    },
    {
      path: "/findScan",
      name: "findScan",
      component: () => import("@/components/find/scan")
    },
    {
      path: "/findSearch",
      name: "findSearch",
      component: () => import("@/components/find/search")
    },
    {
      path: "/findShake",
      name: "findShake",
      component: () => import("@/components/find/shake")
    },
    {
      path: "/findShop",
      name: "findShop",
      component: () => import("@/components/find/shop")
    },
    {
      path: "/me",
      name: "me",
      component: () => import("@/components/me"),
    },
    {
      path: "/meInformation",
      name: "meInformation",
      component: () => import("@/components/me/information"),
    },
    {
      path: "/meInformationAddress",
      name: "meInformationAddress",
      component: () => import("@/components/me/information/address")
    },
    {
      path: "/meInformationCode",
      name: "meInformationCode",
      component: () => import("@/components/me/information/code")
    },
    {
      path: "/meInformationMore",
      name: "meInformationMore",
      component: () => import("@/components/me/information/more")
    },
    {
      path: "/meInformationMoreSex",
      name: "meInformationMoreSex",
      component: () => import("@/components/me/information/more/sex")
    },
    {
      path: "/meInformationMoreLocation",
      name: "meInformationMoreLocation",
      component: () => import("@/components/me/information/more/location")
    },
    {
      path: "/meInformationMoreSingel",
      name: "meInformationMoreSingel",
      component: () => import("@/components/me/information/more/singel")
    },
    {
      path: "/meInformationName",
      name: "meInformationName",
      component: () => import("@/components/me/information/name")
    },
    {
      path: "/meInformationPhoto",
      name: "meInformationPhoto",
      component: () => import("@/components/me/information/photo")
    },
    {
      path: "/meAlbum",
      name: "meAlbum",
      component: () => import("@/components/me/album")
    },
    {
      path: "/meCardBag",
      name: "meCardBag",
      component: () => import("@/components/me/cardBag")
    },
    {
      path: "/meCollection",
      name: "meCollection",
      component: () => import("@/components/me/collection")
    },
    {
      path: "/meEmoji",
      name: "meEmoji",
      component: () => import("@/components/me/emoji")
    },
    {
      path: "/meMoneyBag",
      name: "meMoneyBag",
      component: () => import("@/components/me/moneyBag")
    },
    {
      path: "/meSetting",
      name: "meSetting",
      component: () => import("@/components/me/setting"),
    },
    {
      path: "/meSettingAccountSafe",
      name: "meSettingAccountSafe",
      component: () => import("@/components/me/setting/accountSafe")
    },
    {
      path: "/meSettingNewMessageNote",
      name: "meSettingNewMessageNote",
      component: () => import("@/components/me/setting/newMessageNote")
    },
    {
      path: "/meSettingPrivacy",
      name: "meSettingPrivacy",
      component: () => import("@/components/me/setting/privacy")
    },
    {
      path: "/meSettingCommon",
      name: "meSettingCommon",
      component: () => import("@/components/me/setting/common")
    },
    {
      path: "/meSettingHelpAndFeedback",
      name: "meSettingHelpAndFeedback",
      component: () =>
        import("@/components/me/setting/helpAndFeedback")
    },
    {
      path: "/meSettingAboutWeChate",
      name: "meSettingAboutWeChate",
      component: () => import("@/components/me/setting/aboutWeChate")
    },
    {
      path: "/meSettingWeChatePlugin",
      name: "meSettingWeChatePlugin",
      component: () => import("@/components/me/setting/weChatePlugin")
    },
    {
      path: "/meSettingChangeAcount",
      name: "meSettingChangeAcount",
      component: () => import("@/components/me/setting/changeAcount")
    },
    {
      path: "/meSettingOutLogin",
      name: "meSettingOutLogin",
      component: () => import("@/components/me/setting/outLogin")
    }
  ]
});