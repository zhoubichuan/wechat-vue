<template>
  <ul class="list">
    <li v-for="(item,index) in op.data"
        :key="index"
        :class="item.active?'active':''">
      <router-link :to="item.link || '#'">
        <img v-if="item.img"
             :src="require(`@/assets/image/find/${item.img||'shop'}.png`)"
             alt />
        <p class="text-content">
          <span class="text-name">{{item.title}}</span>
          <span class="text-tips">{{item.tips}}</span>
        </p>
        <img class="right"
             v-if="item.ico"
             :src="require(`@/assets/image/me/${item.ico}.png`)"
             alt>
        <span v-if="item.link"
              class="route-tips">></span>
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
  .active {
    margin-top: 5px;
  }
  li {
    padding: 10px 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #f2f2f2;
    position: relative;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 20px;
        display: inline-block;
        &.right {
          float: right;
          margin-right: 30px;
          width: 30px;
        }
      }
      .text-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text-name {
        }
        .text-tips {
        }
      }
      .route-tips {
        font-size: 16px;
        font-weight: bold;
        color: gray;
        position: absolute;
        right: 20px;
      }
    }
  }
}
</style>


