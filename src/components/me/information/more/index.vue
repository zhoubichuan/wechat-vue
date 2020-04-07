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
          { title: "性别", image: "", tips:'男', link: "meInformationMoreSex" },
          { title: "地区", image: "", tips:'广东 深圳',link: "meInformationMoreLocation" },
          { title: "个性签名", image: "",tips:'未填写', link: "meInformationMoreSingel" },
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

