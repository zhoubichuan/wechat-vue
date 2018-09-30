<template>
   <section class="main">
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
import Money from "@/components/RedBag/Money";
import People from "@/components/RedBag/People";
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
        this.$router.bag = bag;
        location.href = "#/get";
      }
    }
  }
};
</script>

<style type="text/css">
#app {
  height: 100vh;
  width: calc(100% - 30px);
  padding: 0 15px;
  background-color: rgb(245, 242, 237);
}
.header {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
}
.header .cancel {
}
.header .title {
  font-size: 18px;
}
.header .more {
}
.main {
  height: calc(100vh - 90px);
}
.main .message {
}
.main .message .money {
  background-color: rgb(245, 242, 237);
}
.main .message .money .sum {
  height: 40px;
  line-height: 40px;
  background-color: white;
  border-radius: 5px;
}
.main .message .money .sum i {
  width: 20px;
  height: 20px;
  background-color: #c7c768;
  color: white;
}
.main .message .money .sum input {
  border: none;
  width: calc(100% - 75px);
  text-align: right;
}
.main .message .money .tips {
  margin-top: 5px;
}
.main .message .money .tips a {
  color: blue;
}
.main .message .people {
  margin-top: 20px;
}
.main .message .people .sum {
  height: 40px;
  line-height: 40px;
  background-color: white;
  border-radius: 5px;
}
.main .message .people .sum input {
  border: none;
  width: calc(100% - 70px);
  text-align: right;
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

.footer {
  height: 30px;
  text-align: center;
  color: gray;
}
</style>