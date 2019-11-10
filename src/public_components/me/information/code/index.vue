<template>
  <CommonPage :op="opPage">
    <ImgCard :op="op"/>
  </CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";
import ImgCard from "@/public_components/me/ImgCard";
export default {
  data() {
    return {
      op: { img: require("@/assets/image/me/flower.png") },
      opPage: {
        class: "setting",
        header: true,
        headContent: {
          left: "<",
          middle: "我的二维码",
          right: "..."
        }
      }
    };
  },
  components: {
    CommonPage,
    ImgCard
  }
};
</script>
<style lang='less' scoped>
</style>

