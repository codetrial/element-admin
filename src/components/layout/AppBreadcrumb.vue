<template>
  <div class="breadcrumb" v-if="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in breadcrumb">
        <el-breadcrumb-item
          v-if="item.path"
          :key="item.name"
          :to="{ path: item.path }"
        >{{ item.name }}</el-breadcrumb-item>
        <el-breadcrumb-item v-else :key="item.name">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb {
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppBreadcrumb',

  computed: {
    ...mapState({
      breadcrumb: state => {
        const { breadcrumb } = state.route.meta

        if (breadcrumb) {
          return breadcrumb.map(item => {
            if (typeof item === 'string') {
              const [name, path = null] = item.split(' ')
              return {
                name,
                path
              }
            }
            return item
          })
        }

        return null
      },
      route: 'route'
    })
  }
}
</script>
