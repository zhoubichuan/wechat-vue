<template>
  <div>
    <information :op="informationData" />
  </div>
</template>
<script>

import information from "@/components/message/people/information";
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    information
  },
  data () {
    return {
    };
  },
  computed: {
    ...mapState('store_message_people_modules', ['informationData', 'messagePeopleHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.messagePeopleHeader,
      }
      this.setInitPageConfig(initPageConfig)
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

