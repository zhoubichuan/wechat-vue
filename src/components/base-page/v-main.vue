<template>
  <div class="main">
    <router-view @update:s="val=>stopScroll=val"/>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  conponent: {
    
  }
};
</script>

<style lang="less">
.main {
  height: 100vh;
  padding: 40px 10px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #cccccc;
}
</style>
