/**
 *
 * Header
 * 头部导航栏
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import bgTab from '../../images/bg_tab.png';
import arrowLeft from '../../images/icon_arrow_left.png';

const Div = styled.div`
  background-image: url(${bgTab});
  background-size: cover;
  text-align: center;
  height: 50px;
  line-height: 50px;
  position: relative;
  color: #fff;
`;

const Img = styled.img`
  height: 17px;
  width: 9px;
  position: absolute;
  left: 10px;
  top: 16px;
`;

function Header(props) {
  return (
    <Div>
      <Img src={arrowLeft} onClick={props.back} />
      <span>{props.title}</span>
    </Div>
  );
}

Header.propTypes = {
  back: PropTypes.func,
  title: PropTypes.string,
};

export default Header;
