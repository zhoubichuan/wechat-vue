<template>
  <div>
    <Search :op="opSearch" />
    <NameList />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Search from "@/public_components/Search";
import NameList from "@/public_components/NameList";
export default {
  components: {
    Search,
    NameList
  },
  data () {
    return {
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: "新的朋友",
          right: "添加朋友"
        }
      },
      opSearch: {
        text: "微信号/手机号"
      }
    };
  },
  computed: {
    ...mapState('store_address_newfriend_modules', ['addressNewfriendHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.addressNewfriendHeader,
      }
      this.setInitPageConfig(initPageConfig)
    }
  },
  created () {
    this.init()
  }

};
</script>
<style lang='less' scoped>
.album {
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

