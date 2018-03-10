<template>
<el-container class="wrapper" :class="{'sidebar-hidden':collapse}">
  <!--Head-->
  <el-header class="header" height="50px" style="background-color: #3B8070;">
    <!--Logo-->
    <div class="logo hidden-sm-and-down">
      <span class="big">米彩科技-微服务管理</span>
      <span class="min"><img src="@/assets/images/logo_mini.jpg"></img>
      </span>
    </div>
    <span class="header-btn hidden-sm-and-up" @click="m_menu_show=!m_menu_show"> <i class="el-icon-menu "></i> </span>
    <!--Logo End-->
    <!--Head Right-->
    <div class="right hidden-sm-and-down">
      <span class="header-btn">
        <el-badge :value="3" class="badge"> <i class="el-icon-message"></i> </el-badge>
      </span>
      <span class="header-btn"> <i class="el-icon-bell"></i> </span>
      <el-dropdown>
        <span class="header-btn"> {{display_name}}<i class="el-icon-arrow-down el-icon--right"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!--Head Right End-->
  </el-header>
  <!--Head End-->
  <!--Main-->
  <el-container class="main">
    <!--Aside-->
    <el-aside class="aside hidden-sm-and-down" :width="collapse?'auto':'300px'">
      <m-menu :collapse="collapse" @toggleCollapse="collapse = !collapse"></m-menu>
    </el-aside>
    <!--Aside End-->
    <!--Content-->
    <el-main>
      <!--Mobile Menu-->
      <m-mobile-menu class="hidden-sm-and-up" v-show="m_menu_show" @hideMobileMenu='m_menu_show=false' />
      <!--Mobile Menu End-->
      <breadcrumb class="hidden-sm-and-up" :currentRoute="currentPage" />
      <nuxt></nuxt>
      <el-footer class="footer hidden-sm-and-down">
        <m-footer></m-footer>
      </el-footer>
    </el-main>
    <!--Content End-->
    <!--Main End-->
  </el-container>
</el-container>
</template>

<script>
import breadcrumb from '../components/breadcrumb'
import mFooter from '../components/footer'
import mMenu from '../components/menu'
import mMobileMenu from '../components/mobile/menu'
export default {
  middleware: 'auth', // 定义页面中间件
  data() {
    return {
      collapse: false,
      display_name: '',
      m_menu_show: false
    }
  },
  components: {
    mFooter,
    breadcrumb,
    mMenu,
    mMobileMenu
  },
  computed: {
    currentPage: function() {
      if (this.$store.state.pageName) {
        return { path: this.$route.path, name: this.$store.state.pageName }
      }
    }
  },
  watch: {
    $route() {
      this.m_menu_show = false
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    check_login: function() {
      this.$store.dispatch('check_login').then(() => {
        if (!this.$store.getters.is_login) {
          this.$router.push('/login')
        }
      })
    }
  },
  mounted() {
    this.check_login()
  }
}
</script>

<style lang="less">
.wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}

.sidebar-hidden {
    .header {
        .logo {
            .big {
                display: none;
            }
            .min {
                display: block;
            }
            width: 64px;
        }
    }
}

.main {
    .aside {
        margin-top: 50px;
        min-height: calc(~'100vh - 50px');
        background-color: #222d32;
        overflow: auto;
    }
    .container {
        margin: 0;
        width: 100%;
        padding-top: 100px;
        text-align: center;
        min-height: calc(~'100vh - 200px');
    }
}

.header {
    padding: 0;
    width: 100%;
    position: fixed;
    display: flex;
    height: 50px;
    z-index: 10;
    .logo {
        .min {
            display: none;
        }
        width: 300px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        -webkit-transition: width 0.35s;
        transition: width 0.3s ease-in-out;
    }
    .right {
        position: absolute;
        right: 0;
    }
    .header-btn {
        .el-badge__content {
            top: 14px;
            right: 7px;
            text-align: center;
            font-size: 9px;
            padding: 0 3px;
            background-color: #00a65a;
            color: #fff;
            border: none;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25em;
        }
        overflow: hidden;
        height: 50px;
        display: inline-block;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        padding: 0 14px;
        color: #fff;
        &:hover {
            background-color: #367fa9;
        }
    }
}
</style>
