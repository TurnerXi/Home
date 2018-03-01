module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /**
   * plugins
   */
  plugins: [{ src: '~plugins/element-ui', ssr: true }],
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
