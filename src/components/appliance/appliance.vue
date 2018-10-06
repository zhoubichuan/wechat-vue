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
            <li  v-for="(val,index) in moreFunction" :key="index" @click="appShow(val)">
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
export default {
  data() {
    return {
      sendDate: "",
      redBagShow: false,
      moreFunction: [
        {
          title: "照片",
          com: "1"
        },
        {
          title: "拍摄",
          com: "2"
        },
        {
          title: "语音通话",
          com: "3"
        },
        {
          title: "位置",
          com: "4"
        },
        {
          title: "红包",
          com: "5"
        },
        {
          title: "语音输入",
          com: "6"
        },
        {
          title: "收藏",
          com: "7"
        },
        {
          title: "个人名片",
          com: "8"
        }
      ]
    };
  },
  created() {
    Bus.$on("scroll", val => {
      this.stopScroll = val;
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
