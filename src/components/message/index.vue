<template>
  <CommonPage :op="opPage">
    <div v-show="!informationIsShow">
      <Search/>
      <LoginTip/>
      <People/>
    </div>
    <transition name="transitionRouter" mode="out-in">
      <router-view/>
    </transition>
  </CommonPage>
</template>

<script>
import CommonPage from "@/common/CommonPage";
import Search from "@/common/Search";
import LoginTip from "@/common/message/LoginTip";
import People from "@/common/message/People";

export default {
  data() {
    return {
      opPage: {
        class: "message",
        header: true,
        footer: true,
        headContent: {
          style: "color:black ;background-color: white;",
          left: "",
          middle: "微信(18)",
          right: {
            ico: "more"
          },
          popFloor: true
        }
      },
      titleData: "",
      informationIsShow: false
    };
  },
  components: {
    CommonPage,
    Search,
    LoginTip,
    People
  }
};
</script>


<style scoped lang="less">
.message {
  background-color: #efeff4;
  overflow-y: scroll;
}
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: all 0.4s;
}
.transitionRouter-enter,
.transitionRouter-leave {
  transform: translate3d(100%, 0, 0);
}
</style>
