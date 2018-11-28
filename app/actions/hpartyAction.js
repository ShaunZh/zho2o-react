/**
 * @Author: Hexon
 * @Date: 2018/11/27 下午10:17
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/27 下午10:17
 * @description: 大手牵小手action模块
 */
import { types } from '../constants/hpartyTypes';
import { createActions } from '../utils/common';

// 获取初始化数据
export const fetchInitData = createActions([
  types.INIT_DATA_FETCH_REQUEST,
  types.INIT_DATA_FETCH_SUCCESS,
  types.INIT_DATA_FETCH_REQUEST,
]);

// 获取商家详情
export const fetchMerDetail = createActions([
  types.MER_DETAIL_FETCH_REQUEST,
  types.MER_DETAIL_FETCH_SUCCESS,
  types.MER_DETAIL_FETCH_FAILURE,
]);

// 获取票券详情
export const fetchCoupDetail = createActions([
  types.COUP_DETAIL_FETCH_REQUEST,
  types.COUP_DETAIL_FETCH_SUCCESS,
  types.COUP_DETAIL_FETCH_FAILURE,
]);

// 获取分类商家列表
export const fetchMerList = createActions([
  types.MER_LIST_FETCH_REQUEST,
  types.MER_LIST_FETCH_SUCCESS,
  types.MER_LIST_FETCH_FAILURE,
]);

export const createOrder = createActions([
  types.ORDER_CREATE_REQUEST,
  types.ORDER_CREATE_SUCCESS,
  types.ORDER_CREATE_FAILURE,
]);
