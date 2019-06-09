<template>
  <CommonPage :op="opPage">
    <CommonUl :op="dataOp"/>
  </CommonPage>
</template>
<script>
import CommonPage from "@/common/CommonPage";
import CommonUl from "@/common/CommonUl";

export default {
  data() {
    return {
      opPage: {
        class: "find",
        header: true,
        footer: true,
        headContent: {
          middle: "发现"
        }
      },
      dataOp: {
        data: [
          {
            title: "朋友圈",
            img: "friend",
            route: "friend"
          },
          {
            title: "扫一扫",
            img: "scan",
            route: "scan"
          },
          {
            title: "摇一摇",
            img: "shake",
            route: "shake"
          },
          {
            title: "搜一搜",
            img: "shop",
            route: "search"
          },
          {
            title: "附近的人",
            img: "shop",
            route: "nearby"
          },
          {
            title: "购物",
            img: "shop",
            route: "shop"
          },
          {
            title: "游戏",
            img: "game",
            route: "game"
          },
          {
            title: "小程序",
            img: "shop",
            route: "program"
          }
        ]
      }
    };
  },
  components: {
    CommonPage,
    CommonUl
  }
};
</script>
<style lang="less" >
.find {
  background-color: #efeff4;
}
</style>
