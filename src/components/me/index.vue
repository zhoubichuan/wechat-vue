<template>
  <div class="me">
    <div class="me-application">
      <ul>
        <li v-for="(item, index) in application" :key="index">
          <router-link v-if="item.content" class="me-information" :to="item.link">
            <div class="left">
              <img :src="require(`@/assets/image/me/${item.ico}.png`)" alt>
              <div>
                <p>{{ item.title }}</p>
                <p>{{ item.content }}</p>
              </div>
            </div>
            <div class="right">
              <img src alt>
              <img src alt>
            </div>
          </router-link>
          <router-link v-else :to="item.link">
            <img :src="require(`@/assets/image/me/${item.ico}.png`)" alt>
            <p>{{ item.title }}</p>
            <p class="row">></p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_me_modules', ['application', 'meHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init() {
      let initPageConfig = {
        header: this.meHeader,
        isShowFooter: true,
      }
      this.setInitPageConfig(initPageConfig)
    }
  },
  created() {
    this.init()
  }
};
</script>

<style lang="less" scoped>
.me {
  background-color: #efeff4;
  overflow-y: auto;

  ul {
    margin-top: 15px;

    li {
      &:first-child {
        border: none;
        margin-bottom: 15px;
      }

      padding: 10px 15px;
      background-color: #ffffff;
      border-bottom: 1px solid #f2f2f2;

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;

        img {
          width: 20px;
          height: 20px;
        }

        p {
          margin-left: 10px;
        }

        .row {
          position: absolute;
          right: 0;
        }
      }
    }
  }

  &:nth-last-child(2) {
    border: none;
  }

  &:last-child {
    border: none;
  }

  .me-information {
    background-color: #ffffff;
    padding: 5px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;

    .left {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      img {
        width: 40px;
        height: 40px;
      }

      div {
        margin-left: 20px;
      }
    }

    .rigth {}
  }
}
</style>
