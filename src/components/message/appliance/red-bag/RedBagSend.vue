<template>
  <section class="main">
    <slot name="redBag">
      <div class="input-tips">{{redBagNumberTips.length ? redBagNumberTips : redBagAmountTips}}</div>
      <ul class="message">
        <Money/>
        <People/>
        <li class="tips">
          <input maxlength="100" type="text" placeholder="恭喜发财，大吉大利" v-model="tips">
        </li>
      </ul>
      <div class="submit">
        <p>{{showRedBagAmount}}</p>
        <a href="#" @click="sendRedBag">塞钱进红包</a>
      </div>
    </slot>
  </section>
</template>

<script type="text/javascript">
import Money from "./Money";
import People from "./People";
import Bus from "@/common/Bus.js";
export default {
  data() {
    return {
      tips: ""
    };
  },
  computed: {
    redBagAmountTips() {
      return this.$store.state.redBagAmount > 20000
        ? "单次支付总额不可超过20000元"
        : "";
    },
    redBagNumberTips() {
      return this.$store.state.redBagNumber > 100 ? "一次最多发100个红包" : "";
    },
    showRedBagAmount() {
      return (
        "￥" +
        (this.$store.state.redBagAmount
          ? this.$store.state.redBagAmount
          : "0") +
        ".00 "
      );
    }
  },
  components: {
    Money,
    People
  },
  methods: {
    sendRedBag() {
      let amount = this.$store.state.redBagAmount;
      let number = this.$store.state.redBagNumber;
      if (this.$store.state.redBagTyep == "commonRedBag") {
        if (amount && number) {
          var avg = +amount / +number;
          var redBag = [];
          for (let i = 0; i < +number; i++) {
            redBag.push({
              name: "123",
              money: avg,
              rest: ""
            });
          }
          let bag = {
            self: true,
            total: amount,
            sendTime: new Date().getTime(),
            redBag,
            tips: this.tips.length ? this.tips : "恭喜发财，大吉大利",
            type: this.$store.state.redBagType
          };
          Bus.$emit("redBagDate", bag);
          this.cancelSendRedBag();
        }
      } else {
        if (amount && number) {
          var avg2 = +amount / +number;
          redBag = [];
          for (let i = 0; i < +number; i++) {
            redBag.push({
              name: "123",
              money: avg2,
              rest: ""
            });
          }
          let bag = {
            self: true,
            total: amount,
            sendTime: new Date().getTime(),
            redBag,
            tips: this.tips.length ? this.tips : "恭喜发财，大吉大利",
            type: this.$store.state.redBagType
          };
          Bus.$emit("redBagDate", bag);
          this.cancelSendRedBag();
        }
      }
    },
    cancelSendRedBag() {
      this.$store.state.pageShow = false;
      this.$store.state.redBagAmount = "";
      this.$store.state.redBagNumber = "";
      this.$store.state.sendMessage = "";
      this.$store.state.applianceShow = false;
      this.$store.state.pageStopScroll = false;
    }
  }
};
</script>

<style type="text/css" scoped lang="less">
#app {
  background-color: rgb(245, 242, 237);
}

.main {
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 10001;
  background-color: #f5f2ed;
  overflow: hidden;
  padding: 0 15px;
  box-sizing: border-box;
  position: fixed;
}
.main .input-tips {
  background-color: palegoldenrod;
  text-align: center;
  font-size: 12px;
  color: orangered;
  line-height: 24px;
  position: absolute;
  width: 100%;
  left: 0;
}
.main .message {
  margin-top: 20px;
}

.main .message li.tips {
  height: 40px;
  background-color: white;
  border-radius: 5px;
  margin-top: 20px;
}
.main .message li.tips input {
  width: 100%;
  height: 100%;
  border: none;
}

.main .submit {
  height: 60px;
}
.main .submit p {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}
.main .submit a {
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  width: 200px;
  background-color: red;
  color: white;
}
</style>