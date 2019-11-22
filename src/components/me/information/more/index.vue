<template>
  <div>
    <CommonUl :op="dataOp" />
  </div>
</template>

<script>

import CommonUl from "@/public_components/CommonUl";
import { mapState, mapMutations } from 'vuex'

export default {
  components: {

    CommonUl
  },
  data () {
    return {
      opPage: {
        class: "setting",
        header: true,
      },
      dataOp: {
        data: [
          { title: "性别", image: "", route: "sex" },
          { title: "地区", image: "", route: "location" },
          { title: "个性签名", image: "", route: "self" },
        ]
      }
    };
  },

  computed: {
    ...mapState('store_me_information_more_modules', ['meInformationMoreHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.meInformationMoreHeader,
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

