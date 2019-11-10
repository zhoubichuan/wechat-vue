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
        class: "me-information-photo",
        header: true,
        headContent: {
          left: "<",
          middle: "个人头像",
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

