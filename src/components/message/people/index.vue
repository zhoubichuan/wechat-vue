<template>
  <CommonPopPage :op="opPage">
    <information :op="opInformation"/>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";
import information from "../information.vue";
import axios from "axios";
export default {
  data() {
    return {
      informationIsShow: false,
      opInformation: {},
      opPage: {
        class: "people",
        header: true,
        headContent: {
          left: "<",
          middle: this.$route.params.id.slice(1),
          right: "..."
        }
      }
    };
  },
  created() {
    axios.get("/api/information").then(res => {
      this.opInformation.data = res.data.message;
    });
  },
  mounted() {},
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

