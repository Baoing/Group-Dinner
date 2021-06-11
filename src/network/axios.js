import axios from 'axios'
import qs from "qs"
import {BASEURL, TIMEOUT} from './base'
import {errorHandle} from './error'
import { Toast } from "vant"
import store from '@/store'

const ACCESS_TOKEN = store.getters['user/token']

const instance = axios.create({
  timeout: TIMEOUT
})

instance.defaults.baseURL = BASEURL;

// 每次请求在请求头是否带token
instance.defaults.headers.common["x-app-platform"] = 'mobile';

instance.interceptors.request.use(config => {
    // 添加token
    if (ACCESS_TOKEN) config.headers["x-access-token"] = ACCESS_TOKEN;
    // post参数处理
    if (config.method === "post") config.data = qs.stringify(config.data);

    return config;
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  /**
   * 成功和失败的判断
   * 1.请求成功和请求失败
   * 2.请求成功：结果的成功和结果的失败
   */
  response => response.status === 200?Promise.resolve(response) : Promise.reject(response),
  error => {
    const {response} = error;   //es6结构赋值
    /**
     * response 包含信息：
     * status
     * data
     */
    if (response){
      //给开发者具体错误的信息
      errorHandle(response.status , response.data);
      return Promise.reject(response);
    }else{
      Toast("请求中断或者断网了");
    }
  }
)

export default instance