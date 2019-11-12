<template>
  <div>
    <div v-show="!informationIsShow">
      <Search />
      <LoginTip />
      <People />
    </div>
  </div>
</template>

<script>

import Search from "@/public_components/Search";
import LoginTip from "@/public_components/LoginTip";
import People from "@/public_components/People";
import { mapState, mapMutations } from "vuex";

export default {
  components: {

    Search,
    LoginTip,
    People
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState("store_message_modules", ["opPage", "titleData", "informationIsShow", 'messageHeader'])
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: "HEADER_CONFIG"
    }),
    init () {
       this.setShowOrHideHeader(true)
      this.setShowOrHideFooter(true)
      this.setHeaderConfig(this.messageHeader)
    }
  },
  created () {
    this.init()
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
