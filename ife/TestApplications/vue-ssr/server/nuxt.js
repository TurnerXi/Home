import { Nuxt, Builder } from 'nuxt'

export default function (app) {

  return new Promise(function (resolve, reject) {
    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js')
    config.dev = !(app.env === 'production')

    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)
    // Build in development
    if (config.dev) {
      const builder = new Builder(nuxt)
      new Builder(nuxt).build().then(function () {
        resolve(nuxt)
      })
    } else {
      resolve(nuxt)
    }
  })

}
