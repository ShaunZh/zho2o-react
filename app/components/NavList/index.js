/**
 *
 * NavList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavCateItem from '../NavCateItem';

const Ul = styled.ul`
  display: flex;
  background-color: #fff;
  padding: 22px 0 20px 26px;
  > li {
    margin-right: 45px;
    list-style: none;
  }
`;

function NavList(props) {
  const navList = props.navList.map(item => (
    <li key={item.iconUrl}>
      <NavCateItem
        title={item.title}
        iconUrl={item.iconUrl}
        handleClick={item.handleClick}
      />
    </li>
  ));
  return <Ul>{navList}</Ul>;
}

NavList.propTypes = {
  navList: PropTypes.array.isRequired, // 导航列表
};

export default NavList;
