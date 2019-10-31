<template>
  <div class="footer-component">
    <ul class="footer">
      <li v-for="(item,index) in value" :key="index">
        <router-link :to="{name:item.link}">
          <img :src="require(`@/assets/image/footer/${item.image}.svg`)" alt>
          <span>{{item.text}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      value: [
        { image: "message", text: "微信", link: "message" },
        { image: "book-address", text: "通讯录", link: "address" },
        { image: "discover", text: "发现", link: "find" },
        { image: "myself", text: "我", link: "me" }
      ]
    };
  },
  methods:{
    ...mapMutations({
      changeHeaderData:'change_header_data'
    })
  }
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  height: 40px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  background-color: #f5f5f5;
  z-index: 1000;
  li {
    width: 25%;
    text-align: center;
    height: 40px;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 20px;
        display: block;
      }
    }
    .router-link-exact-active {
      img {
        color: green;
      }
      span {
        color: rgba(31, 173, 21, 1);
      }
    }
  }
}
</style>
