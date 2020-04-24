import axios from 'axios';
import mainVue from '@/main';


let cancelList = [];//用于存放所有请求
// 全局配置
const axiosConfig = {
  baseURL: '/cloud/api',
  timeout: 600000,
  // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
};


const instace = axios.create(axiosConfig);
const CancelToken = axios.CancelToken;//取消请求

// 添加请求拦截器
instace.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 删除get参数中为空的参数
  if(config.params){
    Object.keys(config.params).forEach(key=>{
      if(typeof config.params[key] == 'number' && !config.params[key].toString()){
        delete config.params[key]
      }else if(typeof config.params[key] == 'string' && !config.params[key]){
        delete config.params[key]
      }
    })
  }
  return config;
}, function (error) {
  mainVue.$Message.error('接口请求报错了...嗯...');
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
instace.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response.data);
  }
  // return response;
}, function (error) {

  // 对响应错误做点什么
  // console.log(error,'error');
  // console.log(error.response);
  // console.log(error.response.status);
  // console.log(error.response.headers);
  let errorData = {
    msg: '接口响应失败'
  };
  if(error && error.response && error.response.data && typeof error.response.data === 'object'){
    errorData = error.response.data;
  }

  return Promise.reject(errorData);
});


const ajaxBase = (method, url, params, data) => {
  return instace({
    method,
    url,
    params,
    data,
    cancelToken: new CancelToken(function (cancel) {
      cancelList.push(cancel);
    })
  }).then(response=>{
    return Promise.resolve(response)
  }).catch(error=>{
    console.log(error.msg,'error');
    mainVue.$Message.error(error.msg || 'error');
    return Promise.reject(error)
  });
};


const ajaxGet = (url, params) => {
  return ajaxBase('get', url, params);
};

const ajaxPost = (url, params, data) => {
  return ajaxBase('post', url, params, data);
};

const ajaxPut = (url, data) => {
  return ajaxBase('put', url, {}, data);
};

const ajaxDelete = (url, data) => {
  return ajaxBase('delete', url, {}, data);
};

export default {
  ajaxGet,
  ajaxPost,
  ajaxPut,
  ajaxDelete,
}

