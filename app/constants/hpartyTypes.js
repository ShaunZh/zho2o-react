/**
 * @Author: Hexon
 * @Date: 2018/11/27 下午9:59
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/27 下午9:59
 * @description: 大手牵小手模块常量
 */
import { createConstants } from '../utils/common';

export default createConstants(
  // 获取初始化数据
  'INIT_DATA_FETCH_REQUEST',
  'INIT_DATA_FETCH_SUCCESS',
  'INIT_DATA_FETCH_FAILURE',

  // 获取商家详情
  'MER_DETAIL_FETCH_REQUEST',
  'MER_DETAIL_FETCH_SUCCESS',
  'MER_DETAIL_FETCH_FAILURE',

  // 票券详情
  'COUP_DETAIL_FETCH_REQUEST',
  'COUP_DETAIL_FETCH_SUCCESS',
  'COUP_DETAIL_FETCH_FAILURE',

  // 获取分类商家列表
  'MER_LIST_FETCH_REQUEST',
  'MER_LIST_FETCH_SUCCESS',
  'MER_LIST_FETCH_FAILURE',

  // 购买票券
  'ORDER_CREATE_REQUEST',
  'ORDER_CREATE_SUCCESS',
  'ORDER_CREATE_FAILURE',
);
