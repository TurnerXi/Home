<template>
<div id='login' class='login'>
  <el-row style='z-index: 1;height: 100%;'>
    <el-card class='login-box' element-loading-background='rgba(0, 0, 0, 0.8)'>
      <el-form ref='form' :model='form' :rules='rules' label-with='80px' @keyup.enter.native='handleSubmit'>
        <h1 class='title'>后台管理系统</h1>
        <el-form-item prop='username'>
          <el-input v-model='form.username' :autofocus='true' placeholder='username'> <template slot='prepend'>
                <i class='fa fa-user'></i>
            </template> </el-input>
        </el-form-item>
        <el-form-item prop='password'>
          <el-input type='password' v-model='form.password' placeholder='password'> <template slot='prepend'>
              <i class='fa fa-lock'></i>
            </template> </el-input>
        </el-form-item>
        <el-form-item>
          <el-alert v-if='error' :title='error' type='error' style='margin-top: -10px; margin-bottom: 10px' show-icon></el-alert>
          <el-button type='primary' @click='handleSubmit' style='width: 100%' :disabled="loading" >
            <span v-show="!loading">登 录</span>
            <div v-show="loading" class="loading">
                <div class="line"></div><div class="line"></div><div class="line"></div>
            </div>
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-row>
</div>
</template>
<script>
import starcanvas from '../utils/starcanvas'
export default {
  layout: 'auth',
  data() {
    return {
      loading: false,
      error: '',
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.error = ''
      this.$refs['form'].validate(pass => {
        if (pass) {
          this.loading = true
          this.$store.dispatch('login', this.form).then(() => {
            this.$router.push({ path: '/' })
          }).catch((error) => {
            this.error = error.message
          }).finally(() => {
            this.loading = false
          })
        }
      })
    }
  },
  watch: {
    form: {
      handler: function() {
        this.error = ''
      },
      deep: true
    }
  },
  mounted() {
    starcanvas({
      context: 'login',
      vx: 4, // 小球x轴速度,正为右，负为左
      vy: 4, // 小球y轴速度
      height: 2, // 小球高宽，其实为正方形，所以不宜太大
      width: 2,
      count: 100, // 点个数
      color: '121, 162, 185', // 点颜色
      stroke: '130,255,255', // 线条颜色
      dist: 6000, // 点吸附距离
      e_dist: 20000, // 鼠标吸附加速距离
      max_conn: 10 // 点到点最大连接数
    })
  }
}
</script>
<style scoped>
.login {
  background-color: #324057;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
}

.login-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 350px;
  max-width: 80%;
  padding: 20px 50px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
}

.login-box-msg {
  color: #ffffff;
  text-align: center;
}

.login-box .title {
  color: #ffffff;
  text-align: center;
  padding: 20px 0 40px;
  font-weight: lighter;
}

.loading .line:nth-last-child(1) {
    animation: loading 1s .2s linear infinite;
}

.loading .line:nth-last-child(2) {
    animation: loading 1s .4s linear infinite;
}

.loading .line:nth-last-child(3) {
    animation: loading 1s .6s linear infinite;
}

.line {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin: 0 5px;
    background-color: #4b9cdb;
}

@keyframes loading {
    0 {opacity: 0.2;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
}

@media screen and (max-width: 700px) {
  .login-box {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 80%;
    padding: 0;
    background: rgba(0, 0, 0, 0.5);
    border: none;
  }
  .login-box .title {
    color: #ffffff;
    text-align: center;
    padding: 20px 0;
    font-weight: lighter;
  }
}
</style>
