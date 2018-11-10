<template>
  <li class="money">
    <div class="sum">
      <i>{{redBagTypeIco}}</i>
      <span>总金额</span>
      <input maxlength="7" type="tel" placeholder="0.00" v-model="redBagAmount" />
      <span>元</span>
    </div>
    <div class="tips">
      <span>{{redBagTypeTips}}</span>
      <a @click="redBagType">{{redBagTypeSelect}}</a>
    </div>
  </li>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  },
  methods: {
    redBagType() {
      let type = this.$store.state.redBagType;
      if (type == "commonRedBag") {
        type = "lunckyRedBag";
      } else {
        type = "commonRedBag";
      }
    }
  },
  computed: {
    redBagAmount: {
      get() {
        return this.$store.state.redBagAmount;
      },
      set(val) {
        this.$store.state.redBagAmount = val;
      }
    },
    redBagTypeSelect() {
      let type = this.$store.state.redBagType;
      let _type = null;
      if (type == "commonRedBag") {
        _type = "改为普通红包";
      } else {
        _type = "改为拼手气红包";
      }
      return _type;
    },
    redBagTypeIco() {
      let type = this.$store.state.redBagType;
      let _type = null;
      if (type == "commonRedBag") {
        _type = "普";
      } else {
        _type = "拼";
      }
      return _type;
    },
    redBagTypeTips() {
      let type = this.$store.state.redBagType;
      let _type = null;
      if (type == "commonRedBag") {
        _type = "当前为普通红包";
      } else {
        _type = "当前为拼手气红包";
      }
      return _type;
    }
  }
};
</script>

<style>
.money {
  background-color: rgb(245, 242, 237);
}
.money .sum {
  height: 40px;
  line-height: 40px;
  background-color: white;
  border-radius: 5px;
}
.money .sum i {
  width: 20px;
  height: 20px;
  background-color: #c7c768;
  color: white;
}
.money .sum input {
  border: none;
  width: calc(100% - 75px);
  text-align: right;
}
.money .tips {
  margin-top: 5px;
}
.money .tips a {
  color: blue;
}
</style>
