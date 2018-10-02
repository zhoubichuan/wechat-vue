<template>
  <div>
       <header class="header">
          <span class="cancle" @click="hideRedBag">&lt;返回</span>
          <h1 class="title">微信红包</h1>
          <span class="more">红包记录</span>
       </header>
       <section >
         <div class="top">
          <img class="photo" :src="message.pho"/>
          <p>{{message.name}}</p>
          <p>给你发一个红包</p>
        </div>
        <slot >
          <ul>
            <li v-for="(item,index) in message.redBag" :key="index">
              <span>姓名：{{item.name}}</span>
              <span>抢得红包：{{item.money}}元</span>
              <span>0</span>
            </li>
          </ul>
        </slot>
        
       </section>
      </div>
</template>

<script>
import Bus from "@/common/Bus.js";
export default {
  data() {
    return {
      message: {
        pho: "http://www.cdhdky.com/images/ttt.jpg",
        name: "沙和尚",
        message: "大师兄师傅父被妖怪抓走了",
        money: "0.75",
        redBag: [
          { name: "小明", money: "1", total: "30" },
          { name: "小k", money: "2", total: "30" },
          { name: "小红", money: "4", total: "30" },
          { name: "小红", money: "4", total: "30" },
          { name: "小红", money: "4", total: "30" }
        ],
        self: false
      }
    };
  },
  methods: {
    hideRedBag() {
      Bus.$emit("hide", true);
      this.$emit("update:s", false);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 40px;
}
#modal .detail {
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: red;
  width: 100%;
  height: 100vh;
}
#modal .detail .top {
}
#modal .detail .top img {
  width: 40px;
  padding-top: 100px;
  margin: 0 auto;
  display: block;
}
#modal .detail .top p {
}
#modal .detail ul {
  margin-top: 10px;
  max-height: 95px;
  overflow-y: scroll;
}
#modal .detail ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#modal .detail .tips {
  margin: 20px 0;
}
</style>

