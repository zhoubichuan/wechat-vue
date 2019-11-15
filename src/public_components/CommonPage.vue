<template>
  <div id="CommonPage"
       :class="['common-page',op.class]">
    <div class="common-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    op: {
      type: Object,
      default: function () {
        return {
          class: "page"
        };
      }
    }
  }
};
</script>
<style lang="less" scoped>
.common-page {
  position: relative;
  background-color: #f2f2f2;
  .common-content {
    min-height: calc(100vh - 80px);
    margin-bottom: 40px;
  }
}
</style>

