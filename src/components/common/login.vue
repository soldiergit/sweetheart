<template>
  <el-dialog
    :title="''"
    :close-on-click-modal="false"
    width="26rem"
    :visible.sync="visible">
    <h3 class="login-title">用户登录</h3>
        <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="visible = false" status-icon>
          <el-form-item prop="userName">
            <el-input v-model="dataForm.userName" placeholder="帐号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <el-row :gutter="20">
              <el-col :span="14">
                <el-input v-model="dataForm.captcha" placeholder="验证码">
                </el-input>
              </el-col>
              <el-col :span="10" class="login-captcha">
                <img style="display: block;width: 100%;" :src="captchaPath" alt="">
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-row :gutter="38">
              <el-col :span="12">
                <el-button class="login-btn-submit" type="primary" @click="dataFormSubmit()" :loading="loginLoading">
                  登录
                </el-button>
              </el-col>
              <el-col :span="12">
                <el-button class="login-btn-submit" type="primary" @click="visible = false">取消</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
  </el-dialog>
</template>

<script>
import captchaImg from '@/assets/images/captcha.jpg'
export default {
  data () {
    return {
      visible: false,
      registerVisible: false,
      loginLoading: false,
      dataForm: {
        userName: '',
        password: '',
        uuid: '',
        captcha: ''
      },
      dataRule: {
        userName: [
          { required: true, message: '帐号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      },
      captchaPath: captchaImg
    }
  },
  components: {
  },
  methods: {
    init () {
      this.visible = true
    },
    // 提交表单
    dataFormSubmit () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.loginLoading = true
          this.dataForm.captcha = ''
          this.$store.commit('signIn')
          this.visible = false
          this.loginLoading = false
        }
      })
    }
  }
}
</script>
