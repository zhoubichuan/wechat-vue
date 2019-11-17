<template>
  <div>
    <div v-show="!informationIsShow">
      <LoginTip />
      <People />
    </div>
  </div>
</template>

<script>

import LoginTip from "@/public_components/LoginTip";
import People from "@/public_components/People";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    LoginTip,
    People
  },
  computed: {
    ...mapState("store_message_modules", ["opPage", "titleData", "informationIsShow", 'messageHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.messageHeader,
        isShowSearch: true,
        isShowFooter: true,
      }
      this.setInitPageConfig(initPageConfig)
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
