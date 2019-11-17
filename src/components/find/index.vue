<template>
  <div>
    <CommonUl :op="dataOp" />
  </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'
import CommonUl from "@/public_components/CommonUl";
export default {
  components: {
    CommonUl
  },
  data () {
    return {

    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_find_modules', ['opPage', 'dataOp', 'findHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.findHeader,
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
<style lang="less" scoped>
.find {
  background-color: #efeff4;
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
