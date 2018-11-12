/**
 *
 * Header
 * 头部导航栏
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import arrowLeft from '../../images/icon_arrow_left.png';

const Div = styled.div`
  width: 100%;
  background: transparent;
`;
const Img = styled.img`
  height: 17px;
  width: 9px;
  position: absolute;
  left: 10px;
  top: 16px;
`;

const Span = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 16px;
  color: #fff;
`;

function Header(props) {
  return (
    <Div>
      <Img
        src={arrowLeft}
        onClick={() => (props.back ? props.back() : window.history.back())}
      />
      <Span>{props.title}</Span>
    </Div>
  );
}

Header.propTypes = {
  back: PropTypes.func,
  title: PropTypes.string,
};

export default Header;
