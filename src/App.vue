<template>
  <div id="app">
    <Header v-show="isShowHeader"
            @handleLeft="goBack()" />
    <CommonPage v-show="isShowCommonPage"
                :op="opPage">
      <Search v-show="isShowSearch"
              @handleSearch="handleSearch" />
      <!-- <transition name="transitionRouter" mode="out-in"> -->
      <router-view />
      <!-- </transition> -->
    </CommonPage>
    <Footer v-show="isShowFooter" />
    <SearchDialog v-show="isShowSearchDialog"
                  @closeSearchDialog="closeSearchDialog" />
  </div>
</template>

<script>
import Search from "@/public_components/Search";
import SearchDialog from "@/public_components/SearchDialog";
import CommonPage from "@/public_components/CommonPage";
import Bus from "@/public_components/Bus.js";
import Header from "@/public_components/Header";
import Footer from "@/public_components/Footer";
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Header,
    Footer,
    Search,
    SearchDialog,
    CommonPage
  },
  data () {
    return {
      opPage: {
        class: "address",
        header: true,
      }
    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter', 'isShowSearch', 'isShowCommonPage', 'isShowSearchDialog'])
  },
  created () {
    Bus.$on("scroll", val => {
      this.stopScroll = val;
    });
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    goBack () {
      window.history.go(-1);
    },
    handleSearch () {
      let initPageConfig = {
        isShowHeader: false,
        isShowSearchDialog: true,
        isShowCommonPage: false,
        isShowFooter: false,
      }
      this.setInitPageConfig(initPageConfig)
    },
    closeSearchDialog () {
      let initPageConfig = {
        isShowHeader: true,
        isShowSearch: true,
        isShowSearchDialog: false,
        isShowFooter: true,
      }
      this.setInitPageConfig(initPageConfig)
    }
  },
  false () {
    // if (!!window.ActiveXObject || "ActiveXObject" in window) {
    //   window.addEventListener(
    //     "hashchange",
    //     () => {
    //       let currentPath = window.location.hash.slice(1);
    //       if (this.$route.path !== currentPath) {
    //         this.$router.push(currentPath);
    //       }
    //     },
    //     false
    //   );
    // }
    // document.querySelector(".clickLink").addEventListener("click", e => {
    //   e.preventDefault;
    //   debugger;
    //   console.log(location.href + this.pathname);
    //   this.href = location.href + "#" + this.pathname.slice(1);
    // });
  },
  beforeDestroy () {
    window.console.log('beforeDestroy')
  },
  destroyed () {
    window.console.log('destroyed')
  }
};
</script>
<style lang="less" scoped>
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: all 0.3s;
}
.transitionRouter-enter,
.transitionRouter-leave {
  transform: translate3d(100%, 0, 0);
}
</style>

