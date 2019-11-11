<template>
  <div>
    <Search :op="opSearch" />
    <NameList />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Search from "@/public_components/Search";
import NameList from "@/public_components/address/NameList";
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
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_me_album_modules', ['albumHeader'])
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: "HEADER_CONFIG"
    }),
    init () {
      this.setShowOrHideFooter(true)
      this.setShowOrHideFooter(false)
      this.setHeaderConfig(this.albumHeader)
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

