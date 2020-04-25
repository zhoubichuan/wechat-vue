<template>
  <div class="message-application">
    <div class="application">
      <div class="send">
        <img class="voiceInformation"
             src="@/assets/image/语音.svg"
             alt=""
             srcset="">
        <input type="text"
               @keyup.13="sendMessage"
               v-model="sendDate">
        <img class="emjoy"
             src="@/assets/image/表情.svg"
             alt=""
             srcset="">
        <img class="moreBtn"
             src="@/assets/image/more.svg"
             alt=""
             srcset=""
             @click="moreBtn">
      </div>
      <div class="function"
           v-show="this.$store.state.applianceShow">
        <ul>
          <li v-for="(item,index) in appConfigData"
              :key="index"
              @click="appShow(item)">
            <img :src="require(`@/assets/image/${item.img}.svg`)"
                 alt="">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sendDate: "",
      redBagShow: false,
      appConfigData: [
        {
          "title": "照片",
          "img": "照片"
        },
        {
          "title": "拍摄",
          "img": "拍摄"
        },
        {
          "title": "语音通话",
          "img": "语音通话"
        },
        {
          "title": "位置",
          "img": "位置"
        },
        {
          "title": "红包",
          "img": "红包"
        },
        {
          "title": "语音输入",
          "img": "语音输入"
        },
        {
          "title": "收藏",
          "img": "收藏"
        },
        {
          "title": "群工具",
          "img": "群工具"
        },
        {
          "title": "个人名片",
          "img": "个人名片"
        },
        {
          "title": "文件",
          "img": "文件"
        },
        {
          "title": "卡券",
          "img": "卡券"
        }
      ]
    };
  },
  created () {
    this.$Bus.$on("scroll", val => {
      this.stopScroll = val;
    });
    // this.$axios.get("/api/message/application:id").then(res => {
    //   if (res.data.code == 200) {
    //     this.application = res.data.data;
    //   }
    // });
  },
  components: {},
  methods: {
    moreBtn () {
      this.$store.state.applianceShow = !this.$store.state.applianceShow;
    },
    appShow (val) {
      this.$store.state.pageShow = val.com == 5 ? true : false;
      this.$store.state.pageStopScroll = true;
    },
    sendMessage () {
      Bus.$emit("sendMessage", this.sendDate);
      this.sendDate = "";
    }
  }
};
</script>
<style lang="less" scoped>
.application {
  position: fixed;
  width: 100%;
  background-color: #e9e9e9;
  bottom: 0;
  z-index: 500;
  .send {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 40px;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    border-bottom: 1px solid gainsboro;
    input {
      width: calc(100% - 102px);
      margin-left: 10px;
      height: 20px;
      border: 1px solid #f1f1f1;
      border-radius: 5px;
    }
    .emjoy {
      width: 24px;
    }
    .moreBtn {
      width: 24px;
    }
    .voiceInformation {
      width: 24px;
    }
  }
  .function {
    height: inherit;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li {
        width: 25%;
        padding: 10px 0;
        text-align: center;
        img {
          width: 30px;
        }
        span {
          display: block;
          text-align: center;
          padding-top: 10px;
        }
      }
    }
  }
}
</style>
