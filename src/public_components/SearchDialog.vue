<template>
  <div class="search-dialog"
       id="searchDialog">
    <div class="search">
      <input type="text"
             :placeholder="op.text"
             @click="$emit('click')">
      <span class="cancle"
            @click="$listeners.closeSearchDialog">取消</span>
    </div>
    <div class="search-content">
      <p class="title">指定搜索内容</p>
      <ul class="item">
        <li v-for="(item,index) in searchData"
            :key="index"><a :href="item.link">{{item.text}}</a>
        </li>
      </ul>
    </div>
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
    const searchData = [{ text: '朋友圈', link: '#' }, { text: '文章', link: '#' }, { text: '公众号', link: '#' }, { text: '小程序', link: '#' }, { text: '音乐', link: '#' }, { text: '表情', link: '#' }]
    return { searchData };
  },
  mounted () { },
  components: {}
};
</script>
<style lang="less" scoped>
.search-dialog {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  background: #efeff4;
  padding: 10px 5px;
  box-sizing: border-box;
  input {
    width: calc(100% - 40px);
    height: 28px;
    border-radius: 5px;
    outline: none;
    border: none;
    text-align: center;
  }
  .cancle {
    color: #1c1c56;
    margin-left: 10px;
  }
  .search-content {
    padding: 0 50px;
    .title {
      text-align: center;
      margin-top: 40px;
    }
    .item {
      li {
        width: 33%;
        float: left;
        margin-top: 20px;
        text-align: center;
        color: #1c1c56;
      }
    }
  }
}
</style>

