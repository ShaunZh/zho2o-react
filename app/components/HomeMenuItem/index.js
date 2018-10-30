/**
 *
 * HomeMenuItem
 * 首页菜单项
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Div = styled.div`
  width: 100px;
  height: 100px;
  //margin-right: 10px;
  text-align: center;
`;

const P = styled.p`
  color: #5b5e5c;
  font-size: 15px;
`;

const HomeMenuItem = props => (
  <Div className="homeMenuItem">
    <Img src={props.imgUrl} alt="headImg" />
    <P className="title"> {props.title} </P>
  </Div>
);

HomeMenuItem.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default HomeMenuItem;
