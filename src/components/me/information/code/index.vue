<template>
  <CommonPage :op="opPage">
    <ImgCard :op="op" />
  </CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";
import ImgCard from "@/public_components/me/ImgCard";
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    CommonPage,
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
    ...mapState('storeMeModules/storeInformationModules', ['codeHeader'])
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

