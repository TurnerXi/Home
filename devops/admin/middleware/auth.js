export default function ({ store, route, redirect, isServer }) {
  let islogin = false
  if (process.server || !window) {
    islogin = store.dispatch('check_login')
  } else {
    islogin = localStorage.getItem('isLogin')
  }
  if (!islogin) {
    return redirect('/login')
  }
}
