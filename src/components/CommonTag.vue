<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  mounted() {
    // console.log(this.$route)
  },
  methods: {
    // 点击tag跳转的功能
    changeMenu(item) {
        if(this.$route.name !== item.name)
      this.$router.push({ name: item.name });
    },
    handleClose(item, index) {
      
      this.$store.commit("deleteItemInTabsList", index);

      if (this.tags[index - 1].name !== this.$route.name)  {
        this.$router.push({ name: this.tags[index - 1].name });
      }

    },
  },
};
</script>
<style scoped>
.tabs {
  padding-top: 15px;
  padding-left: 20px;
}
.tabs .el-tag {
  margin-right: 15px;
  cursor: pointer;
}
</style>
