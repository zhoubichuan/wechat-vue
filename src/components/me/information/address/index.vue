<template>
  <CommonPage :op="opPage">我的地址</CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      opPage: {
        class: "address",
        header: true,

      }
    };
  },
  components: {
    CommonPage
  },
  computed: {
    ...mapState('storeMeModules/storeInformationModules', ['addressHeader'])
  },
  methods: {
    ...mapMutations({
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
      this.setHeaderConfig(this.addressHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
</style>

