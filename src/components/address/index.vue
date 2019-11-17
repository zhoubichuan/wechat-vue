<template>
  <div>
    <ClassList />
    <NameList />
  </div>
</template>
<script>

import ClassList from "@/public_components/ClassList";
import NameList from "@/public_components/NameList";
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    ClassList,
    NameList
  },
  data () {
    return {

    };
  },
  computed: {
    ...mapState('store_address_modules', ['opPage', 'addressHeader']),
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.addressHeader,
        isShowSearch: true,
        isShowFooter: true,
      }
      this.setInitPageConfig(initPageConfig)
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