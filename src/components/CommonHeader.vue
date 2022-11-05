<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        style="margin-right:20px"
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- <span class="homeSpan">首页</span> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img
            src="../assets/images/user.jpg"
            alt=""
            style="width: 40px; border-radius: 100%"
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("isCollapseMenu");
    },
  },
  
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
    
  },
  mounted() {
    console.log(this.tags, "tags");
  },
};
</script>
<style lang="less" scoped>
// .homeSpan {
//   // display: none;
//   color: #fff;
//   padding: 20px;
// }
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-content: center;
  /deep/.el-breadcrumb__item {
    margin-top: 5px;
    .el-breadcrumb__inner {
      font-weight: normal;
      cursor: pointer;
      &.is-link {
        color: #666;
      }
    }
      &:last-child {
        .el-breadcrumb__inner {
          color: #fff;
        }
      }
  }
}

</style>>