<template>
 <div>
    <div v-show="!informationIsShow">
      <Search />
      <LoginTip />
      <People />
    </div>
    <transition name="transitionRouter" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

import Search from "@/public_components/Search";
import LoginTip from "@/public_components/message/LoginTip";
import People from "@/public_components/message/People";
import { mapState } from "vuex";

export default {
  components: {
   
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
