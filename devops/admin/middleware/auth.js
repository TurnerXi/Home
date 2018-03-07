export default function ({ store, error, route, redirect, isServer }) {
  let token = store.state.token
  // if (!token) {
  //   token = localStorage.getItem('token')
  //   store.commit('SET_USER', token)
  // }
  if (!token && route.path !== '/login' && route.path !== '/registry') {
    return redirect('/login')
  }
}
