export default {
  install: function (Vue, options) {
    /**
     * 将文件流转换为base64图片编码
     * @param  {[type]} buffer [description]
     * @return {[type]}        [description]
     */
    Vue.transBufferToImageCode = Vue.prototype.transBufferToImageCode = function (buffer) {
      return 'data:image/png;base64,' + btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    }
    // // 2. 添加全局资源
    // Vue.directive('my-directive', {
    //   bind(el, binding, vnode, oldVnode) {
    //     // 逻辑...
    //   }
    // })
    // // 3. 注入组件
    // Vue.mixin({
    //   created: function () {
    //     // 逻辑...
    //   }
    // })
    // // 4. 添加实例方法
    // Vue.prototype.$myMethod = function (methodOptions) {
    //   // 逻辑...
    // }
  }
}
