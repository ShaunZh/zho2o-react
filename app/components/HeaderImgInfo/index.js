/**
 *
 * HeaderImgInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-top: 55px;
`;

const P = styled.p`
  color: #fff;
  font-size: 14px;
  margin-top: 12px;
`;

const HeaderImgInfo = props => (
  <Div>
    <Img src={props.imgUrl} alt="头像" />
    <P>hello {props.username}</P>
  </Div>
);

HeaderImgInfo.propTypes = {
  imgUrl: PropTypes.string,
  username: PropTypes.string,
};

export default HeaderImgInfo;
