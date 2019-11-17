<template>
  <div class="search"
       id="search">
    <input type="text"
           :placeholder="op.text"
           @click="$listeners.handleSearch()">
  </div>
</template>
<script>
export default {
  props: {
    op: {
      type: Object,
      default: function () {
        return {
          text: "搜索"
        };
      }
    }
  },
  data () {
    return {};
  },
  mounted () { },
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

