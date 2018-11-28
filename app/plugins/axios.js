/**
 * @Author: Hexon
 * @Date: 2018/11/25 上午12:00
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/25 上午12:00
 * @description:
 */
import axios from 'axios';
import { AXIOS_DEFAULT_CONFIG } from '../config';
import {
  requestSuccessFunc,
  requestFailFunc,
  responseSuccessFunc,
  responseFailFunc,
} from '../config/interceptors/axios';

const axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG);

axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc);
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc);

export default axiosInstance;
