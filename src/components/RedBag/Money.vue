<template>
      <li class="money">
            <div class="sum">
             <i>{{isLuckyBag ? "拼" : "普"}}</i>
             <span>总金额</span>
             <input type="tel" placeholder="0.00"  @change="toFather" v-model="money"/>
             <span>元</span>
            </div>
            <div class="tips">
             <span>{{isLuckyBag ? "当前为拼手气红包," : "当前为普通红包,"}}</span>
             <a @click="bagType">{{isLuckyBag ? "改为普通红包" : "改为拼手气红包"}}</a>
            </div>
      </li>
</template>

<script type="text/javascript">
export default {
  //父传子
  props: ["m"],
  data() {
    return {
      money: "",
      isLuckyBag: true
    };
  },
  //放一些方法
  methods: {
    /* 子级数据传给父级
    这里相当于一个发布订阅模式，这里发布这个事件，触发父级上的订阅的方法
     */
    toFather() {
      this.$emit("update:m", this.money);
    },
    bagType() {
      this.isLuckyBag = !this.isLuckyBag;
    }
  },
  //监听数据变化
  watch: {
    dataMoney(val) {
      if (0 <= Number(this.dataMoney) && Number(this.dataMoney) <= 100000) {
        this.dataMoney = val;
      } else {
        alert("错误");
      }
    }
  }
};
</script>