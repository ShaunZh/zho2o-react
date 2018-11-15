/**
 *
 * Coupon
 * 票券组件：带有背景颜色的
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import couponBk from '../../images/bg_coupon.png';

const Wrap = styled.div`
  background-image: url(${couponBk});
  background-size: cover;
  width: 350px;
  height: 60px;
  padding: 14px 10px 14px 18px;
  color: #fff;
`;

function CouponPay(props) {
  return (
    <Wrap>
      <p className="fs-15">{props.title}</p>
      <p className="fs-12">使用期限：{props.range}</p>
    </Wrap>
  );
}

CouponPay.propTypes = {
  title: PropTypes.string.isRequired, // 票券名
  range: PropTypes.string, // 使用范围
};

export default CouponPay;
