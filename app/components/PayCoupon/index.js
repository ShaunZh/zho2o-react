/**
 *
 * PayCoupon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Toast } from 'react-onsenui';

import CouponPay from '../CouponPay';
import PayButton from '../PayButton';
import Header from '../Header';

import iconAdd from '../../images/icon_add.png';
import iconMinus from '../../images/icon_minus.png';

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
  }
`;

const Option = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  background: #f4f4f4;
  > img {
    width: 12px;
    vertical-align: middle;
  }
`;

const Input = styled.input`
  width: 45px;
  padding: 9px 0;
  text-align: center;
  margin: 0 5px;
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > .amount {
    color: #a568fa;
  }
  > .remain {
    font-size: 10px;
    color: #999;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
`;
/* eslint-disable react/prefer-stateless-function */
class PayCoupon extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1, // 数量
      exceedRemain: false, // 超过剩余积分
    };
  }

  handleClick() {
    // 将数量传递给父元素
    this.props.handleClick(this.state.count);
  }

  render() {
    const point =
      this.props.method === 'point' ? (
        <p className="amount fs-15">
          {this.state.count * this.props.price}积分
        </p>
      ) : (
        <p className="remain">{this.state.amount * this.props.price}元</p>
      );
    const remain =
      this.props.method === 'point' ? (
        <p>当前积分余额: {this.state.remain}</p>
      ) : (
        ''
      );
    // 拼接使用期限
    const range = `使用期限：${this.props.startTime.substr(
      0,
      10,
    )} - ${this.props.endTime.substr(0, 10)}`;
    return (
      <Wrap>
        <Toast isOpen={this.state.exceedRemain}>超过您的积分</Toast>
        <Header title="订单支付页面" />
        <CouponPay title={this.props.title} range={range} />
        <Row>
          <p className="fs-15">数量</p>
          <div>
            <Option
              onClick={() =>
                this.state.count > 1 &&
                this.setState({ count: this.state.count - 1 })
              }
            >
              <img src={iconAdd} alt="icon_add" />
            </Option>
            <Input type="text" value={this.state.count} />
            <Option
              onClick={() =>
                (this.state.count + 1) * this.state.price < this.props.remain
                  ? this.setState({ count: this.state.count + 1 })
                  : this.setState({ exceedRemain: true })
              }
            >
              <img src={iconMinus} alt="icon_minus" />
            </Option>
          </div>
        </Row>
        <Row>
          <p className="fs-15">支付金额</p>
          <Total>
            {point}
            {remain}
          </Total>
        </Row>
        <Bottom>
          <PayButton handleClick={() => this.handleClick()} />
        </Bottom>
      </Wrap>
    );
  }
}

PayCoupon.propTypes = {
  title: PropTypes.string, // 票券标题
  price: PropTypes.string, // 票券单价
  startTime: PropTypes.string, // 票券使用起始时间
  endTime: PropTypes.string, // 票券使用结束时间
  remain: PropTypes.number, // 账户剩余金额
  method: PropTypes.string, // 支付方式
  handleClick: PropTypes.func, // 处理点击事件
};

export default PayCoupon;
