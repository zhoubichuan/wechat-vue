<template>
  <CommonPopPage :op="opPage">
    <ImgCard :op="op"/>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";
import ImgCard from "@/common/me/ImgCard";
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
    CommonPopPage,
    ImgCard
  }
};
</script>
<style lang='less' scoped>
</style>

