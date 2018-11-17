/**
 * @Author: Hexon
 * @Date: 2018/11/13 上午12:05
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/13 上午12:05
 * @description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';

import PayCoupon from '../../components/PayCoupon';
const axiosInstance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5be1ab1a19266809d2d80bfd',
  timeout: 10000,
});

export default class PaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', // 票券名称
      price: 0, // 单价
      method: '', // 支付方式
      startTime: '',
      endTime: '',
      couponId: '',
    };
  }
  componentDidMount() {
    axiosInstance
      .get(`/hparty/getCouponDetail/${this.props.match.params.couponId}`)
      .then(res => {
        if (res.data.code === 200) {
          const {
            title,
            startTime,
            endTime,
            price,
            payMethod,
            couponId,
          } = res.data.data;
          this.setState({
            title,
            startTime,
            endTime,
            price,
            couponId,
            method: payMethod,
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  handlePay = count => {
    axiosInstance
      .post(`/hparty/payCoupon`, {
        couponId: this.state.couponId,
        count,
        payMethod: this.state.method,
        amount: this.state.count * this.state.price,
      })
      .then(res => {
        if (res.body.code !== 200) {
          throw new Error(res.body.msg);
        }
        const { orderNumber } = res.body.data; // 订单编号
        const history = createHistory();
        history.replace('/hparty/paymentResult', {
          orderNumber,
        });
        console.log('购买成功');
      })
      .catch(err => {
        console.error(err.message);
      });
  };
  render() {
    return (
      <div className="page-payment">
        <PayCoupon
          title={this.state.title}
          price={this.state.price}
          method={this.state.method}
          startTime={this.state.startTime}
          endTime={this.state.endTime}
          remain={1000}
          handleClick={() => this.handlePay()}
        />
      </div>
    );
  }
}

PaymentPage.propTypes = {
  match: PropTypes.object,
};
