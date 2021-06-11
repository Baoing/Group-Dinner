// api接口统一管理
import {get,post} from './http'

const BASE = '/'
const _mall_id = 1

/**
 * params {type,mobile,password}
 * */

// 登录
export const login = (params) => post(BASE+`?_mall_id=1&r=api/passport/login`,params);

// 获取用户信息
export const getUserInfo =  () => get(BASE, {
  _mall_id,
  r: 'api/user/user-info'
});

// 请求商户列表
export const getStore = () => get(BASE, {
  _mall_id,
  r: 'plugin/mch/api/mch/store-list'
});

/**
 * params {mch_id}
 * */
// 获取某个商户下的商品列表
export const getGoods = (params) => get(BASE, Object.assign({
  _mall_id,
  r: 'plugin/mch/api/goods/index'
}, params));