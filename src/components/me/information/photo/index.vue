<template>
  <div>
    <ImgCard :op="op" />
  </div>
</template>

<script>

import ImgCard from "@/public_components/ImgCard";
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      op: { img: require("@/assets/image/me/flower.png") },
    };
  },
  components: {
    ImgCard
  },
  computed: {
    ...mapState('store_me_information_photo_modules', ['meInformationPhotoHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.meInformationPhotoHeader,
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
</style>

