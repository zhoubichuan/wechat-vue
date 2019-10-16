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
import CommonPage from "@/common/CommonPage";
import Search from "@/common/Search";
import ClassList from "@/common/address/ClassList";
import NameList from "@/common/address/NameList";
export default {
  data() {
    return {
      opPage: {
        class: "address",
        header: true,
        footer: true,
        headContent: {
          middle: "通讯录",
          right: {
            ico: "add-friend"
          }
        }
      }
    };
  },
  components: {
    CommonPage,
    Search,
    ClassList,
    NameList
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