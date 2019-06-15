<template>
  <div class="header-component" :style="op.style">
    <div class="header">
      <div @click="$listeners.handleLeft()">
        <p class="cancel">{{op.left}}</p>
      </div>
      <p class="title">{{op.middle}}</p>
      <img
        v-if="op.right&&op.right.ico"
        class="image"
        :src="require(`@/assets/image/header/${op.right.ico}.svg`)"
        alt
      >
      <p v-else class="more" @click="$listeners.handleRight()">{{(op.right&&op.right.text)||''}}</p>
    </div>
    <PopFloor v-if="op.popFloor" v-show="popFloor"/>
  </div>
</template>
<script>
import PopFloor from "./PopFloor";
export default {
  name: "Header",
  props: {
    op: {
      type: Object,
      default: function() {
        return {
          style: "color:black ;background-color: white;",
          left: "",
          middle: "微信(18)",
          right: {
            ico: "more"
          }
        };
      }
    }
  },
  data() {
    return {
      popFloor: false
    };
  },
  components: {
    PopFloor
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.header-component {
  margin-top: 40px;
  .header {
    background: #efeff4;
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    top: 0;
    z-index: 5000;
    .image {
      width: 20px;
    }
  }
  &::before {
    content: "";
    height: 40px;
  }
}
</style>
