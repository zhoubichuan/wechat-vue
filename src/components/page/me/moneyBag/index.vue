<template>
  <div class="moneyBag">
    <div class="top">
      <ul>
        <li v-for="(item,index) in money" :key="index">
          <img src="" alt="">
          <p class="title">{{item.title}}</p>
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
      money: [{ img: "", title: "收付款" }, { img: "", title: "钱包" }],
      tenxun: [
        { img: "", title: "行用卡还款" },
        { img: "", title: "微粒贷借钱" },
        { img: "", title: "手机充值" },
        { img: "", title: "理财通" },
        { img: "", title: "生活缴费" },
        { img: "", title: "Q币充值" },
        { img: "", title: "城市服务" },
        { img: "", title: "腾讯公益" }
      ],
      server: [
        { img: "", title: "火车票机票" },
        { img: "", title: "滴滴出行" },
        { img: "", title: "京东优选" },
        { img: "", title: "美团外卖" },
        { img: "", title: "电影演出赛事" },
        { img: "", title: "吃喝玩乐" },
        { img: "", title: "酒店" },
        { img: "", title: "拼多多" },
        { img: "", title: "蘑菇街女装" },
        { img: "", title: "唯品会特卖" },
        { img: "", title: "转转二手" }
      ]
    };
  }
};
</script>
<style lang='less'>
.moneyBag {
  height: 100vh;
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
  .top {
    ul {
      background-color: green;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border-radius: 5px;
      li {
        img {
          height: 50px;
        }
        p {
          color: white;
        }
        height: 100px;
      }
    }
  }
  .middle {
    border-radius: 8px;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    h3 {
      padding: 10px 5px;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      li {
        height: 100px;
        width: 33.33%;
        border: 1px solid #f2f2f2;
        box-sizing: border-box;
        p {
          text-align: center;
        }
      }
    }
  }
  .bottom {
    border-radius: 8px;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    h3 {
      padding: 10px 5px;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      li {
        height: 100px;
        width: 33.33%;
        border: 1px solid gray;
        box-sizing: border-box;
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>

