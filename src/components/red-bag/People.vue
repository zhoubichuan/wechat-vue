<template>
	<li class="people">
      <div class="sum">
       <span>红包个数</span>
       <input maxlength="3" type="tel" placeholder="填写个数" v-model="redBagNumber"/>
       <span>个</span>
      </div>
      <div class="tips">
       <span>{{totalPeopleAmount}}</span>
      </div>
    </li>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      peopleNum: "8"
    };
  },
  methods: {},
  computed: {
    redBagNumber: {
      get() {
        return this.$store.state.redBagNumber;
      },
      set(val) {
        this.$store.state.redBagNumber = val;
      }
    },
    totalPeopleAmount() {
      return "本群共8人";
    }
  }
};
</script>

<style>
.people {
  margin-top: 20px;
}
.people .sum {
  height: 40px;
  line-height: 40px;
  background-color: white;
  border-radius: 5px;
}
.people .sum input {
  border: none;
  width: calc(100% - 70px);
  text-align: right;
}
</style>
