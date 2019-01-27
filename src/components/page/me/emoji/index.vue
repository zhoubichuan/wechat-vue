<template>
  <div class="emoji">
    <div class="top">
      <ul>
        <li v-for="(item,index) in money" :key="index">
          <img src="" alt=""><p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="middle">
      <h3>腾讯服务</h3>
      <ul>
        <li v-for="(item,index) in tenxun" :key="index">
          <img src="" alt="">
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <h3>第三方服务</h3>
      <ul>
        <li v-for="(item,index) in server" :key="index">
          <img src="" alt="">
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: [
        { img: "", title: "收付款" },
        { img: "", title: "零钱" },
        { img: "", title: "银行卡" }
      ],
      tenxun: [
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" }
      ],
      server: [
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" },
        { img: "", title: "银行卡还款" }
      ]
    };
  }
};
</script>
<style>
.emoji {
  height: 100vh;
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

