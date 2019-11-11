<template>
 <div>
    <ImgCard :op="op"/>
  </div>
</template>

<script>

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
          middle: "摇一摇"
        }
      }
    };
  },
  components: {
   
    ImgCard
  }
};
</script>
<style lang='less' scoped>
</style>

