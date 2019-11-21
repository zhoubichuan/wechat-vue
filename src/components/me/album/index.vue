<template>
  <div>
    <div class="album">
      <ul class="album-content">
        <li class="item"
            v-for="(item,index) in weChatMomentAlbum"
            :key="index">
          <h3 class="text">{{item.time}}</h3>
          <div class="image-box">
            <div class="image"
                 v-for="(_item,_index) in item.img"
                 :key="_index">
              <img :src="require(`@/assets/image/me/${_item.img}.png`)"
                   alt>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      weChatMomentAlbum: ''
    };
  },
  computed: {
    ...mapState('store_me_album_modules', ['meAlbumHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    ...mapActions('store_me_album_modules', {
      getWeChatMomentAlbum: 'get_weChatMomentAlbum',
    }),
    init () {
      let initPageConfig = {
        header: this.meAlbumHeader,
      }
      this.setInitPageConfig(initPageConfig)
      this.getWeChatMomentAlbum({ axios: this.axios }).then(res => {
        this.weChatMomentAlbum = res.data
      })
    }
  },
  created () {
    this.init()
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
  .album-content {
    padding: 0 20px;
    .item {
      display: inline-block;
      .text {
        float: left;
      }
      .image-box {
        float: right;
        width: calc(100% - 40px);
        .image {
          width: calc(33% - 10px);
          float: left;
          padding: 0 5px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

