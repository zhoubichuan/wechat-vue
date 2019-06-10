<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Bus from "@/common/Bus.js";
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
  }
};
</script>
