export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
  })

  $axios.onResponse(response => {
    // console.log(response)
  })

  // $axios.onRequestError(err => {
    // console.error(err)
  // })

  // $axios.onResponseError(err => {
    // console.error(err)
  // })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 403) {
      localStorage.removeItem('login')
      redirect('/login')
    }
  })
}
