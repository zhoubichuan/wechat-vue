<template>
	<div class="get">
   <div>
    <ul class="information" >
     <li :class="val.redBag.self ? 'right':''" v-for="(val,index) in information" :key="index">
        <img class="photo" :src="val.pho"/>
        <div class="content">
          <p class="name">{{val.name}}</p>
          <p v-show="!val.redBag.redBag">{{val.message}}</p>
          <div v-show="val.redBag.redBag" class="red-bag" @click="stopScroll(val)">
            <div class="bag">
            <span class="ico"></span>
            <div class="text">
              <p>{{val.redBag.tips}}</p>
              <p>{{Number(-
          (val.redBag.sendTime - new Date().getTime()) / 100 / 60 / 60
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
    <RedBagGet :show="isShow" @close="fn" :message="message">
      <p slot="r-money" class="r-money" v-if="message.money">{{message.redBag.receiveRedBag}}元</p>
    </RedBagGet>
   </div>
  </div>
</template>

<script type="text/javascript">
import RedBagGet from "@/components/red-bag/RedBagGet";
import Bus from "@/common/Bus.js";
import axios from "axios";
export default {
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
    RedBagGet
  },
  computed: {},
  created() {
    axios.get("http://localhost:3000/api/message").then(res => {
      this.information = res.data.message;
    });
    Bus.$on("hide", val => {
      this.isShow = !val;
    });
    Bus.$on("redBagDate", val => {
      this.information.push({
        pho: "http://www.cdhdky.com/images/ttt.jpg",
        name: "我自己1",
        message: "",
        money: "0.75",
        redBag: val
      });
    });
    Bus.$on("sendMessage", val => {
      this.information.push({
        pho: "http://www.cdhdky.com/images/ttt.jpg",
        name: "我自己2",
        message: val,
        money: "0.75",
        redBag: { self: true }
      });
    });
  },
  methods: {
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
  padding-bottom: 50px;
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
      .content {
        .name {
          display: inline;
          font-size: 12px;
          color: gray;
        }
      }
    }
    li.right {
      display: flex;
      flex-direction: row-reverse;
      .content {
        margin-left: 10px;
        .name {
          display: block;
          text-align: right;
        }
      }
    }
    li:nth-child(n + 2) {
      margin-top: 10px;
    }
  }
}
.red-bag {
  width: 200px;
}
.red-bag .instruction {
  display: inline;
}
.red-bag .bag {
  background-color: #f4c795;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-top: 10px;
  padding-bottom: 10px;
}

.red-bag .bag .ico {
  height: 35px;
  width: 30px;
  background-color: red;
  display: block;
  margin: 0 10px 0 10px;
  border-radius: 5px;
}
.red-bag .bag .text {
  display: inline;
}
.red-bag .bag .text p {
  color: white;
}
</style>