<template>
  <div class="privacy">
      <ul>
          <li v-for="(item,index) in accountSafe" :key="index">
              <span>{{item.name}}</span>
              <span :class="item.onoff"></span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountSafe: [
        { name: "加我为朋友时需要验证", onoff: "open" },
        { name: "添加我的方式", onoff: "open" },
        { name: "向我推荐通讯录朋友", onoff: "open" },
        { name: "通讯录黑名单", onoff: "open" },
        { name: "不让他（她）看", onoff: "open" },
        { name: "不看他（她）", onoff: "open" },
        { name: "允许朋友查看朋友圈的范围", onoff: "open" },
        { name: "允许陌生人查看十条朋友圈", onoff: "open" },
        { name: "朋友圈更新提醒", onoff: "open" },
        { name: "授权管理", onoff: "open" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.privacy {
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 10000;
  ul {
    li {
      background-color: white;
      border-bottom: 1px solid #f2f2f2;
      height: 40px;
      line-height: 40px;
      &:nth-of-type(1) {
        margin-bottom: 8px;
      }
      &:nth-of-type(4) {
        margin-bottom: 8px;
      }
      &:nth-of-type(6) {
        margin-bottom: 8px;
      }
      &:nth-of-type(7) {
        margin-bottom: 8px;
      }
      &:nth-of-type(8) {
        margin-bottom: 8px;
        a {
          justify-content: center;
        }
      }
      &:nth-of-type(9) {
        a {
          justify-content: center;
        }
      }
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 10px;
      align-items: center;
      span {
        &:nth-of-type(1) {
          text-align: left;
        }
        &:nth-of-type(2) {
          position: relative;
          width: 50px;
          background: gray;
          height: 25px;
          border-radius: 25px;
          &::before {
            content: "";
            height: 23px;
            width: 23px;
            background: gray;
            position: absolute;
            right: 1px;
            top: 1px;
            border-radius: 50%;
          }
        }
      }
      .open {
        background: green !important;
      }
    }
  }
}
</style>
