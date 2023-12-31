<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar v-if="device != 'mobile'" class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
      </div>
      <app-main />
      <div v-if="device === 'mobile'">
        <div v-if="who === 'user'">
          <van-tabbar v-model="active">
            <van-tabbar-item icon="points" @click="search">数据</van-tabbar-item>
            <van-tabbar-item icon="setting-o" @click="file">调试</van-tabbar-item>
            <van-tabbar-item icon="user-o" @click="user">智能助手</van-tabbar-item>
          </van-tabbar>
        </div>
        <div v-else>
          <van-tabbar v-model="active">
            <van-tabbar-item icon="user-o" @click="user">智能助手</van-tabbar-item>
            <van-tabbar-item icon="points" @click="save">备忘录</van-tabbar-item>
          </van-tabbar>
        </div>
      </div>
      <el-footer v-if="device != 'mobile'">
        <el-row type="flex" justify="center">
          <el-link href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2022029000号-1</el-link>
          <span style="color: #606266; padding-left: 50px; font-size: 14px ">@2022-2023 Someone
          </span>
        </el-row>
      </el-footer>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      active: 0,
      who: this.$store.state.who.who
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    // 跳出侧边栏菜单
    showMenus() {
      this.$store.dispatch('app/toggleSideBar')
    },
    // 跳转搜索
    search() {
      this.$router.push({ path: '/search/search' })
    },
    // 管理员备忘录界面
    save() {
      this.$router.push({ path: '/save/save' })
    },
    // 跳转上传
    upload() {
      this.$router.push({ path: '/upload/upload' })
    },
    // 跳转文献归档
    file() {
      this.$router.push({ path: '/file/file' })
    },
    // 跳转文献归档
    user() {
      this.$router.push({ path: '/user/user' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}
</style>
