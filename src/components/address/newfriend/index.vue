<template>
  <CommonPopPage :op="opPage">
    <Search :op="opSearch"/>
    <NameList/>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";
import Search from "@/common/Search";
import NameList from "@/common/address/NameList";
export default {
  data() {
    return {
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: "新的朋友",
          right: "添加朋友"
        }
      },
      opSearch: {
        text: "微信号/手机号"
      }
    };
  },
  components: {
    CommonPopPage,
    Search,
    NameList
  }
};
</script>
<style lang='less' scoped>
.album {
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

