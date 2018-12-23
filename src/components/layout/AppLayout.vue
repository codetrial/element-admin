<template>
  <div class="app-layout">
    <el-container class="app-layout__container">
      <el-header class="app-layout__header">
        <app-header/>
      </el-header>
      <el-main class="app-layout__content">
        <app-breadcrumb/>
        <router-view/>
      </el-main>
      <el-footer class="app-layout__footer">
        <app-footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
.app-layout {
  height: 100%;

  .app-layout__container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .app-layout__header {
      padding: 0;
    }

    .app-layout__content {
      flex: 1 0 auto;
    }

    .app-layout__footer {
      background-color: #f7f7f7;
    }
  }
}
</style>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppBreadcrumb from './AppBreadcrumb.vue'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
    AppBreadcrumb
  }
}
</script>
