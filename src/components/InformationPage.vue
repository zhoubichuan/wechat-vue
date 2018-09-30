<template>
	<div class="get">
   <div>
    <ul class="information" >
     <li v-for="(val,index) in information" :key="index">
        <img class="photo" :src="val.pho"/>
        <div class="content">
          <p class="name">{{val.name}}</p>
          <p v-show="!val.redBag">{{val.message}}</p>
          <div v-show="val.redBag" class="red-bag" @click="openRedBag">
            <div class="bag">
            <span class="ico"></span>
            <div class="text">
              <p>恭喜发财，大吉大利</p>
              <p>领取红包</p>
            </div>
            </div>
            <p class="instruction">微信红包</p>
          </div>
        </div>
      </li>
    </ul>
    <PopFloor @bridgeShowPop="functionShowPop" :showPopBridge="showPop" :bagBridge="bag"></PopFloor>
   </div>
  </div>
</template>

<script type="text/javascript">
import PopFloor from "@/components/get-page/PopFloor";
export default {
  name: "GetPage",
  data() {
    return {
      information: [
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "王大锤",
          message: "嘿嘿我来了",
          redBag: ""
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "王大锤",
          message: "嘿嘿我来了",
          redBag: ""
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "王大锤",
          message: "嘿嘿我来了",
          redBag: ""
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "王大锤",
          message: "嘿嘿我来了",
          redBag: "20"
        }
      ],
      bag: this.$router.bag,
      showPop: false
    };
  },
  components: {
    PopFloor
  },
  methods: {
    openRedBag() {
      this.showPop = true;
    },
    functionShowPop(val) {
      this.showPop = val;
    }
  }
};
</script>

<style type="text/css">
.get {
  background-color: aliceblue;
  height: 100vh;
}
.header {
  padding: 0 15px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header span,
.header h1 {
  padding: 10px 0;
}
.information {
  width: calc(100% - 30px);
  margin: 0 auto;
}
.information li {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.information li:nth-child(n + 2) {
  margin-top: 10px;
}
.information li .photo {
  height: 30px;
  width: 30px;
  background-color: blue;
  display: block;
}
.information li .content {
}
.information li .content .name {
  display: inline;
  font-size: 12px;
  color: gray;
}
.content {
  margin-left: 10px;
}
.red-bag {
  width: 200px;
}
.red-bag .instruction {
  display: inline;
}
.red-bag .bag {
  background-color: yellow;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-top: 10px;
  padding-bottom: 10px;
}

.red-bag .bag .ico {
  height: 35px;
  width: 30px;
  background-color: red;
  display: block;
  margin: 0 10px 0 10px;
  border-radius: 5px;
}
.red-bag .bag .text {
  display: inline;
}

/* 弹出层 */
.pop-floor {
  display: none;
}
.pop-floor.show {
  display: block;
}
.pop-floor .mask {
  height: 100vh;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  position: absolute;
  top: 0;
}
.pop-floor .get-bag {
  width: 80%;
  background-color: red;
  z-index: 100;
  position: absolute;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.pop-floor .get-bag .delete {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 20px;
}
.pop-floor .get-bag .person-information {
  margin: 0 auto;
  text-align: center;
}
.pop-floor .get-bag .person-information .photo {
  height: 30px;
  width: 30px;
  background-color: blue;
  display: block;
  margin: 0 auto;
}
.pop-floor .get-bag .detail-information {
  width: calc(100% - 30px);
  margin: 0 auto;
}
.pop-floor .get-bag .detail-information ul {
  margin-top: 10px;
  max-height: 95px;
  overflow-y: scroll;
}
.pop-floor .get-bag .detail-information ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pop-floor .get-bag .detail-information .tips {
  margin: 20px 0;
}
</style>