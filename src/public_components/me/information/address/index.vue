<template>
  <CommonPopPage :op="opPage">我的地址</CommonPopPage>
</template>

<script>
import CommonPopPage from "@/public_components/CommonPopPage";

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
    CommonPopPage
  }
};
</script>
<style lang='less' scoped>
</style>

