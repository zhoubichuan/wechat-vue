<template>
  <div class="header-component">
    <div class="header">
      <div @click="$listeners.handleLeft()">
        <p v-if="header.left&&header.left.text"
            class="more" >{{(header.left&&header.left.text)||''}}</p>
        <img v-if="header.left" :src="require(`@/assets/image/header/back.svg`)"
             class="back">
        
      </div>
      <p class="title">{{header.middle}}</p>
      <div>
        <img v-if="header.right&&header.right.ico"
           class="image"
           :src="require(`@/assets/image/header/${header.right.ico}.svg`)"
           alt>
        <button v-if="header.right&&header.right.type&&header.right.type === 'button'"
          :disabled='header.right.disabled'
          class="more"
          @click="$listeners.handleRight()">{{(header.right&&header.right.text)||''}}</button>
        <p v-else
            class="more"
            @click="$listeners.handleRight()">{{(header.right&&header.right.text)||''}}</p>
      </div>
    </div>
    <PopFloor v-if="header.popFloor"
              v-show="popFloor" />
  </div>
</template>
<script>
import PopFloor from "./PopFloor";
import { mapState } from 'vuex'
export default {
  name: "Header",
  components: {
    PopFloor
  },
  data () {
    return {
      popFloor: false
    };
  },
  computed: {
    ...mapState(['header'])
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
    .title {
      min-height: 40px;
    }
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
