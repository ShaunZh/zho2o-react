/**
 * @Author: Hexon
 * @Date: 2018/11/11 下午10:40
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/11 下午10:40
 * @description:
 */

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import MerchantDetail from '../../components/MerchantDetail';

const axiosInstance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5be1ab1a19266809d2d80bfd',
  timeout: 10000,
});

export default class MerchantDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', // 商家名称
      bkImg: '', // 背景图片
      address: '', // 地址信息
      kilometer: '', // 公里
      couponList: [], // 票券列表
    };
  }
  componentDidMount() {
    axiosInstance
      .get(`/hparty/getMerDetail/${this.props.match.params.merchantSeq}`)
      .then(res => {
        if (res.data.code === 200) {
          const { name, bkImg, address, kilometer, couponList } = res.data.data;
          this.setState({
            name,
            bkImg,
            address,
            kilometer,
            couponList,
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="page-merchant-detail">
        <MerchantDetail
          name={this.state.name}
          bkImg={this.state.bkImg}
          address={this.state.address}
          kilometer={this.state.kilometer}
          couponList={this.state.couponList}
        />
      </div>
    );
  }
}

MerchantDetailPage.propTypes = {
  match: PropTypes.object,
};
