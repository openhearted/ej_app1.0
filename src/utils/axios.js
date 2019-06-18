import axios from 'axios';
import {Toast} from 'antd-mobile'
import qs from 'qs'
// 1. axios的默认配置
axios.defaults.baseURL = "http://129.211.69.98:8888"
axios.defaults.headers["Content-Type"]= "application/x-www-form-urlencoded";


// 2. 拦截器配置
axios.interceptors.request.use((config)=>{
  if(config.method === "post"){
    // 将js对象转换为查询字符串
    //config.data = qs.stringify(config.data,{ arrayFormat: 'repeat' })
    config.data = qs.stringify(config.data,{ allowDots: true })
  }
  return config;
})
axios.interceptors.response.use((response)=>{
  let {data} = response;
  response.status = data.status;
  response.statusText = data.message;
  response.data = data.data;
  //判断状态码，如果为200,表示成功，如果不为200提示错误消息
  if(data.status !== 200){
    Toast.fail(data.message)
    return Promise.reject(response);
  }
  return response;
},(error)=>{
  Toast.fail("服务端异常")
  return Promise.reject(error);
})

export default axios;