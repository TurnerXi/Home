import axios from 'axios'
import qs from 'qs'
const err_code = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: `请求地址出错`,
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}

const axio = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 2000
});

// 拦截request,设置全局请求为ajax请求
axio.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.withCredentials = true;
  return config;
})

axio.interceptors.response.use((response) => {
  return response;
}, (err) => {
  if (err && err.response) {
    err.message = err_code(err.response.status)
  }
  return Promise.reject(err)
});



export default {
  get: (url, params) => {
    return axio.get(url, { params });
  },
  post: (url, formdata) => {
    let data = {};
    let it = formdata.entries();
    let next;
    while (next = it.next().value) {
      data[next[0]] = next[1];
    }
    return axio.post(url, qs.stringify(data), {
      headers: {  'Content-Type': 'application/x-www-form-urlencoded' }
    });
  },
  getStream: (url, params) => {
    return axio.get(url, { params, responseType: 'arraybuffer' });
  }
}
