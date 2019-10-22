<template>
  <div class="account-safe">
      <ul>
          <li v-for="(item,index) in accountSafe" :key="index">
              <span>{{item.name}}</span>
              <span v-if="item.text">{{item.text}}</span>
              <span v-if="item.ico">{{item.ico}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountSafe: [
        { name: "多语言", text: "", ico: ">" },
        { name: "字体大小", text: "", ico: ">" },
        { name: "聊天背景", text: "", ico: ">" },
        { name: "我的表情", text: "", ico: ">" },
        { name: "照片、视频和文件", text: "", ico: ">" },
        { name: "听筒模式", text: "", ico: ">" },
        { name: "发现页管理", text: "", ico: ">" },
        { name: "辅助功能", text: "", ico: ">" },
        { name: "聊天记录备份与迁移", text: "", ico: ">" },
        { name: "存储空间", text: "", ico: ">" },
        { name: "清空聊天记录", text: "", ico: "" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.account-safe {
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
      &:nth-of-type(11) {
        justify-content: center;
      }
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 10px;
      span {
        &:nth-of-type(1) {
          text-align: left;
        }
        &:nth-of-type(2) {
          text-align: right;
          font-size: 20px;
          color: gray;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
