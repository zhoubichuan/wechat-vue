<template>
  <ul class="content">
    <li v-for="(item,index) in op.data" :key="index">
      <router-link :to="'/find/'+item.route">
        <img :src="require(`@/assets/image/find/${item.img||'shop'}.png`)" alt>
        <p>{{item.title}}</p>
        <img src alt>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    op: Object
  }
};
</script>
<style lang="less" scoped>
.content {
  margin-top: 40px;
  li {
    padding: 10px 10px;
    background-color: #ffffff;
    img {
      width: 20px;
      height: 20px;
      display: inline-block;
    }
    p {
      display: inline-block;
      margin-left: 20px;
    }
  }
}
</style>


