<template>
  <div class="login">
    <el-card class="login-card">
      <div slot="header">
        <span>示例系统</span>
        <div class="pull-right">
          <a target="_blank" href="https://codetrial.github.io">@Codetrial</a>
        </div>
      </div>
      <div class="login-form">
        <el-form :model="formValues" status-icon :rules="rules" ref="loginForm">
          <el-form-item prop="usr">
            <el-input
              type="text"
              placeholder="普通用户 codetrial / 管理员 admin"
              v-model="formValues.usr"
              autocomplete="off"
            >
              <template slot="prepend">账号</template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input
              type="password"
              placeholder="请输入任意密码"
              v-model="formValues.pwd"
              autocomplete="off"
            >
              <template slot="prepend">密码</template>
            </el-input>
          </el-form-item>
          <el-form-item class="pull-right">
            <el-button @click="resetForm('loginForm')">重置</el-button>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-card {
    width: 480px;
    margin-bottom: 100px;

    .el-form-item {
      margin-bottom: 36px;

      & /deep/ .el-form-item__error {
        left: auto;
        right: 0;
      }
    }
  }
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',

  data() {
    return {
      formValues: {
        usr: '',
        pwd: ''
      },

      rules: {
        usr: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },

  methods: {
    ...mapActions(['getUser']),

    login() {
      const { usr } = this.formValues

      return this.getUser(usr)
        .then(() => {
          this.$notify.success({
            duration: 1000,
            title: '成功',
            message: '登录成功！'
          })
          this.$router.push('/')
        })
        .catch(err => {
          this.$notify.error({
            title: '失败',
            message: err.message || '登录失败！'
          })
        })
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
