/**
 *
 * PayCoupon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CouponPay from '../CouponPay';
import Header from '../Header';

const Wrap = styled.div`
  padding: 20px 12px 0 12px;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  &:nth-child(1) {
    border-bottom: 1px solid #e3e1e1;
    color: #666;
  }
  &.order-number {
    color: #333;
  }
  &.order-amount {
    color: #a568fa;
  }
`;

const Ul = styled.ul`
  margin: 25px auto;
`;

/* eslint-disable react/prefer-stateless-function */
const PaymentResult = props => {
  // 点击票券的操作函数
  const handleClick = couponNumber => {
    props.handleClick(couponNumber);
  };
  // 票券列表
  const couponList = props.couponList.map(item => {
    const range = `使用期限：${item.startTime.substr(
      0,
      10,
    )} - ${item.endTime.substr(0, 10)}`;

    return (
      <li>
        <CouponPay
          title={item.title}
          tipLeft={range}
          optionName="立即使用"
          handleClick={() => handleClick(item.couponNumber)}
        />
      </li>
    );
  });
  // 拼接使用期限
  return (
    <Wrap>
      <Header title="支付结果" />
      <Row className="order-number">
        <p>订单编号</p>
        <p>{props.orderNumber}</p>
      </Row>
      <Row className="order-amount">
        <p className="fs-15">支付金额</p>
        <p>{props.amount}</p>
      </Row>
      <Ul>{couponList}</Ul>
    </Wrap>
  );
};

PaymentResult.propTypes = {
  orderNumber: PropTypes.string, // 订单编号
  amount: PropTypes.number, // 账户剩余金额
  couponList: PropTypes.array, // 票券列表
  handleClick: PropTypes.func, // 点击事件
};

export default PaymentResult;
