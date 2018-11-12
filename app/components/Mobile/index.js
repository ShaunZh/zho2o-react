/**
 *
 * Mobile
 *
 */

import React from 'react';
import styled from 'styled-components';

import iconMobile from '../../images/icon_mobile.png';

const Img = styled.img`
  width: 18px;
  height: 18px;
`;

function Mobile() {
  return <Img src={iconMobile} />;
}

Mobile.propTypes = {};

export default Mobile;
