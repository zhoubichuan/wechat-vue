<template>
  <CommonPage :op="opPage">
    <div v-show="!informationIsShow">
      <Search />
      <LoginTip />
      <People />
    </div>
    <transition name="transitionRouter" mode="out-in">
      <router-view />
    </transition>
  </CommonPage>
</template>

<script>
import CommonPage from "@/common/CommonPage";
import Search from "@/common/Search";
import LoginTip from "@/common/message/LoginTip";
import People from "@/common/message/People";
import { mapState } from "vuex";

export default {
  components: {
    CommonPage,
    Search,
    LoginTip,
    People
  },
  computed: {
    ...mapState("message", ["opPage", "titleData", "informationIsShow"])
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
