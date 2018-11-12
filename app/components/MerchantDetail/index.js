/**
 *
 * BusinessDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddressInfo from '../AddressInfo';
import Mobile from '../Mobile';
import CouponList from '../CouponList';

import storeIcon from '../../images/icon_store.png';
import Header from '../../components/Header';

const BkImg = styled.img`
  width: 100%;
  height: 180px;
`;

const Sell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  > p {
    margin-bottom: 17px;
  }
`;

const IconStore = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;

const Addr = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px 10px;
  margin-bottom: 10px;
  background-color: #fff;
`;

function BusinessDetail(props) {
  const navBack = window.history.back;
  return (
    <div>
      <Header title={props.name} back={navBack} />
      <BkImg src={props.bkImg} />
      <Addr>
        <AddressInfo address={props.address} kilometer={props.kilometer} />
        <Mobile />
      </Addr>
      <Sell>
        <p>
          <IconStore src={storeIcon} alt="门店图标" />
          <span className="fs-14 fc-333">门店优惠</span>
        </p>
        <CouponList couponList={props.couponList} />
      </Sell>
    </div>
  );
}

BusinessDetail.propTypes = {
  name: PropTypes.string.isRequired, // 商家名称
  bkImg: PropTypes.string, // 商家背景图片
  address: PropTypes.string, // 地址信息
  kilometer: PropTypes.string, // 距离
  couponList: PropTypes.array, // 票券列表
};

export default BusinessDetail;
