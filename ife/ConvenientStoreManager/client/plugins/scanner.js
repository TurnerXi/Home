import quagga from 'quagga'

var default_options = {
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    target: '.scanner_view_port',
    area: { // defines rectangle of the detection/localization area
      top: "0%", // top offset
      right: "0%", // right offset
      left: "0%", // left offset
      bottom: "0%" // bottom offset
    },
  },
  numofWorkers: 0,
  decoder: {
    readers: ['ean_reader']
  }
}

export default {
  init(target, area) {
    return new Promise((resolve, reject) => {
      if (typeof target == 'object') {
        area = target
        target = undefined
      }
      if (target && typeof target == 'string') {
        default_options.inputStream.target = target
      }
      if (area && typeof area == 'object') {
        default_options.inputStream.area = area
      }
      quagga.init(default_options, err => {
        if (err) {
          reject(err)
        } else {
          resolve(quagga)
        }
      })
    })
  }
}
