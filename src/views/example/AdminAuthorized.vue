<template>
  <div class="admin-authorized">
    <el-row class="bottom-gutter">
      <el-card shadow="hover">
        <p>此页面需要
          <code>ADMIN</code> 角色才能访问。
        </p>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'admin-authorized'
}
</script>
