<template>
  <ul class="list">
    <li v-for="(item,index) in op.data" :key="index" :class="item.active?'active':''">
      <router-link :to="'/find/'+item.route">
        <img :src="require(`@/assets/image/find/${item.img||'shop'}.png`)" alt>
        <p>{{item.title}}</p>
        <span>></span>
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
.list {
  margin-top: 40px;
  .active {
    margin-top: 5px;
  }
  li {
    padding: 10px 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #f2f2f2;
    img {
      width: 20px;
      height: 20px;
      display: inline-block;
    }
    p {
      display: inline-block;
      margin-left: 20px;
    }
    span {
      float: right;
      font-size: 16px;
      font-weight: bold;
      color: gray;
    }
  }
}
</style>


