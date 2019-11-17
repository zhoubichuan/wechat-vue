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
      this.setShowOrHideFooter(false)
      this.setShowOrHideFooter(false)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
.information {
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
  ul {
    li {
      padding: 0 15px;
      background-color: white;
      border-bottom: 1px solid #f2f2f2;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      &:nth-of-type(5) {
        border-bottom: none;
        margin-bottom: 10px;
      }
      a {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &::after {
          content: ">";
          font-size: 18px;
          color: gray;
        }
      }
    }
  }
}
</style>

