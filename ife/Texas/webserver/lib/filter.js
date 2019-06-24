module.exports = {
  resFormat: async function (ctx, next) {
    try {
      ctx.body = {}
      await next()
      if (!Buffer.isBuffer(ctx.body)) {
        ctx.body = { 'code': ctx.body.flag, 'msg': ctx.body.msg };
      }
    } catch (e) {
      ctx.body = { 'code': e.code, 'msg': "接口请求错误：" + e.msg }
      if (e.code) {
        console.error(e.code, "接口请求错误：" + e.msg);
      } else {
        throw e;
      }

    }
  }
}
