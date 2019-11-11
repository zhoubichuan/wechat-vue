<template>
  <div>
    <information :op="message2" />
  </div>
</template>
<script>

import information from "../information";
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    information
  },
  data () {
    return {
      informationIsShow: false,
      opPage: {
        class: "people",
        header: true,
      }
    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter', "message2"]),
    ...mapState('store_message_modules', ['messageHeader'])
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: "HEADER_CONFIG"
    }),
    init () {
      this.setShowOrHideHeader(true)
      this.setShowOrHideFooter(false)
      this.setHeaderConfig(this.messageHeader)
    }
  },
  created () {
    this.init()
    axios.get("/api/information").then(res => {
      this.opInformation = res.data.message;
    });
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

