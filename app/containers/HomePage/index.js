/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import HomeMenuItem from '../../components/HomeMenuItem';

import HeaderImgInfo from '../../components/HeaderImgInfo';
import bkImg from '../../images/bg_shouye@3x.png';
import qianshou from '../../images/icon_qianshou@3x.png';
import party from '../../images/icon_quwan@3x.png';
import kefu from '../../images/icon_kefu@3x.png';
import huiju from '../../images/icon_huijushequ@3x.png';
import jingcai from '../../images/icon_jingcaishequ@3x.png';
import geren from '../../images/icon_gerenzhongxin@3x.png';
import business from '../../images/icon_shangjia@3x.png';

import headerImg from '../../images/icon_header.png';
import menuWrapImg from '../../images/bg_icon@3x.png';

const Div = styled.div`
  background-image: url(${bkImg});
  background-size: cover;
`;

const MenuWrap = styled.div`
  width: 90%;
  height: 412px;
  margin: 0 auto;
  background-image: url(${menuWrapImg});
  background-size: cover;
  padding: 40px 10px 0 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Div className="page-home">
        <HeaderImgInfo imgUrl={headerImg} username="张小虾" />
        <MenuWrap className="menu-wrap">
          <HomeMenuItem imgUrl={qianshou} title="大手牵小手" />
          <HomeMenuItem imgUrl={party} title="玩趣地点" />
          <HomeMenuItem imgUrl={kefu} title="我的客服" />
          <HomeMenuItem imgUrl={huiju} title="惠聚社区" />
          <HomeMenuItem imgUrl={jingcai} title="精彩社区" />
          <HomeMenuItem imgUrl={geren} title="个人中心" />
          <HomeMenuItem imgUrl={business} title="我是商家" />
        </MenuWrap>
      </Div>
    );
  }
}
