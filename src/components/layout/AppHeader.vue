<template>
  <div class="header">
    <el-menu
      class="header-nav-menu"
      :default-active="path"
      :router="true"
      background-color="#f7f7f7"
      mode="horizontal"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <template v-if="user.id">
        <el-submenu index="/example" :show-timeout="300" :hide-timeout="0">
          <template slot="title">示例模块</template>
          <el-menu-item index="/example">列表页</el-menu-item>
          <el-menu-item index="/example/new">表单页</el-menu-item>
          <el-menu-item index="/example/admin-authorized">错误 - 403 无权限（管理员可见）</el-menu-item>
          <el-menu-item index="/example/some-page">错误 - 404 页面找不到</el-menu-item>
          <el-menu-item index="/500">错误 - 500 服务器内部错误</el-menu-item>
        </el-submenu>
        <el-menu-item index="/about">关于</el-menu-item>
      </template>
    </el-menu>
    <div class="header-user-menu" v-if="user.id">
      <el-dropdown class="header-user-menu__item" @command="handleUserCommand">
        <span class="el-dropdown-link">
          {{ user.name || 'Unkown User'}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">注销登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #f7f7f7;

  .header-nav-menu {
    flex-grow: 1;
  }

  .header-user-menu {
    height: 60px;
    line-height: 60px;
    border-bottom: solid 1px #e6e6e6;

    .header-user-menu__item {
      padding: 0 20px;
    }
  }
}
</style>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AppHeader',

  computed: {
    ...mapState({
      path: state => {
        const { route } = state
        return route.from ? route.path : null
      },

      user: 'user'
    })
  },

  methods: {
    ...mapActions(['resetUser']),

    handleUserCommand(cmd) {
      switch (cmd) {
        case 'logout':
          this.$router.push('/login')
          this.resetUser()
          break
        default:
          break
      }
    }
  }
}
</script>
