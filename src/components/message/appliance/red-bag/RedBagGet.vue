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
            <slot name="r-money">
              <p class="r-money">该红包已超过24小时。如已领取，可在“我的红包”中查看</p>
            </slot>
            <slot>
              <p name="tips" class="r-tips" @click="detail=true">查看领取详情></p>
            </slot>
          </section>
          </div>
        </div>
      </div>
     <RedBagRecord class="detail" v-if="detail" @update:s="detail=false"/>
    </div>
</template>

<script type="text/javascript">
import Bus from "@/common/Bus.js";
import RedBagRecord from "./RedBagRecord";
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
    RedBagRecord
  },
  methods: {
    close() {
      this.$emit("close");
      this.$store.state.pageStopScroll = false;
    }
  }
};
</script>
<style lang="less" scoped>
/* 弹出层 */
#modal {
  .mask {
    height: 100vh;
    width: 100%;
    background-color: black;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .get-bag {
    width: 80%;
    background-color: #d8593f;
    z-index: 1001;
    position: absolute;
    border-radius: 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: calc(100vh - 180px);
    .delete {
      margin-left: 10px;
      margin-top: 10px;
      font-size: 20px;
    }
    .person-information {
      margin: 0 auto;
      text-align: center;
      .photo {
        height: 30px;
        width: 30px;
        background-color: blue;
        display: block;
        margin: 0 auto;
      }
    }
    .detail-information {
      width: calc(100% - 30px);
      margin: 0 auto;
      .r-money {
        text-align: center;
        font-size: 14px;
        padding: 20px 0;
        line-height: 20px;
      }
      .r-tips {
        text-align: center;
      }
    }
  }
}
</style>
