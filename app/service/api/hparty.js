/**
 * @Author: Hexon
 * @Date: 2018/11/18 下午10:39
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/18 下午10:39
 * @description:
 */

import axios from '../../plugins/axios';

export default {
  getInitData: () => axios.get('/hparty/initData'), // 获取大手牵小手初始化数据
  getMerDetail: merSeq => axios.get(`/hparty/getMerDetail/${merSeq}`), // 获取商家详情
  getCouponDetail: couponSeq =>
    axios.get(`/hparty/getCouponDetail/${couponSeq}`), // 获取票券详情
  payCoupon: payInfo => axios.post(`/hparty/payCoupon`, { ...payInfo }), // 购买票券
  getActivityList: categorySeq =>
    axios.get(`/hparty/getActivityList/${categorySeq}`), // 获取指定分类的活动列表
};
