<template>
  <div class="header-component" :style="headerData.style">
    <div class="header">
      <div @click="$listeners.handleLeft()">
        <img :src="require(`@/assets/image/header/back.svg`)" class="back" v-if="headerData.left">
      </div>
      <p class="title">{{headerData.middle}}</p>
      <img
        v-if="headerData.right&&headerData.right.ico"
        class="image"
        :src="require(`@/assets/image/header/${headerData.right.ico}.svg`)"
        alt
      >
      <p v-else class="more" @click="$listeners.handleRight()">{{(headerData.right&&headerData.right.text)||''}}</p>
    </div>
    <PopFloor v-if="headerData.popFloor" v-show="popFloor"/>
  </div>
</template>
<script>
import PopFloor from "./PopFloor";
import {mapState} from 'vuex'
export default {
  name: "Header",
  components: {
    PopFloor
  },
  data() {
    return {
      popFloor: false
    };
  },
  computed:{
    ...mapState(['headerData'])
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.header-component {
  height: 40px;
  .header {
    background: #efeff4;
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    top: 0;
    z-index: 5000;
    .back {
      height: 10px;
    }
    .image {
      width: 20px;
    }
  }
  &::before {
    content: "";
    height: 40px;
  }
}
</style>
