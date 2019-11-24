<template>
  <div>
    <CommonUl :op="meInformationData" />
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import CommonUl from "@/public_components/CommonUl";

export default {
  components: {
    CommonUl
  },
  data () {
    return {
    };
  },
  computed: {
    ...mapState('store_me_information_modules', ['meInformationHeader', 'meInformationData']),
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.meInformationHeader,
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
@import "index.less";
</style>

