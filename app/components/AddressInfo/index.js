/**
 *
 * AddressInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import iconMap from '../../images/icon_map.png';

const Img = styled.img`
  width: 15px;
  height: 18px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  width: 264px;
  margin-left: 12px;

  > span {
    line-height: 20px;
  }
`;

function AddressInfo(props) {
  return (
    <Wrap>
      <Img src={iconMap} />
      <Div>
        <span>{props.address}</span> |
        <span className="fc-999">距您{props.kilometer} km</span>
      </Div>
    </Wrap>
  );
}

AddressInfo.propTypes = {
  address: PropTypes.string.isRequired, // 地址
  kilometer: PropTypes.string, // 公里
};

export default AddressInfo;
