<template>
  <CommonPopPage :op="opPage">我的地址</CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";

export default {
  data() {
    return {
      opPage: {
        class: "setting",
        header: true,
        headContent: {
          left: "<",
          middle: "设置"
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

