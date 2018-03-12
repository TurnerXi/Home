module.exports = {
  env: {
    // API_URL: 'https://192.168.2.140:3004'
  },
  axios: {
    // baseURL: 'http://192.168.199.105:3004',
    baseURL: 'http://192.168.2.140:3004',
    debug: false,
    https: true,
    credentials: true,
    // proxy: true,
    retry: { retries: 3 }
  },
  // proxy: {
  //   '/api/': 'http://api.example.com',
  //   '/api2/': 'http://api.another-website.com'
  // },
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,minimal-ui' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'renderer', content: 'webkit' },
      { name: 'HandheldFriendly', content: 'true' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    '~assets/css/font-awesome.min.css',
    '~assets/css/main.css'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /**
   * modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  /**
   * plugins
   */
  plugins: [{ src: '~plugins/element-ui', ssr: true }, { src: '~/plugins/axios', ssr: true }],
  /**
   * router
   */
  router: {
    middleware: 'stats'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      'axios',
      'element-ui'
    ],
    babel: {
      plugins: [
        [
          'component', [{
              libraryName: 'element-ui',
              styleLibraryName: 'theme-chalk'
            },
            'transform-async-to-generator',
            'transform-runtime'
          ]
        ]
      ]
    },
    loaders: [{
        test: /\.css$/,
        loader: 'vue-style-loader!css-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
