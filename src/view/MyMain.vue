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
        <common-tag/>
        <el-main>
            <!-- 路由出口 -->
            <!-- 路由匹配到的組件將渲染在這裏 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavMenu from "../components/NavMenu.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue"
export default {
  name: "my-main",
  components: {
    NavMenu,
    CommonHeader,
    CommonTag,
  },
};
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>>


