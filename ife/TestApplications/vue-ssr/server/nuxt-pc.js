import { Nuxt, Builder } from 'nuxt'

export default async function (app) {

  // Import and Set Nuxt.js options
  let config = require('../nuxt.pc.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  // Build in development
  if (config.dev) {
    await new Builder(nuxt).build()
  }
  return nuxt;
}
