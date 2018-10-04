<template>
  <div id="app" :class="stopScroll ? 'stop-scroll':''" >
    <redBagSend v-show="redBagShow" @update:r="val=>redBagShow=val" @update:s="val=>stopScroll=val"/>
    <header class="nav-header">
        <span class="cancle" >&lt;微信(5)</span>
        <h1 class="title">五包辣条(5)</h1>
        <span class="more">...</span>
    </header>
    <router-view @update:s="val=>stopScroll=val"/>
    <footer class="footer">
        <div class="send">
            <i class="voiceInformation"></i>
            <input type="text" @keyup.13="sendMessage" v-model="sendDate">
            <i class="emjoy"></i>
            <i class="moreBtn" @click="isShow=!isShow"></i>
        </div>
        <div class="function" v-show="isShow">
          <ul>
            <li  v-for="(val,index) in moreFunction" :key="index" @click="redBagShow=(val.com == 5 ? true:false),isShow=false,stopScroll=true">
              <i :class="'ico'+val.com"></i>
              <span>{{val.title}}</span>
            </li>
          </ul>
        </div>
   </footer>
   
  </div>
</template>

<script>
import redBagSend from "@/components/red-bag/redBagSend";
import Bus from "@/common/Bus.js";
export default {
  name: "App",
  data() {
    return {
      sendDate: "",
      isShow: false,
      redBagShow: false,
      stopScroll: false,
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
    fn(val) {
      if (val == 5) {
      }
    },
    sendMessage() {
      Bus.$emit("sendMessage", this.sendDate);
      this.sendDate = "";
    }
  }
};
</script>

<style>
.stop-scroll {
  max-height: 100vh;
  overflow: hidden;
}
.nav-header {
  position: fixed;
  width: 100%;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
}
.footer {
  position: fixed;
  width: 100%;
  background-color: #e9e9e9;
  bottom: 0;
}
.footer .send {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  border-bottom: 1px solid gainsboro;
}
.footer .send .voiceInformation {
  width: 24px;
  height: 24px;
  background: url(../static/ico.png) -7px -8px;
}
.footer .send input {
  width: calc(100% - 102px);
  margin-left: 10px;
  height: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
}
.footer .send .emjoy {
  width: 24px;
  height: 24px;
  background: url(../static/ico.png) -263px -8px;
  margin-left: 10px;
}

.footer .send .moreBtn {
  width: 24px;
  height: 24px;
  background: url(../static/ico.png) -290px -8px;
  margin-left: 10px;
}
.footer .function {
}
.footer .function ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.footer .function ul li {
  width: 25%;
}
.footer .function ul li i {
  width: 56px;
  height: 56px;
  margin: 0 auto;
  display: block;
  margin-top: 10px;
  background: url(/static/img/ico.366aed5.png) -32px -64px;
}
.footer .function ul li i.ico1 {
  background-position-x: -32px;
}
.footer .function ul li i.ico2 {
  background-position-x: -118px;
}
.footer .function ul li i.ico3 {
  background-position-x: -203px;
}
.footer .function ul li i.ico4 {
  background-position-x: -288px;
}
.footer .function ul li i.ico5 {
  background-position: -32px -156px;
}
.footer .function ul li i.ico6 {
  background-position: -118px -156px;
}
.footer .function ul li i.ico7 {
  background-position: -203px -156px;
}
.footer .function ul li i.ico8 {
  background-position: -288px -156px;
}

.footer .function ul li span {
  display: block;
  text-align: center;
  padding-top: 10px;
}
</style>
