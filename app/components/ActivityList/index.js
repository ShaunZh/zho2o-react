/**
 *
 * ActivityList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActivityItem from '../ActivityItem';

const Ul = styled.ul`
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  background-color: #f8f8f8;
  > li {
    margin-left: 11px;
    margin-bottom: 15px;
    list-style: none;
    background-color: #fff;
    > a {
      text-decoration: none;
    }
  }
`;
function ActivityList(props) {
  const activityList = props.activityList.map(item => (
    <li key={item.title}>
      <ActivityItem
        title={item.title}
        imgUrl={item.imgUrl}
        list={item.couponList}
        count={item.receiveCount}
        merchantSeq={item.merchantSeq}
      />
    </li>
  ));
  return <Ul>{activityList}</Ul>;
}

ActivityList.propTypes = {
  activityList: PropTypes.array, // 活动列表数据
};

export default ActivityList;
