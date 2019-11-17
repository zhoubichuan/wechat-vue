<template>
  <div>
    <div v-show="!informationIsShow">
      <Search />
      <LoginTip />
      <People />
    </div>
  </div>
</template>

<script>

import Search from "@/public_components/Search";
import LoginTip from "@/public_components/LoginTip";
import People from "@/public_components/People";
import { mapState } from "vuex";

export default {
  components: {

    Search,
    LoginTip,
    People
  },
  computed: {
    ...mapState("message", ["opPage", "titleData", "informationIsShow"])
  }
};
</script>


<style scoped lang="less">
.message {
  background-color: #efeff4;
  overflow-y: scroll;
}
</style>
