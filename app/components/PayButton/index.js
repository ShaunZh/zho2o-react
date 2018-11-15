/**
 *
 * PayButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import bgTab from '../../images/bg_tab.png';

const Button = styled.button`
  width: 100%;
  padding: 17px 0;
  font-size: 15px;
  text-align: center;
  background-image: url(${bgTab});
  background-size: cover;
`;

function PayButton(props) {
  return <Button onClick={() => props.handleClick()}>立即兑领</Button>;
}

PayButton.propTypes = {
  handleClick: PropTypes.func,
};

export default PayButton;
