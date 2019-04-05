<template>
	<div class="information-component">
    <!-- <redBagSend v-show="this.$store.state.pageShow" ></redBagSend> -->
    <vheader>
      <p slot="cancel" @click="goBack">返回</p>
      <p slot="title">{{title}}</p>
      <p slot="more">设置</p>
    </vheader>
    <div class="get">
      <RedBagGet :show="isShow" @close="fn" :message="message">
          <p slot="r-money" class="r-money" v-if="message.money">{{message.redBag.receiveRedBag}}元</p>
      </RedBagGet>
      
      <div>
        <ul class="information" >
          <li :class="item.redBag.self ? 'right':''" v-for="(item,index) in information" :key="index">
              <img class="photo" :src="item.pho"/>
              <div class="i-content">
                <p class="name">{{item.name}}</p>
                <p v-show="!item.redBag.redBag">{{item.message}}</p>
                <div v-show="item.redBag.redBag" class="red-bag" @click="stopScroll(item)">
                  <div class="bag">
                  <span class="ico"></span>
                  <div class="text">
                    <p>{{item.redBag.tips}}</p>
                    <p>{{Number(-
                (item.redBag.sendTime - new Date().getTime()) / 100 / 60 / 60
              ) -
                24 >
                0
                ? "红包已过期"
                : "查看红包"}}</p>
                  </div>
                  </div>
                  <p class="instruction">微信红包</p>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </div>
    <appliance/>
  </div>
</template>

<script type="text/javascript">
import vheader from "@/components/base-page/v-header";
import RedBagGet from "./appliance/red-bag/RedBagGet";
// import RedBagSend from "./appliance/red-bag/RedBagSend";
import Bus from "@/common/Bus.js";
import axios from "axios";
import appliance from "./appliance/appliance.vue";

export default {
  props: {
    title: String
  },
  data() {
    return {
      information: [],
      message: "",
      isShow: false,
      redBagDate: "",
      redBagTipsMessageDate: ""
    };
  },

  components: {
    vheader,
    RedBagGet,
    // RedBagSend,
    appliance
  },
  computed: {},
  created() {
    axios.get("http://localhost:3000/api/information").then(res => {
      this.information = res.data.message;
    });
    Bus.$on("hide", val => {
      this.isShow = !val;
    });
    Bus.$on("redBagDate", val => {
      this.information.push({
        pho: "../logo.png",
        name: "我自己1",
        message: "",
        money: "0.75",
        redBag: val
      });
    });
    Bus.$on("sendMessage", val => {
      this.information.push({
        pho: "../logo.png",
        name: "我自己2",
        message: val,
        money: "0.75",
        redBag: { self: true }
      });
    });
  },
  methods: {
    goBack() {
      this.$router.history.go(0);
    },
    fn() {
      this.isShow = false;
    },
    stopScroll(val) {
      this.isShow = true;
      this.message = val;
      this.$store.state.pageStopScroll = true;
    }
  }
};
</script>

<style type="text/css" lang="less">
.get {
  background-color: #cccccc;
  min-height: 100vh;
  padding: 0 10px;
  .information {
    width: 100%;
    margin: 0 auto;
    li {
      display: flex;
      flex-direction: row;
      justify-content: start;
      .photo {
        height: 30px;
        width: 30px;
        background-color: blue;
        display: block;
      }
      .i-content {
        margin-left: 10px;
        .name {
          display: inline;
          font-size: 12px;
          color: gray;
        }
      }
      &:nth-child(n + 2) {
        margin-top: 10px;
      }
    }
    .right {
      display: flex;
      flex-direction: row-reverse;
      .i-content {
        .name {
          display: block;
          text-align: right;
        }
      }
    }
  }
}
.red-bag {
  width: 200px;
  .instruction {
    display: inline;
  }
  .bag {
    background-color: #f4c795;
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding-top: 10px;
    padding-bottom: 10px;
    .ico {
      height: 35px;
      width: 30px;
      background-color: red;
      display: block;
      margin: 0 10px 0 10px;
      border-radius: 5px;
    }
    .text {
      display: inline;
      p {
        color: white;
      }
    }
  }
}
</style>