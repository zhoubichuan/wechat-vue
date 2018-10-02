<template>
   <section class="main">
     <header class="top">
        <span class="cancle" @click="parent" >取消</span>
        <h1 class="title">发红包</h1>
        <span class="more">...</span>
    </header>
    <div>{{tips}}</div>
    <ul class="message">
     <Money :m="money" @update:m="val=>money=val"></Money>
     <People :p="people" @update:p="val=>people=val"></People>
     <li class="tips"><input type="text" placeholder="恭喜发财，大吉大利" value="" /></li>
    </ul>
    <div class="submit">
     <p>￥{{money || "0"}}.00</p>
     <a href="#" @click="getPage">塞钱进红包</a>
    </div>
   </section>
</template>

<script type="text/javascript">
import Money from "@/components/red-bag/Money";
import People from "@/components/red-bag/People";
import Bus from "@/common/Bus.js";
import Router from "vue-router";
export default {
  data() {
    return {
      money: "0",
      people: "0"
    };
  },
  computed: {
    tips() {
      return this.money > 20000 ? "单次支付总额不可超过20000元" : "";
    }
  },
  components: {
    Money,
    People
  },
  methods: {
    getPage(e) {
      if (this.money && this.people) {
        var avg = +this.money / +this.people;
        var bag = [];
        for (let i = 0; i < +this.people; i++) {
          bag.push({
            name: "123",
            money: avg
          });
        }
        Bus.$emit("redBagDate", bag);
        this.parent();
      }
    },
    parent() {
      this.$emit("update:r", false);
      this.$emit("update:s", false);
    }
  }
};
</script>

<style type="text/css" scoped>
#app {
  background-color: rgb(245, 242, 237);
}
.top {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
}
.top .cancel {
}
.top .title {
  font-size: 18px;
}
.top .more {
}
.main {
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1000;
  background-color: #f5f2ed;
  overflow: hidden;
  padding: 0 15px;
  box-sizing: border-box;
}
.main .message {
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