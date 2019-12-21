<template>
  <!--<el-dialog
    :title="''"
    :close-on-click-modal="false"
    width="26rem"
    :visible.sync="visible">
    <h3 class="login-title">用户登录</h3>
        <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="visible = false" status-icon>
          <el-form-item prop="userName">
            <el-input v-model="dataForm.userName" placeholder="帐号:是你的生日哦(年月日8个数字)"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="dataForm.password" type="password" placeholder="密码:是我们在一起的那天哦(年月日8个数字)"></el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <el-row :gutter="20">
              <el-col :span="14">
                <el-input v-model="dataForm.captcha" placeholder="验证码:随便来个字符">
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
  </el-dialog>-->
  <div class="homepage-hero-module">
    <div class="login-container">
      <div :style="fixStyle" class="filter">
        <div class="login-main">
          <h3 class="login-title">管理员登录</h3>
          <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
            <el-form-item prop="userName">
              <el-input v-model="dataForm.userName" placeholder="帐号:是你的生日哦(年月日8个数字)"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="dataForm.password" type="password" placeholder="密码:是我们在一起的那天哦(年月日8个数字)"></el-input>
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
              <el-button class="login-btn-submit" type="primary" @click="dataFormSubmit()" :loading="loginLoading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="poster">
        <img :style="fixStyle" class="fillWidth" :src="LoginBG" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import captchaImg from '@/assets/images/captcha.jpg'
import LoginBG from '@/assets/images/RomaticSunset.jpg'
export default {
  data () {
    var validateUserName = (rule, value, callback) => {
      if (value !== '19991004') {
        callback(new Error('这不是你的生日！'))
      } else callback()
    }
    var validatePassword = (rule, value, callback) => {
      if (value !== '20190107') {
        callback(new Error('这不是我们在一起的那天！'))
      } else callback()
    }
    return {
      // visible: false,
      loginLoading: false,
      dataForm: {
        userName: '',
        password: '',
        uuid: '',
        captcha: ''
      },
      dataRule: {
        userName: [
          { required: true, message: '帐号不能为空', trigger: 'blur' },
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      },
      captchaPath: captchaImg,
      LoginBG: LoginBG,
      fixStyle: ''
    }
  },
  // created:在模板渲染成html前调用； mounted:在模板渲染成html后调用
  created () {
  },
  mounted: function () {
    // 屏幕自适应
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          width: windowWidth + 'px',
          height: windowWidth * 0.5625 + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
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
          this.$router.push({name: 'Home'})
          // this.visible = false
          this.loginLoading = false
        }
      })
    }
  }
}
</script>

<style scoped>
  .homepage-hero-module,
  .login-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .login-container .poster img{
    z-index: 0;
    position: absolute;
  }

  .login-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
  }

  .fillWidth {
    width: 100%;
  }

  .login-main {
    position: absolute;
    left: 35%;
    margin-top: 250px;
    padding: 50px 60px 40px;
    width: 470px;
    /*min-height: 100%;*/
    background: rgba(0, 0, 0, 0.4);
  }
  .login-title {
    font-size: 16px;
  }
  .login-captcha {
    overflow: hidden;
  }
  .login-captcha > img {
    width: 100%;
    cursor: pointer;
  }
  .login-btn-submit {
    width: 100%;
    margin-top: 38px;
  }
</style>
