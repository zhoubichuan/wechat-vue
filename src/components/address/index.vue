<template>
  <CommonPage :op="opPage">
    <Search @click="popShow"/>
    <ClassList/>
    <NameList/>
    <transition name="transitionRouter" mode="out-in">
      <router-view/>
    </transition>
  </CommonPage>
</template>
<script>
import CommonPage from "@/public_components/CommonPage";
import Search from "@/public_components/Search";
import ClassList from "@/public_components/address/ClassList";
import NameList from "@/public_components/address/NameList";
import {mapState} from 'vuex'

export default {
  components: {
    CommonPage,
    Search,
    ClassList,
    NameList
  },
  data() {
    return {
      
    };
  },
   computed:{
    ...mapState('storeAddressModules',['opPage'])
  },
  methods: {
    popShow() {
      this.opPage.popshow = true;
    }
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