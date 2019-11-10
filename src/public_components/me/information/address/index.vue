<template>
  <CommonPage :op="opPage">我的地址</CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";

export default {
  data() {
    return {
      opPage: {
        class: "address",
        header: true,
        headContent: {
          left: "<",
          middle: "我的地址"
        }
      }
    };
  },
  components: {
    CommonPage
  }
};
</script>
<style lang='less' scoped>
</style>

