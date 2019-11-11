<template>
  <div class="img-card">
    <img :src="op.img" alt>
  </div>
</template>
<script>
export default {
  props: {
    op: {
      type: Object
    }
  }
};
</script>
<style lang="less" scoped>
.img-card {
  padding-top: 30%;
  img {
    width: 100%;
  }
}
</style>


