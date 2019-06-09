<template>
  <div class="header-component" :style="op.style">
    <div class="header">
      <div @click="$listeners.handleLeft()">
        <p class="cancel">{{op.left}}</p>
      </div>
      <p class="title">{{op.middle}}</p>
      <p class="more" @click="$listeners.handleRight()">{{op.right}}</p>
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
          right: "+"
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
  }
  &::before {
    content: "";
    height: 40px;
  }
}
</style>
