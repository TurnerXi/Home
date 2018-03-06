export default function ({ store, route, error }) {
  if (!store.state.authUser && route.path !== '/login' && route.path !== '/registry') {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
