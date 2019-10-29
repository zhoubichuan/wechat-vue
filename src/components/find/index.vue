<template>
  <CommonPage :op="opPage">
    <CommonUl :op="dataOp"/>
    <transition name="transitionRouter" mode="out-in">
      <router-view/>
    </transition>
  </CommonPage>
</template>
<script>
import CommonPage from "@/public_components/CommonPage";
import CommonUl from "@/public_components/find/CommonUl";
import {mapState} from 'vuex'

export default {
  components: {
    CommonPage,
    CommonUl
  },
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState('storeFindModules',['opPage','dataOp'])
  },
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
