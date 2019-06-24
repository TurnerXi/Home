export default function ({ store, error, route, redirect }) {
  if (!store.state.authUser && route.path !== '/login' && route.path !== '/registry') {
    return redirect('/login')
  }
}
