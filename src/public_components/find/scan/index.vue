<template>
  <CommonPopPage :op="opPage">
    <ImgCard :op="op"/>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/public_components/CommonPopPage";
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
          middle: "二维码/条码",
          right: "相册"
        }
      }
    };
  },
  components: {
    CommonPopPage,
    ImgCard
  }
};
</script>
<style lang='less' scoped>
</style>

