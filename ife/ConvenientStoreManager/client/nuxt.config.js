import fs from 'fs'
module.exports = {
  env: {
   API_HOST: 'http://192.168.50.31:3004'
  },
  build: {
    vendor: ['axios'],
  },
  // plugins: ['~/plugins/scanner.js','~/plugins/axios.js'],
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      // <!-- 视图窗口，移动端特属的标签。 -->
     // <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
     // <!-- 是否启动webapp功能，会删除默认的苹果工具栏和菜单栏。 -->
     // <meta name="apple-mobile-web-app-capable" content="yes" />
     // <!-- 这个主要是根据实际的页面设计的主体色为搭配来进行设置。 -->
     // <meta name="apple-mobile-web-app-status-bar-style" content="black" />
     // <!-- 忽略页面中的数字识别为电话号码,email识别 -->
     // <meta name="format-detection"content="telephone=no, email=no" />
     // <!-- 启用360浏览器的极速模式(webkit) -->
     // <meta name="renderer" content="webkit">
     // <!-- 避免IE使用兼容模式 -->
     // <meta http-equiv="X-UA-Compatible" content="IE=edge">
     // <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
     // <meta name="HandheldFriendly" content="true">
     // <!-- 微软的老式浏览器 -->
     // <meta name="MobileOptimized" content="320">
     // <!-- uc强制竖屏 -->
     // <meta name="screen-orientation" content="portrait">
     // <!-- QQ强制竖屏 -->
     // <meta name="x5-orientation" content="portrait">
     // <!-- UC强制全屏 -->
     // <meta name="full-screen" content="yes">
     // <!-- QQ强制全屏 -->
     // <meta name="x5-fullscreen" content="true">
     // <!-- UC应用模式 -->
     // <meta name="browsermode" content="application">
     // <!-- QQ应用模式 -->
     // <meta name="x5-page-mode" content="app">
     // <!-- windows phone 点击无高光 -->
     // <meta name="msapplication-tap-highlight" content="no">
      { name: 'viewport', content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,minimal-ui' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'renderer', content: 'webkit' },
      { name: 'HandheldFriendly', content: 'true' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css'],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' }
}
