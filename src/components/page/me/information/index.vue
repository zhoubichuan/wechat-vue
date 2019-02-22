<template>
  <div class="information">
      <ul>
          <li v-for="(item,index) in data" :key="index">
              <p class="title">{{item.title}}</p>
              <img src="" alt="">
          </li>
      </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { title: "头像", image: "" },
        { title: "名字", image: "" },
        { title: "微信号", image: "" },
        { title: "我的二维码", image: "" },
        { title: "更多", image: "" },
        { title: "我的地址", image: "" }
      ]
    };
  }
};
</script>
<style lang='less'>
.information {
  height: 100vh;
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
  ul {
    li {
      padding: 0 15px;
      background-color: white;
      border-bottom: 1px solid #f2f2f2;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      &:nth-of-type(5) {
        border-bottom: none;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

