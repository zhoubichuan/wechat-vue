<template>
  <CommonPage :op="opPage">
    <div v-show="!informationIsShow">
      <Search/>
      <div class="device">
        <img :src="imgData" alt>
        <p>微信已登录</p>
      </div>
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
import People from "@/common/message/People";
import img from "../logo.png";

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
      imgData: img,
      titleData: "",
      informationIsShow: false
    };
  },
  components: {
    CommonPage,
    Search,
    People
  }
};
</script>


<style scoped lang="less">
.message {
  background-color: #efeff4;
  overflow-y: scroll;
  .device {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    img {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
    p {
      padding-left: 10px;
    }
  }
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
