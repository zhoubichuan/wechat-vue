<template>
  <div class="top">
    <ul>
      <li class="no-people" v-for="(item,index) in data " :key="index">
        <router-link :to="'/address/people:'+item.title">{{item.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { title: "A" },
        { title: "曹操", img: "" },
        { title: "孙权", img: "" },
        { title: "周瑜", img: "" },
        { title: "黄盖", img: "" },
        { title: "B" },
        { title: "刘备", img: "" },
        { title: "诸葛亮", img: "" },
        { title: "张飞", img: "" },
        { title: "D" },
        { title: "关羽", img: "" },
        { title: "魏延", img: "" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.top {
  ul {
    li {
      padding: 10px 15px;
      background-color: #ffffff;
      border-bottom: 1px solid #f2f2f2;
      a {
        display: block;
        img {
          width: 30px;
          height: 30px;
          display: inline-block;
        }
        p {
          display: inline-block;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>

