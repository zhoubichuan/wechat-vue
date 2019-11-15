<template>
  <div>
    <ImgCard :op="op"
             background="black" />
  </div>
</template>

<script>

import ImgCard from "@/public_components/ImgCard";
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      op: { img: require("@/assets/image/me/flower.png") },
      opPage: {
        class: "me-information-photo",
        header: true,

      }
    };
  },
  components: {

    ImgCard
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_me_information_modules', ['meInformationPhotoHeader'])
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
      this.setShowOrHideHeader(true)
      this.setShowOrHideFooter(false)
      this.setHeaderConfig(this.meInformationPhotoHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
</style>

