<template>
  <div class="top">
    <ul>
      <template v-for="(item) in pySegSort.segs">
        <li class="no-people"
            v-if="item.initial"
            :key="item.id">
          <span>{{item.initial}}</span>
        </li>
        <template>
          <li class="people"
              v-for="(item2) in item.data"
              :key="item2.id">
            <router-link :to="'/addressPeople:'+item2.name">
              <img :src="require(`@/assets/image/message/p1.svg`)"
                   alt />
              {{item2.name}}
            </router-link>
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["nameList"],
  computed: {
    pySegSort () {
      if (this.nameList.length == 0) return;
      if (!String.prototype.localeCompare) return null;
      var letters = "*ABCDEFGHJKLMNOPQRSTWXYZ".split("");
      var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split("");
      var segs = []; // 存放数据
      var res = {};
      let curr;
      var re = /[^\u4e00-\u9fa5]/; //中文正则
      var pattern = new RegExp(
        "[`\\-~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？12345678990]"
      ); //特殊符号

      letters.filter((items, i) => {
        curr = {
          initial: "", //字母
          data: [] //数据
        };
        this.nameList.map((v, index) => {
          // 特殊字符
          if (pattern.test(v.name[0])) {
            if (
              (!zh[i - 1] || zh[i - 1].localeCompare(v.name) <= 0) &&
              v.name.localeCompare(zh[i]) == -1
            ) {
              curr.data.push(v);
            }
          }
          // 判断首个字是否是中文
          if (re.test(v.name[0])) {
            // 英文
            if (v.name[0].toUpperCase() == items) {
              curr.data.push(v);
            }
          } else {
            // 中文
            if (
              (!zh[i - 1] || zh[i - 1].localeCompare(v.name) <= 0) &&
              v.name.localeCompare(zh[i]) == -1
            ) {
              curr.data.push(v);
            }
          }
        });

        if (curr.data.length) {
          curr.initial = letters[i];
          segs.push(curr);
          curr.data.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        }
      });
      res.segs = Array.from(new Set(segs)); //去重
      return res;
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  ul {
    li {
      padding: 10px 15px;
      background-color: #ffffff;
      border-bottom: 1px solid #f2f2f2;
      a {
        display: block;
        img {
          width: 30px;
          height: 30px;
          display: inline-block;
        }
        p {
          display: inline-block;
          margin-left: 20px;
        }
      }
    }
    .no-people {
      background: #f2f2f2;
      padding: 4px 15px;
    }
  }
}
</style>

