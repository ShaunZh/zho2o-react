/**
 *
 * CouponList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Coupon from '../Coupon';

const Ul = styled.ul`
  margin: 0 auto;
  > li {
    margin-bottom: 10px;
  }
`;

function CouponList(props) {
  const couponList = props.couponList.map(item => (
    <Coupon
      couponId={item.couponId}
      title={item.title}
      amount={item.amount}
      count={item.count}
      range={item.range || ''}
      payMethod={item.payMethod}
      key={item.couponId}
    />
  ));
  return <Ul>{couponList}</Ul>;
}

CouponList.propTypes = {
  couponList: PropTypes.array.isRequired,
};

export default CouponList;
