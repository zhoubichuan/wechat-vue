<template>
	<div id="modal" v-show="show">
     <div class="mask" @click="close"></div>
     <div class="get-bag">
      <span class="delete" @click="close">x</span>
      <div>
       <header class="person-information">
        <img class="photo" :src="message.pho"/>
        <p>{{message.name}}</p>
        <p>给你发一个红包</p>
       </header>
       <section class="detail-information">
        <slot >
          <ul>
            <li v-for="(item,index) in bagBridge" :key="index">
              <span>姓名：{{item.name}}</span>
              <span>抢得红包：{{item.money}}元</span>
              <span>0</span>
            </li>
          </ul>
        </slot>
        <slot>
          <p name="tips" class="tips">该红包已超过24小时。如已领取，可在“我的红包”中查看</p>
        </slot>
       </section>
      </div>
     </div>
    </div>
</template>

<script type="text/javascript">
export default {
  props: ["show", "message"],
  data() {
    return {
      bagBridge: [
        { name: "小王", money: "10" },
        { name: "小王", money: "10" },
        { name: "小王", money: "10" }
      ]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>