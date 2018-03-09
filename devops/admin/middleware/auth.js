export default function ({ store, route, redirect, isServer }) {
  let islogin = true
  if (process.server || !window) {
    // store.dispatch('check_login')
    // console.log(store.islogin)
    // islogin = store.islogin
  } else {
    islogin = localStorage.getItem('isLogin')
  }
  if (!islogin) {
    return redirect('/login')
  }
}
