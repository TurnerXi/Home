export default function ({ store, route, redirect }) {
  if (process.server || !window) return
  if (!store.getters.is_login) {
    return redirect('/login')
  }
}
