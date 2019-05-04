<template>
  <div class="pop" v-show="op.popshow">
      <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    op: {
      type: Object,
      default:function(){
          return ({
              popshow:true
          })
      }
    }
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.pop {
  display: flex;
  left: 0;
  top: 0;
  height: 100vh;
  background: gray;
}
</style>


