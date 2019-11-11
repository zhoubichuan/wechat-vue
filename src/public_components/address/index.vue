<template>
  <div>
    <Search @click="popShow" />
    <ClassList />
    <NameList />
    <transition name="transitionRouter"
                mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>

import Search from "@/public_components/Search";
import ClassList from "@/public_components/address/ClassList";
import NameList from "@/public_components/address/NameList";
export default {
  data () {
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

    Search,
    ClassList,
    NameList
  },
  methods: {
    popShow () {
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