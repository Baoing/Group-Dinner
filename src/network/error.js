
import { Toast } from "vant";

//错误信息的响应方法
export const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      //请求头和服务器的限制
      Toast("服务器不理解请求的语法");
      break;

    case 401:
      //toke验证失败，用户身份验证失效
      Toast("(未授权) 请求要求身份验证");
      break;

    case 403:
      //用户身份过期了，服务器请求限制
      Toast("(禁止) 服务器拒绝请求");
      break;

    case 404:
      //网络请求地址错误
      Toast("(未找到) 服务器找不到请求网页");
      break;

    default:
      Toast(other);
      break;
  }
}