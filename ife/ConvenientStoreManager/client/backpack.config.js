const fs = require('fs')
module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js'
    return config
  }
}
