/**
 *
 * NavCateItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 46;
    height: 46px;
    margin-bottom: 10px;
  }
`;

function NavCateItem(props) {
  return (
    <Div onClick={props.handleClick}>
      <img src={props.iconUrl} alt="图标" />
      <p className="fs-15 fc-333">{props.title}</p>
    </Div>
  );
}

NavCateItem.propTypes = {
  iconUrl: PropTypes.string.isRequired, // icon URL
  title: PropTypes.string.isRequired, // 名称
  handleClick: PropTypes.func, // 点击处理函数
};

export default NavCateItem;
