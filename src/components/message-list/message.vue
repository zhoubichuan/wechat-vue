<template>
	<div class="get">
   <div>
    <ul class="information" >
     <li :class="val.self ? 'right':''" v-for="(val,index) in information" :key="index">
        <img class="photo" :src="val.pho"/>
        <div class="content">
          <p class="name">{{val.name}}</p>
          <p v-show="!val.redBag">{{val.message}}</p>
          <div v-show="val.redBag" class="red-bag" @click="stopScroll(val)">
            <div class="bag">
            <span class="ico"></span>
            <div class="text">
              <p>{{val.redBag.tips}}</p>
              <p>{{Number(
          (val.redBag.sendTime- new Date().getTime()) / 100 / 60 / 60
        ) -
          24 >
        0 ? "红包已过期":"查看红包"}}</p>
            </div>
            </div>
            <p class="instruction">微信红包</p>
          </div>
        </div>
      </li>
    </ul>
    <RedBagGet :show="isShow" @close="fn" :message="message">
      <p slot="r-money" class="r-money" v-if="message.money">{{message.money}}</p>
    </RedBagGet>
   </div>
  </div>
</template>

<script type="text/javascript">
import RedBagGet from "@/components/red-bag/RedBagGet";
import Bus from "@/common/Bus.js";
export default {
  data() {
    return {
      information: [
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "唐僧",
          message: "打雷了，下雨了，该收衣服了。",
          redBag: "",
          self: false
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "孙悟空",
          message: "嘿嘿我来了",
          money: "",
          redBag: {
            tips: "恭喜发财1",
            total: "30",
            sendTime: "1508614531210",
            redBag: [
              { name: "小明", money: "1", rest: "30" },
              { name: "小k", money: "2", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" }
            ]
          },
          self: false
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "猪八戒",
          message: "嘿嘿我来了",
          redBag: "",
          self: false
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "沙和尚",
          message: "大师兄师傅父被妖怪抓走了",
          money: "0.75",
          redBag: {
            tips: "恭喜发财",
            total: "30",
            sendTime: "1538614531210",
            redBag: [
              { name: "小明", money: "1", rest: "30" },
              { name: "小k", money: "2", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" }
            ]
          },
          self: false
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "唐僧",
          message: "打雷了，下雨了，该收衣服了。",
          redBag: "",
          self: false
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "孙悟空",
          message: "嘿嘿我来了",
          money: "0.75",
          redBag: {
            tips: "恭喜发财，大吉大利",
            total: "30",
            sendTime: "1538614531210",
            redBag: [
              { name: "小明", money: "1", rest: "30" },
              { name: "小k", money: "2", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" }
            ]
          },
          self: false
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "猪八戒",
          message: "嘿嘿我来了",
          redBag: "",
          self: false
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "沙和尚",
          message: "大师兄师傅父被妖怪抓走了",
          money: "0.75",
          redBag: {
            tips: "大吉大利",
            total: "30",
            sendTime: "1538614531210",
            redBag: [
              { name: "小明", money: "1", rest: "30" },
              { name: "小k", money: "2", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" }
            ]
          },
          self: false
        }
      ],
      message: "",
      isShow: false,
      redBagDate: "",
      redBagTipsMessageDate: ""
    };
  },

  components: {
    RedBagGet
  },

  created() {
    Bus.$on("hide", val => {
      this.isShow = !val;
    });
    Bus.$on("redBagDate", val => {
      this.information.push({
        pho: "http://www.cdhdky.com/images/ttt.jpg",
        name: "我自己",
        message: "",
        redBag: val,
        self: true
      });
    });
    Bus.$on("sendMessage", val => {
      this.information.push({
        pho: "http://www.cdhdky.com/images/ttt.jpg",
        name: "我自己",
        message: val,
        redBag: "",
        self: true
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
      Bus.$emit("scroll", true);
    }
  }
};
</script>

<style type="text/css">
.get {
  background-color: aliceblue;
  min-height: 100vh;
  padding-bottom: 50px;
}
.information {
  width: calc(100% - 30px);
  margin: 0 auto;
}
.information li {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.information li.right {
  display: flex;
  flex-direction: row-reverse;
}
.information li:nth-child(n + 2) {
  margin-top: 10px;
}
.information li .photo {
  height: 30px;
  width: 30px;
  background-color: blue;
  display: block;
}
.information li.right .content {
  margin-right: 10px;
}
.information li .content .name {
  display: inline;
  font-size: 12px;
  color: gray;
}
.information li.right .content .name {
  display: block;
  text-align: right;
}
.content {
  margin-left: 10px;
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

/* 弹出层 */
#modal .mask {
  height: 100vh;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  position: absolute;
  top: 0;
  z-index: 100;
}
#modal .get-bag {
  width: 80%;
  background-color: #d8593f;
  z-index: 100;
  position: absolute;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: calc(100vh - 180px);
}
#modal .get-bag .delete {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 20px;
}
#modal .get-bag .person-information {
  margin: 0 auto;
  text-align: center;
}
#modal .get-bag .person-information .photo {
  height: 30px;
  width: 30px;
  background-color: blue;
  display: block;
  margin: 0 auto;
}
#modal .get-bag .detail-information {
  width: calc(100% - 30px);
  margin: 0 auto;
}
</style>