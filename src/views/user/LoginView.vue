<template>
  <div class="login-container">
    <el-row>
      <el-col>
        <h1 class="title">登录</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="7">
        <el-form
          :model="loginForm"
          :rules="loginFormRules"
          label-width="100px"
          ref="loginFormRef"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-row>
              <el-col :span="6">
                <el-input
                  type="text"
                  placeholder="验证码"
                  v-model="loginForm.code"
                ></el-input>
              </el-col>
              <el-col :span="6" :offset="1">
                <div v-html="verify" @click="onVerifyClick"></div>
              </el-col>
              <el-col :span="5" :offset="6">
                <el-button type="text">忘记密码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
            <el-button @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { v4 } from 'uuid'
import { getLocal, setLocal } from '@/utils/local'
import * as publicApi from '@/api/public'
export default {
  name: 'LoginView',
  data() {
    return {
      loginForm: {
        username: 'aicherish',
        password: '1234567',
        code: ''
      },
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码'
          }
        ]
      },
      verify: ''
    }
  },
  async created() {
    this.uid = getLocal('uuid')
    if (!this.uid) {
      setLocal('uuid', v4())
    }
    this.getCaptcha()
  },
  methods: {
    async getCaptcha() {
      const data = await publicApi.getCaptcha()
      this.verify = data
    },
    onVerifyClick() {
      this.getCaptcha()
    },
    handleLogin() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (valid) {
          try {
            alert(1)
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
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  .title {
    text-align: center;
    padding: 20px 0;
  }
}
</style>
