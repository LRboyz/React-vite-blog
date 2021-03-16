// 统一封装axios实例
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
// import {Notification} from 'rsuite';
// import {getToken} from '../utils/set_token';

// $ 创建axios对象
const _axios: AxiosInstance = axios.create({
  timeout: 6000,
  headers: {'authorization-type': 'BASIC_AUTH'},
});

//  请求处理
const requestConfig = (config: AxiosRequestConfig) => {
  // console.log('请求响应头')
  // 原来的配置
  config = config || {};
  config.baseURL = 'http://localhost:5000/api/'; //process.env.REACT_APP_BASE_URL ??
  config.timeout = 5 * 1000;

  // // 获取access_token
  // let access_token = getToken('access_token') || {};
  // if (access_token) {
  //   // 配置请求头的auth信息 (如果这个token不存在 才进行赋值
  //   config.headers['Authorization'] =
  //     config.headers['Authorization'] || `Bearer ${access_token ?? ''}`;
  // }

  return {
    ...config,
  };
};

// 统一响应请求
const responseConfig = (config: AxiosResponse): AxiosResponse => {
  const {data, status, statusText} = config;
  return {data, status, statusText} as AxiosResponse;
};

// 请求出错
const requestError = (error: any) => {
  return Promise.reject(error);
};

// 响应出错
const responseError = (error: any) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求';
        break;
      case 401:
        error.message = '未授权，请重新登录';
        break;
      case 403:
        error.message = '拒绝访问';
        break;
      case 404:
        error.message = '请求错误,未找到该资源';
        break;
      case 405:
        error.message = '请求方法未允许';
        break;
      case 408:
        error.message = '请求超时';
        break;
      case 500:
        error.message = '服务器端出错';
        break;
      case 501:
        error.message = '网络未实现';
        break;
      case 502:
        error.message = '网络错误';
        break;
      case 503:
        error.message = '服务不可用';
        break;
      case 504:
        error.message = '网络超时';
        break;
      case 505:
        error.message = 'http版本不支持该请求';
        break;
      default:
        error.message = `连接错误${error.response.status}`;
    }
    // Notification.error({
    //   title:'出错啦！',
    //   description: error.response.data.msg
    // })
  } else {
    //  Notification.error({
    //   title:'出错啦！',
    //   description: '连接到服务器失败'
    // })
  }
  return Promise.reject(error);
};

// 添加拦截器
_axios.interceptors.request.use(requestConfig, requestError);
_axios.interceptors.response.use(responseConfig, responseError);

// 直接返回接口报错信息
export const httpError = (error: {
  message: string;
  response: {data: unknown; status: number; statusText: string};
}) => {
  // $ 请求超时
  if (error?.message?.search(/timeout/) !== -1) {
    // Notification.error({
    //   title: '错误',
    //   description: '请求超时......   ￣□￣｜｜ ',
    // });
  }
  if (`${error?.response?.status}`.search(/^5\d{2}$/) !== -1) {
    // 服务器异常
    // Notification.error({
    //   title: '错误',
    //   description: '服务器出现异常！  o(╥﹏╥)o ',
    // });
  }
  return {
    data: error?.response?.data,
    status: error?.response?.status,
    statusText: error?.response?.statusText,
  };
};

// $ 这个类型再考虑  (这个T有可能是数组 类型在考虑)
export type HttpSuccessOrErrorType = {
  data: any;
  status: number;
  statusText: string;
  error?: HttpErrorType;
};

export type HttpErrorType = {
  code?: number;
  details?: object;
  message?: string;
  statusCode?: number;
};

export default _axios;
