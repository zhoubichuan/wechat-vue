<template>
  <div id="app">
    <!-- <transition name="transitionRouter" mode="out-in"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
import Bus from "@/public_components/Bus.js";
export default {
  data() {
    return {};
  },
  created() {
    Bus.$on("scroll", val => {
      this.stopScroll = val;
    });
  },
  components: {},
  methods: {},
  mounted() {
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
  beforeDestroy(){
    window.console.log('beforeDestroy')
  },
   destroyed(){
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

