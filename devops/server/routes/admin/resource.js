const router = require('koa-router')()
const ResourceService = require('../../service/Resource')
const service = new ResourceService()

router.prefix('/resource')

router.post('/', async (ctx, next) => {
  ctx.body = [
    { name: '系统管理', path: '', folder: true, icon: '', children: [
      {name: '管理员资源', path: '', folder: true, icon: '', children: [
        {name: '管理员列表', path: '/system/admin/user', folder: false, icon: '', children: []},
        {name: '管理员角色', path: '/system/admin/role', folder: false, icon: '', children: []},
        {name: '后台链接树', path: '/system/admin/resource', folder: false, icon: '', children: []}
      ]}
    ]},
    { name: '', path: '', folder: true, icon: '', children: []},
    { name: '', path: '', folder: true, icon: '', children: []},
    { name: '', path: '', folder: true, icon: '', children: []},
    { name: '', path: '', folder: true, icon: '', children: []},
    { name: '', path: '', folder: true, icon: '', children: []},
    { name: '', path: '', folder: true, icon: '', children: []},
  ]
})

router.get('/init', async (ctx, next) => {
  service.init()
})

module.exports = router
