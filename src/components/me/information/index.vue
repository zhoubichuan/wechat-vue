<template>
  <div>
    <CommonUl :op="dataOp" />
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
      opPage: {
        class: "setting",
        header: true,
      },
      dataOp: {
        data: [
          { title: "头像", image: "", link: "meInformationPhoto", ico: 'photo' },
          { title: "名字", image: "", link: "meInformationName" },
          { title: "微信号", tips: 'zbc159x', image: "" },
          { title: "我的二维码", image: "", link: "meInformationCode", ico: 'photo' },
          { title: "更多", image: "", link: "meInformationMore" },
          { title: "我的地址", image: "", link: "meInformationAddress" }
        ]
      }
    };
  },
  computed: {

    ...mapState('store_me_information_modules', ['informationHeader']),
    ...mapState(['isShowHeader', 'isShowFooter'])
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
      this.setShowOrHideFooter(false)
      this.setShowOrHideFooter(false)
      this.setHeaderConfig(this.informationHeader)
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

