<template>
  <div>我的地址</div>
</template>

<script>
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
  computed: {
    ...mapState('store_me_information_modules', ['addressHeader'])
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

