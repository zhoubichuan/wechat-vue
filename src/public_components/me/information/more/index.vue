<template>
  <CommonPage :op="opPage">更多</CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";

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
    CommonPage
  }
};
</script>
<style lang='less' scoped>
</style>

