<template>
	<div :class="showPopBridge?'pop-floor show' :'pop-floor' ">
     <div class="mask" @click="hideRedPop"></div>
     <div class="get-bag">
      <span class="delete" @click="hideRedPop">x</span>
      <div>
       <header class="person-information">
        <span class="photo"></span>
        <p>喂！我闪走了啊</p>
        <p>给你发一个红包</p>
       </header>
       <section class="detail-information">
        <ul >
         <li v-for="(item,index) in bagBridge" :key="index">
         <span>姓名{{item.name}}</span><span>抢得红包{{item.money}}元</span><span>0</span></li>
        </ul>
        <p class="tips">该红包已超过24小时。如已领取，可在“我的红包”中查看</p>
       </section>
      </div>
     </div>
    </div>
</template>

<script type="text/javascript">
export default {
  name: "PopFloor",
  props: {
    bagBridge: Array,
    required: true,
    showPopBridge: Boolean,
    required: true
  },
  methods: {
    hideRedPop() {
      this.$props.showPopBridge = false;
      this.$emit("bridgeShowPop", this.$props.showPopBridge);
    }
  }
};
</script>