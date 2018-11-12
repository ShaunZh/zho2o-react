/**
 *
 * Coupon
 * 票券组件：带有背景颜色的
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import couponBk from '../../images/bg_coupon.png';

const Li = styled.li`
  > a {
    text-decoration: none;
  }
`;

const Wrap = styled.div`
  background-image: url(${couponBk});
  background-size: cover;
  width: 350px;
  height: 60px;
  padding: 14px 10px 14px 18px;
`;

const Top = styled.div`
  display: flex;
  color: #fff;
`;

const Bottom = styled.div`
  display: flex;
  color: #fff;
  font-size: 12px;
`;

const Title = styled.div`
  flex-grow: 2;
`;

const Amount = styled.div`
  padding: 5px 6px;
  border-radius: 6px;
  border: 1px solid #ffffff;
`;

const Range = styled.div`
  flex-grow: 2;
`;

function Coupon(props) {
  const payMethod = props.payMethod ? '积分兑领' : '元兑领';
  // 支付信息
  const payInfo =
    props.amount === 0 ? '免费兑领' : `${props.amount}${payMethod}`;
  return (
    <Li>
      <Link to={`/hparty/payment/${props.couponId}`}>
        <Wrap>
          <Top>
            <Title className="fs-15">{props.title}</Title>
            <Amount className="fs-12">{payInfo}</Amount>
          </Top>
          <Bottom>
            <Range>{props.range}</Range>
            <div>已领 {props.count}</div>
          </Bottom>
        </Wrap>
      </Link>
    </Li>
  );
}

Coupon.propTypes = {
  couponId: PropTypes.string.isRequired, // 票券ID
  title: PropTypes.string.isRequired, // 票券名
  range: PropTypes.string, // 使用范围
  amount: PropTypes.number.isRequired, // 金额
  payMethod: PropTypes.bool, // 支付方式
  count: PropTypes.number, // 已兑换数量
};

export default Coupon;
