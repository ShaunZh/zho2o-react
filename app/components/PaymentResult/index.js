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

/* eslint-disable react/prefer-stateless-function */
const PaymentResult = props => {
  // const handleClick = () => {
  //   // 将数量传递给父元素
  //   props.handleClick(this.state.count);
  // };
  const range = `使用期限：${props.startTime.substr(
    0,
    10,
  )} - ${props.endTime.substr(0, 10)}`;

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
      <CouponPay title={props.title} range={range} />
    </Wrap>
  );
};

PaymentResult.propTypes = {
  title: PropTypes.string, // 票券标题
  orderNumber: PropTypes.string, // 票券单价
  startTime: PropTypes.string, // 票券使用起始时间
  endTime: PropTypes.string, // 票券使用结束时间
  amount: PropTypes.number, // 账户剩余金额
};

export default PaymentResult;
