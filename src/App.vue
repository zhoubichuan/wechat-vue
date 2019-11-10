<template>
  <div id="app">
    <Header :op="headContent"
            v-if="header"
            @handleLeft="goBack()" />
    <!-- <transition name="transitionRouter" mode="out-in"> -->
    <router-view />
    <!-- </transition> -->
    <Footer v-if="footer" />
  </div>
</template>

<script>
import Bus from "@/public_components/Bus.js";
import Header from "@/public_components/Header";
import Footer from "@/public_components/Footer";
export default {
  data () {
    return {
      class: "page",
      header: true,
      headContent: {
        style: "color:black ;background-color: white;",
        left: "",
        middle: "微信(18)",
        right: "+"
      },
      footer: true
    };
  },
  created () {
    Bus.$on("scroll", val => {
      this.stopScroll = val;
    });
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    goBack () {
      window.history.go(-1);
    }
  },
  mounted () {

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

