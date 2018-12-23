<template>
  <div class="home-content">
    <el-row class="home-content__row bottom-gutter">
      <el-card shadow="hover">
        <div>
          <p>
            Hi，开发者，欢迎使用 @codetrial/vue-cli-plugin-element 插件搭建你的后台！
            <a
              target="_blank"
              href="https://github.com/codetrial/vue-cli-plugin-element"
            >插件源码</a> |
            <a target="_blank" href="https://codetrial.github.io/element-admin">插件文档</a>
          </p>
        </div>
      </el-card>
    </el-row>
    <el-row class="home-content__row bottom-gutter" :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">统计 A</div>
          <div class="text-center">
            <el-progress type="circle" :percentage="50"></el-progress>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">统计 B</div>
          <div class="text-center">
            <el-progress type="circle" :percentage="25"></el-progress>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">统计 C</div>
          <div class="text-center">
            <el-progress type="circle" :percentage="75"></el-progress>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">统计 D</div>
          <div class="text-center">
            <el-progress type="circle" status="success" :percentage="100"></el-progress>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="home-content__row" :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header">进度 A</div>
          <div>
            <el-progress
              class="home-content__progress"
              :text-inside="true"
              :stroke-width="18"
              :percentage="70"
            ></el-progress>
            <el-progress
              class="home-content__progress"
              :text-inside="true"
              :stroke-width="18"
              :percentage="35"
            ></el-progress>
            <el-progress
              class="home-content__progress"
              :text-inside="true"
              :stroke-width="18"
              :percentage="90"
            ></el-progress>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header">进度 B</div>
          <div>
            <el-progress
              class="home-content__progress"
              :text-inside="true"
              :stroke-width="18"
              :percentage="20"
            ></el-progress>
            <el-progress
              class="home-content__progress"
              :text-inside="true"
              :stroke-width="18"
              :percentage="100"
              status="success"
            ></el-progress>
            <el-progress
              class="home-content__progress"
              :text-inside="true"
              :stroke-width="18"
              :percentage="50"
              status="exception"
            ></el-progress>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.home-content {
  .home-content__row {
    .home-content__progress {
      margin-bottom: 20px;
    }
  }
}
</style>

<script>
export default {
  name: 'home'
}
</script>
