<template>
  <div class="reg-container">
    <h1 class="title">注册</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      ref="regFormRef"
      class="reg-form"
    >
      <el-form-item label="邮箱" prop="username">
        <el-input
          v-model="ruleForm.username"
          placeholder="请输入邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="ruleForm.password"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPwd">
        <el-input
          type="password"
          placeholder="请确认密码"
          v-model="ruleForm.confirmPwd"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleReg">注册</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as user from '@/api/user'
export default {
  name: 'RegView',
  data() {
    const validatePwd = (_, value, cb) => {
      if (!value) {
        cb(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        cb(new Error('两次输入的密码不一致'))
      } else {
        cb()
      }
    }

    return {
      ruleForm: {
        username: 'aicherish',
        password: '1234567',
        confirmPwd: '1234567'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '情输入密码'
          }
        ],
        confirmPwd: [
          {
            validator: validatePwd
          }
        ]
      }
    }
  },
  methods: {
    handleReg() {
      this.$refs.regFormRef.validate(async (valid) => {
        if (valid) {
          try {
            await user.reg(this.ruleForm)
            this.$message.success('注册成功，2s后跳到登录页')
            setTimeout(() => {
              this.$router.push('/login')
            }, 2000)
          } catch (error) {
            this.$message.error('注册失败')
          }
        } else {
          this.$message.error('信息输入有误！')
          return false
        }
      })
    },
    handleReset() {
      this.$refs.regFormRef.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.reg-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    padding: 30px 0;
  }
  .reg-form {
    width: 500px;
  }
}
</style>
