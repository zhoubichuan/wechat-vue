<template>
  <CommonPopPage :op="opPage">更多</CommonPopPage>
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
          left: "<"
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

