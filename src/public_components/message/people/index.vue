<template>
 <div>
    <information :op="message2" />
  </div>
</template>

<script>

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

