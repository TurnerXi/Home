import fs from 'fs'
module.exports = {
  env: {
   API_HOST: 'https://192.168.2.140:3004'
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
      { name: 'viewport', content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'format-detection', content: 'telephone=no' },
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
