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
    ...mapState('store_me_information_modules', ['codeHeader'])
  },
  methods: {
    ...mapMutations({
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
      this.setHeaderConfig(this.codeHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
</style>

