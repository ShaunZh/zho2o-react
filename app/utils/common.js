/**
 * @Author: Hexon
 * @Date: 2018/11/27 下午9:52
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/27 下午9:52
 * @description:
 */

/**
 * @description 创造actions
 * @param
 * @return
 */
export const createActions = types => ({
  request(payload) {
    return {
      type: types[0],
      payload,
    };
  },
  success(payload) {
    return {
      type: types[1],
      payload,
    };
  },
  failure(error) {
    return {
      type: types[2],
      error: error || 'Someting bad happend',
    };
  },
});

/**
 * @description 创造常量
 * @param
 * @return
 */
export const createConstants = (...constants) =>
  constants.reduce((acc, constant) => ({
    ...acc,
    [constant]: constant,
  }));
