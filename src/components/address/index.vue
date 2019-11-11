<template>
  <div>
    <Search @click="popShow" />
    <ClassList />
    <NameList />
  </div>
</template>
<script>

import Search from "@/public_components/Search";
import ClassList from "@/public_components/ClassList";
import NameList from "@/public_components/NameList";
import { mapState, mapMutations } from 'vuex'

export default {
  components: {

    Search,
    ClassList,
    NameList
  },
  data () {
    return {

    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_address_modules', ['opPage', 'addressHeader']),
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
      this.setShowOrHideHeader(true)
      this.setShowOrHideFooter(true)
      this.setHeaderConfig(this.addressHeader)
    },
    popShow () {
      this.opPage.popshow = true;
    }
  },
  created () {
    this.init()
  }
};
</script>

<style lang="less" scoped>
.address {
  background-color: #efeff4;
  height: calc(100vh - 50px);
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