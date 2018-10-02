<template>
	<li class="people">
      <div class="sum">
       <span>红包个数</span>
       <input type="tel" placeholder="填写个数" @change="functionPeople" v-model="people"/>
       <span>个</span>
      </div>
      <div>{{tips}}</div>
      <div class="tips">
       <span>本群共{{peopleNum}}人</span>
      </div>
    </li>
</template>

<script type="text/javascript">
export default {
  //父传子
  props: ["p"],
  data() {
    return {
      people: "",
      peopleNum: "8"
    };
  },
  methods: {
    functionPeople() {
      this.$emit("update:p", this.people);
    }
  },
  computed: {
    tips() {
      if (Number(this.people) <= Number(this.peopleNum)) {
        return "";
      } else {
        return "超过限定人数";
      }
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
