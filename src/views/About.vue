<template>
  <div class="about">
    <el-row class="bottom-gutter">
      <el-card shadow="hover">
        <div class="about-content">
          <h3>关于此站点</h3>
          <p>这是一个使用 @codetrial/vue-cli-plugin-element 插件创建的轻量级后台管理系统。核心技术为 Vue CLI 3 及 ElementUI。</p>
          <p>如果你觉得有帮助，还请多多反馈！</p>
          <p>
            项目源码：
            <a
              target="_blank"
              href="https://github.com/codetrial/element-admin"
            >@codetrial/element-admin</a>
          </p>
          <p>
            插件源码：
            <a
              target="_blank"
              href="https://github.com/codetrial/vue-cli-plugin-element"
            >@codetrial/vue-cli-plugin-element</a>
          </p>
          <p>
            开发人员：
            <a target="_blank" href="https://github.com/felixpy">felixpy@github</a>
          </p>
          <h4>项目特点</h4>
          <p>麻雀虽小，五脏俱全。下面是它的一些主要特点。</p>
          <p>
            <b>最小依赖</b>：仅依赖 Vue 官方库及 ElementUI 组件库，未额外引入其它第三方库，为你提供自由发挥的空间。
          </p>
          <p>
            <b>目录结构</b>：根据项目实战经验，设计了合理、清晰的目录结构。
          </p>
          <p>
            <b>页面布局</b>：使用 Vue Router 嵌套路由及 ElementUI 内置组件进行布局。
          </p>
          <p>
            <b>数据处理</b>：添加独立的 api 及 service 层，将业务逻辑从组件中抽离。
          </p>
          <p>
            <b>权限控制</b>：为路由添加配置式拦截器，默认支持用户登录鉴权及角色鉴权。
          </p>
          <p>
            <b>列表示例</b>：一个相对比较完整的列表页示例，包含字段查询（过滤），字段排序，页码跳转，批量操作等等。
          </p>
          <p>
            <b>表单示例</b>：一个相对比较完整的表单页示例，包含表单校验、提交等操作。
          </p>
          <p>
            <b>错误页面</b>：内置简单的（其实是偷懒） 403、404 及 500 错误页。
          </p>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.about {
  .about-content {
    padding: 0 120px;
  }
}
</style>

<script>
export default {
  name: 'about'
}
</script>
