import Router from 'koa-router'

import index from '../api/index'
import users from '../api/users'

const router = new Router({
  prefix: "/api"
})

// routes definition
router.use(index.routes(), index.allowedMethods());
router.use(users.routes(), users.allowedMethods());

export default router
