<template>
  <div id="my-main">
    <el-container>
      <el-aside width="auto">
        <nav-menu />
      </el-aside>
      <el-container>
        <el-header>
          <common-header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavMenu from "../components/NavMenu.vue";
import CommonHeader from "../components/CommonHeader.vue";
export default {
  name: "my-main",
  components: {
    NavMenu,
    CommonHeader,
  },
};
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>>


