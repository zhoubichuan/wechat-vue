<template>
  <div>
    <div class="album">
      <ul>
        <li v-for="(item,index) in album"
            :key="index">
          <h3>{{item.time}}</h3>
          <div>
            <img v-for="(_item,_index) in item.img"
                 :key="_index"
                 :src="_item"
                 alt>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {

    };
  },
  components: {

  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_find_game_modules', ['findGameHeader', 'findGameData'])
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
      this.setHeaderConfig(this.findGameHeader)
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
}
</style>

