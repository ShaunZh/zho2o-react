/**
 *
 * NavCateItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 46px;
    height: 46px;
    margin-bottom: 10px;
  }
`;

function NavCateItem(props) {
  return (
    <Link
      to={{
        pathname: `/hparty/activityList/${props.categoryId}`,
        state: { title: props.title },
      }}
    >
      <Div>
        <img src={props.iconUrl} alt="图标" />
        <p className="fs-15 fc-333">{props.title}</p>
      </Div>
    </Link>
  );
}

NavCateItem.propTypes = {
  iconUrl: PropTypes.string.isRequired, // icon URL
  title: PropTypes.string.isRequired, // 名称
  categoryId: PropTypes.string.isRequired, // 分类Id
};

export default NavCateItem;
