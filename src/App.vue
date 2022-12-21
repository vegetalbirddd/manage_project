<template>
  <div id="app">
    <!-- 路由出口（路由匹配到的组件将渲染到这里） -->
      <router-view></router-view>
  </div>
</template>

<script>
import Home from './view/Home.vue'
import User from './view/User.vue'
import MyMain from './view/MyMain.vue'
import Login from './view/Login.vue'

export default {
  name: "App",
  components: {Login,
    Home,
    User,
    MyMain,
   
  }
};
</script>

<style lang="less">
html,body,h3,p {
  padding: 0;
  margin: 0;
}
</style>
