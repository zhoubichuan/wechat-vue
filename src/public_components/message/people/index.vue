<template>
  <CommonPage :op="opPage">
    <information :op="message2" />
  </CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";
import information from "../information";
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      informationIsShow: false,
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
      this.opInformation = res.data.message;
    });
  },
  computed: {
    ...mapState(["message2"])
  },
  components: {
    CommonPage,
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

