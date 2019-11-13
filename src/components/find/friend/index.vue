<template>
  <div>
    <div class="friend">
      <ul class="friend-message-content">
        <li class="friend-message"
            v-for="(item,index) in findFriendData"
            :key="index">
          <img class="photo"
               src="img/p1.e9d98afd.svg" />
          <div class="message-content">
            <p class="friend-name">{{item.name}}</p>
            <p class="friend-content">{{item.content}}</p>
            <img v-for="(image,index) in item.img"
                 :key="index"
                 :src="image"
                 alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {

  },
  data () {
    return {

    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_find_friend_modules', ['findFriendHeader', 'findFriendData'])
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: "HEADER_CONFIG"
    }),
    init () {
      this.setShowOrHideHeader(true)
      this.setShowOrHideFooter(false)
      this.setHeaderConfig(this.findFriendHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
.friend {
  position: absolute;
  top: 80px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
  .friend-message-content {
    padding: 0 10px;
    .friend-message {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      .photo {
        width: 30px;
        padding-right: 10px;
      }
      .message-content {
        padding: 0 10px;
        .friend-name {
          font-weight: bold;
          font-size: 14px;
        }
        img {
          width: 33.65%;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>

