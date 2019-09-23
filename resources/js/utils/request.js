import axios from 'axios'
import { Dialog } from 'vant';

/**
 * 创建axios对象
 *
 * @type {AxiosInstance}
 */
const service = axios.create({
    baseURL: process.env.API_DOMAIN,
    timeout: 30000,
    'Content-Type': 'application/json'
});

// 请求拦截器 请求之前
service.interceptors.request.use(function(config) {
    console.log(config)
    return config

});

// 响应拦截器 响应处理之前
service.interceptors.response.use(function(response) {
    if (response.data.code !== 200) {
        Dialog.alert({
            title: '警告',
            message: response.data.message,
        });
    }
    return response
});

export default service
