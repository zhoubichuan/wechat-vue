<template>
  <div>
    <ImgCard :op="op" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ImgCard from "@/public_components/ImgCard";
export default {
  components: {
    ImgCard
  },
  data () {
    return {
      op: { img: require("@/assets/image/me/flower.png") },
    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_find_scan_modules', ['findScanHeader'])
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: "HEADER_CONFIG"
    }),
    init () {
      this.setShowOrHideHeader(true)
      this.setShowOrHideFooter(false)
      this.setHeaderConfig(this.findScanHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
</style>

