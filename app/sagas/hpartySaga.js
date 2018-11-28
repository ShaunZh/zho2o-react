/**
 * @Author: Hexon
 * @Date: 2018/11/27 下午10:25
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/27 下午10:25
 * @description: hparty模块 saga
 */
import { put, call } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

import types from '../constants/hpartyTypes';
import api from '../service/api/hparty';
import {
  fetchInitData,
  fetchMerDetail,
  // fetchCoupDetail,
  // fetchMerList,
  // createOrder,
} from '../actions/hpartyAction';

// 获取初始化数据
function* fetchInitDataTask() {
  try {
    const payload = yield call(api.getInitData); // 调用fetch init data api
    yield put(fetchInitData.success, payload); // 触发fetch init data success action
  } catch (e) {
    yield put(fetchInitData.failure, e.message); // 触发fetch init data failure action
  }
}

function* watchFetchInitData() {
  yield* takeLatest(types.INIT_DATA_FETCH_REQUEST, fetchInitDataTask); // 监听 fetch init data
}

// 获取商家详情
function* fetchMerDetailTask(action) {
  try {
    const { merSeq } = action;
    const payload = yield call(api.getMerDetail(merSeq));
    yield put(fetchMerDetail.success, payload);
  } catch (e) {
    yield put(fetchMerDetail.failure, e.message);
  }
}

function* watchFetchMerDetail() {
  yield* takeLatest(types.MER_DETAIL_FETCH_REQUEST, fetchMerDetailTask);
}

export default function* hpartySaga() {
  yield [watchFetchInitData(), watchFetchMerDetail()];
}
