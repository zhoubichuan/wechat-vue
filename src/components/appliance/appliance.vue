<template>
  <footer class="footer">
        <div class="send">
            <i class="voiceInformation"></i>
            <input type="text" @keyup.13="sendMessage" v-model="sendDate">
            <i class="emjoy"></i>
            <i class="moreBtn" @click="moreBtn"></i>
        </div>
        <div class="function" v-show="this.$store.state.applianceShow">
          <ul>
            <li  v-for="(val,index) in application" :key="index" @click="appShow(val)">
              <i :class="'ico'+val.com"></i>
              <span>{{val.title}}</span>
            </li>
          </ul>
        </div>
   </footer>
</template>
<script>
import redBagSend from "@/components/red-bag/redBagSend";
import Bus from "@/common/Bus.js";
import axios from "axios";
export default {
  data() {
    return {
      sendDate: "",
      redBagShow: false,
      application: []
    };
  },
  created() {
    Bus.$on("scroll", val => {
      this.stopScroll = val;
    });
    axios.get("http://localhost:3000/api/application").then(res => {
      if (res.data.code == 200) {
        this.application = res.data.data;
      }
    });
  },
  components: {
    redBagSend
  },
  methods: {
    moreBtn() {
      this.$store.state.applianceShow = !this.$store.state.applianceShow;
    },
    appShow(val) {
      this.$store.state.pageShow = val.com == 5 ? true : false;
      this.$store.state.pageStopScroll = true;
    },
    sendMessage() {
      Bus.$emit("sendMessage", this.sendDate);
      this.sendDate = "";
    }
  }
};
</script>
