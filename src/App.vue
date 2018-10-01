<template>
  <div id="app">
    <redBag v-show="redBagShow" @update:r="val=>redBagShow=val"/>
    <header class="header">
        <span class="cancle" >&lt;微信(5)</span>
        <h1 class="title">五包辣条(5)</h1>
        <span class="more">...</span>
    </header>
    <router-view/>
    <footer class="footer">
        <div class="send">
            <i class="voiceInformation"></i>
            <input type="text">
            <i class="emjoy"></i>
            <i class="moreBtn" @click="isShow=!isShow"></i>
        </div>
        <div class="function" v-show="isShow">
          <ul>
            <li v-for="(val,index) in moreFunction" :key="index" @click="redBagShow=(val.com == 5 ? true:false),isShow=false">
              <img :src="val.img" alt="val.title">
              <span>{{val.title}}</span>
            </li>
          </ul>
        </div>
   </footer>
   
  </div>
</template>

<script>
import redBag from "@/components/RedBag/RedBagPage";
export default {
  name: "App",
  data() {
    return {
      isShow: false,
      redBagShow: false,
      moreFunction: [
        {
          img: "http://www.cdhdky.com/images/ttt.jpg",
          title: "照片",
          com: "1"
        },
        {
          img: "http://www.cdhdky.com/images/ttt.jpg",
          title: "拍摄",
          com: "2"
        },
        {
          img: "http://www.cdhdky.com/images/ttt.jpg",
          title: "语音通话",
          com: "3"
        },
        {
          img: "http://www.cdhdky.com/images/ttt.jpg",
          title: "位置",
          com: "4"
        },
        {
          img: "http://www.cdhdky.com/images/ttt.jpg",
          title: "红包",
          com: "5"
        },
        {
          img: "http://www.cdhdky.com/images/ttt.jpg",
          title: "语音输入",
          com: "6"
        },
        {
          img: "http://www.cdhdky.com/images/ttt.jpg",
          title: "收藏",
          com: "7"
        },
        {
          img: "http://www.cdhdky.com/images/ttt.jpg",
          title: "个人名片",
          com: "8"
        }
      ]
    };
  },
  components: {
    redBag
  },
  methods: {
    fn(val) {
      if (val == 5) {
      }
    }
  }
};
</script>

<style>
.header {
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
  background-color: white;
  bottom: 0;
}
.footer .send {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: space-around;
  align-items: center;
}
.footer .send .voiceInformation {
  width: 20px;
  height: 20px;
  background-color: red;
}
.footer .send input {
}
.footer .send .emjoy {
  width: 20px;
  height: 20px;
  background-color: rebeccapurple;
}

.footer .send .moreBtn {
  width: 20px;
  height: 20px;
  background-color: rgb(51, 153, 122);
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
.footer .function ul li img {
  width: 40px;
  margin: 0 auto;
  display: block;
  padding-top: 10px;
}
.footer .function ul li span {
  display: block;
  text-align: center;
  padding-top: 10px;
}
</style>
