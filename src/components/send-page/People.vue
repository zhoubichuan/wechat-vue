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
  props: ["p"],
  data() {
    return {
      people: this.$props.p,
      peopleNum: "8"
    };
  },
  methods: {
    functionPeople() {
      this.$emit("update:p", this.people);
    }
  },
  // watch: {
  //   people(val) {
  //     if (Number(this.people) <= Number(this.peopleNum)) {
  //       this.people = val;
  //     } else {
  //       alert("超过限定人数");
  //     }
  //   }
  // },
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