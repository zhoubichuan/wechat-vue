<template>
  <div class="application-component">
    <div class="application">
      <div class="send">
        <i class="voiceInformation"></i>
        <input type="text"
               @keyup.13="sendMessage"
               v-model="sendDate">
        <i class="emjoy"></i>
        <i class="moreBtn"
           @click="moreBtn"></i>
      </div>
      <div class="function"
           v-show="this.$store.state.applianceShow">
        <ul>
          <li v-for="(item,index) in application"
              :key="index"
              @click="appShow(item)">
            <i :class="'ico'+item.com"></i>
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
      application: []
    };
  },
  created () {
    this.$Bus.$on("scroll", val => {
      this.stopScroll = val;
    });
    this.$axios.get("/api/application").then(res => {
      if (res.data.code == 200) {
        this.application = res.data.data;
      }
    });
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
      height: 24px;
      background: url(./ico.png) -263px -8px;
      margin-left: 10px;
    }
    .moreBtn {
      width: 24px;
      height: 24px;
      background: url(./ico.png) -290px -8px;
      margin-left: 10px;
    }
    .voiceInformation {
      width: 24px;
      height: 24px;
      background: url(./ico.png) -7px -8px;
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
        i {
          width: 48px;
          height: 48px;
          margin: 0 auto;
          display: block;
          margin-top: 10px;
          background: url(./ico.png) -27px -53px;
        }
        .ico1 {
          background-position-x: -27px;
        }
        i.ico2 {
          background-position-x: -100px;
        }
        i.ico3 {
          background-position-x: -172px;
        }
        i.ico4 {
          background-position-x: -246px;
        }
        i.ico5 {
          background-position: -27px -131px;
        }
        i.ico6 {
          background-position: -100px -131px;
        }
        i.ico7 {
          background-position: -172px -131px;
        }
        i.ico8 {
          background-position: -246px -131px;
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
