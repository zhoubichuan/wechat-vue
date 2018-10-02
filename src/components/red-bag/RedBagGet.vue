<template>
	<div id="modal" v-show="show">
    <div v-show="!detail">
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
            <p>{{message.money}}元</p>
          </slot>
          <slot>
            <p name="tips" class="tips" @click="detail=true">查看领取详情></p>
          </slot>
        </section>
        </div>
      </div>
    </div>
     <RedBagDetail class="detail" v-show="detail" @update:s="detail=false"/>
    </div>
</template>

<script type="text/javascript">
import Bus from "@/common/Bus.js";
import RedBagDetail from "@/components/red-bag/RedBagDetail";
export default {
  props: ["show", "message"],
  data() {
    return {
      redBagDate: "",
      detail: false
    };
  },

  created() {
    Bus.$on("redBagDate", val => {
      this.redBagDate = val;
    });
  },
  components: {
    RedBagDetail
  },
  methods: {
    close() {
      this.$emit("close");
      Bus.$emit("scroll", false);
    }
  }
};
</script>