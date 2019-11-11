<template>
 <div>
    <CommonUl :op="dataOp" />
  </div>
</template>
<script>

import CommonUl from "@/public_components/find/CommonUl";
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
   
    CommonUl
  },
  data () {
    return {

    };
  },
  computed: {
    ...mapState('store_find_modules', ['opPage', 'dataOp', 'findHeader'])
  },
  methods: {
    ...mapMutations({
      setHeaderConfig: "HEADER_CONFIG"
    }),
    init () {
      this.setHeaderConfig(this.findHeader)
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
