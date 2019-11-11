<template>
  <div>
    <Search @click="popShow" />
    <ClassList />
    <NameList />
  </div>
</template>
<script>

import Search from "@/public_components/Search";
import ClassList from "@/public_components/address/ClassList";
import NameList from "@/public_components/address/NameList";
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
    ...mapState('store_address_modules', ['opPage', 'addressHeader']),
  },
  methods: {
    ...mapMutations({
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
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