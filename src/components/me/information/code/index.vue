<template>
  <div>
    <ImgCard :op="op" />
  </div>
</template>

<script>

import ImgCard from "@/public_components/ImgCard";
import { mapState, mapMutations } from 'vuex'
export default {
  components: {

    ImgCard
  },
  data () {
    return {
      op: { img: require("@/assets/image/me/flower.png") },
      opPage: {
        class: "setting",
        header: true,
      }
    };
  },
  computed: {
    ...mapState('store_me_information_code_modules', ['meInformationCodeHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.meInformationCodeHeader,
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

