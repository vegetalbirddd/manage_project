<template>
  <div>
    <el-menu
      :class="[isCollapse ? '' : 'hCollapse']"

      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <h3 v-if="isCollapse" :class="hCollapsen">后台</h3>
    <h3 v-if="!isCollapse" :class="hCollapse">通用后台管理系统</h3> -->
      <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
      <!-- 无子孩子 -->
      <el-menu-item
        @click="clickMenu(item)"
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
        
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu
        @click="clickMenu(item)"
        v-for="item in hasChildren"
        :key="item.label"
        :index="item.label"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="item in item.children"
          :key="item.path"
          :index="item.path"
        >
          <el-menu-item @click="clickMenu(item)" :index="item.path">{{
            item.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>

export default {
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      // 当页面的路由与跳转的路由不一致时才允许跳转,防止反复点击同一链接时产生报错
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && (item.path === "/"))
      ) {
        this.$router.push(item.path);
      }
      this.$store.commit('selectMenu',item)
    },
  },
  computed: {
    // 无子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
<style lang="less" scoped>
.hCollapse {
  width: 200px;
}
.el-menu-vertical-demo {
  height: 118vh;
  overflow: hidden;

  border: 1px solid #545c64;
  h3 {
    color: #fff;
    line-height: 56px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
  }
}
</style>
