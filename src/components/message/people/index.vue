<template>
  <CommonPopPage :op="opPage">
    <information :title="titleData"/>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";
import information from "../information.vue";
export default {
  data() {
    return {
      informationIsShow: false,
      titleData: "",
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: this.$route.params.id.slice(1),
          right: "..."
        }
      }
    };
  },
  components: {
    CommonPopPage,
    information
  }
};
</script>
<style lang='less' scoped>
.album {
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

