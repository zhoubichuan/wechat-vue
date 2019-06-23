<template>
  <div class="device">
    <img :src="require('./logo.png')" alt>
    <p>微信已登录</p>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.device {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  p {
    padding-left: 10px;
  }
}
</style>
