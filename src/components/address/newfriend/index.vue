<template>
  <CommonPage :op="opPage">
    <Search :op="opSearch"/>
    <NameList/>
  </CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";
import Search from "@/public_components/Search";
import NameList from "@/public_components/address/NameList";
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
    CommonPage,
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

