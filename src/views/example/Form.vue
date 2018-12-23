<template>
  <div class="standard-form-container">
    <el-card shadow="never">
      <el-form
        class="standard-form"
        :model="formValues"
        :rules="rules"
        ref="exampleForm"
        label-width="150px"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="formValues.name"></el-input>
        </el-form-item>
        <el-form-item label="地区" prop="region">
          <el-select v-model="formValues.region" placeholder="请选择地区">
            <el-option label="北京" value="BJ"></el-option>
            <el-option label="上海" value="SH"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formValues.date"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="time">
              <el-time-picker
                type="fixed-time"
                placeholder="选择时间"
                v-model="formValues.time"
                style="width: 100%;"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时分发" prop="delivery">
          <el-switch v-model="formValues.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-checkbox-group v-model="formValues.type">
            <el-checkbox label="1" name="type">个人</el-checkbox>
            <el-checkbox label="2" name="type">组织</el-checkbox>
            <el-checkbox label="3" name="type">团队</el-checkbox>
            <el-checkbox label="4" name="type">公司</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="formValues.status">
            <el-radio label="在线"></el-radio>
            <el-radio label="离线"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="详细描述" prop="desc">
          <el-input type="textarea" v-model="formValues.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('exampleForm')">立即创建</el-button>
          <el-button @click="resetForm('exampleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { rules } from './config'

export default {
  name: 'example-form',

  data() {
    return {
      rules,
      formValues: {
        name: '',
        region: '',
        date: '',
        time: '',
        delivery: false,
        type: [],
        status: '',
        desc: ''
      }
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$notify.success({
            title: '成功',
            message: '保存成功！'
          })
          this.$router.push('/example')
        } else {
          this.$notify.error({
            title: '错误',
            message: '请检查表单填写错误项！'
          })
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
