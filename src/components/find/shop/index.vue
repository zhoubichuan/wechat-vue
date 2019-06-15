<template>
  <CommonPopPage :op="opPage">
    <div class="album">
      <ul>
        <li v-for="(item,index) in album" :key="index">
          <h3>{{item.time}}</h3>
          <div>
            <img v-for="(_item,_index) in item.img" :key="_index" :src="_item" alt>
          </div>
        </li>
      </ul>
    </div>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";
export default {
  data() {
    return {
      album: [
        { time: "1月", img: ["", "", ""] },
        { time: "2月", img: ["", "", ""] },
        { time: "3月", img: ["", "", ""] },
        { time: "4月", img: ["", "", ""] },
        { time: "5月", img: ["", "", ""] },
        { time: "6月", img: ["", "", ""] },
        { time: "7月", img: ["", "", ""] }
      ],
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: "京东购物"
        }
      }
    };
  },
  components: {
    CommonPopPage
  }
};
</script>
<style lang='less' scoped>
.album {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

