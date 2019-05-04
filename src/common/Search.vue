<template>
  <div class="search">
    <input type="text" placeholder="搜索" @click="$emit('click')">
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },
  components: {}
};
</script>
<style lang="less" scoped>
.search {
  padding: 10px 5px;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 28px;
    border-radius: 5px;
    outline: none;
    border: none;
    text-align: center;
  }
}
</style>

