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
    CommonPage,
    ImgCard
  },
  computed: {
    ...mapState('storeMeModules/storeInformationModules', ['photoHeader'])
  },
  methods: {
    ...mapMutations({
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
      this.setHeaderConfig(this.photoHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
</style>

