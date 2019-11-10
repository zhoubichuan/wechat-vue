<template>
  <CommonPage :op="opPage">
    <CommonUl :op="dataOp" />
    <transition name="transitionRouter"
                mode="out-in">
      <router-view />
    </transition>
  </CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";
import CommonUl from "@/public_components/find/CommonUl";
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    CommonPage,
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
    ...mapState('storeMeModules/storeInformationModules', ['moreHeader'])
  },
  methods: {
    ...mapMutations({
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
      this.setHeaderConfig(this.moreHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
</style>

