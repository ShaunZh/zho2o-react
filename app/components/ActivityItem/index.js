/**
 *
 * FamilyActivityItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  width: 170px;
  padding-bottom: 22px;
  background-color: #fff;
  > &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  height: 140px;
  width: 100%;
`;

const P = styled.p`
  width: 150px;
  margin: 10px auto;
  font-size: 15px;
  color: #333333;
`;

const Ul = styled.ul`
  width: 150px;
  margin: 0 auto;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
`;

const CSpan = styled.span`
  font-size: 11px;
  border-radius: 50%;
  background-color: #ffc938;
  color: #fff;
`;

const NSpan = styled.span`
  margin-left: 6px;
  font-size: 12px;
  color: #666666;
`;

const PSpan = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 11px;
  color: #999;
`;

const ActivityItem = props => {
  const couponLi = props.list.map(item => (
    <Li key={item.name}>
      <CSpan>券</CSpan>
      <NSpan>{item.name}</NSpan>
    </Li>
  ));
  return (
    <Div>
      <Img src={props.imgUrl} />
      <P>{props.title}</P>
      <Ul>{couponLi}</Ul>
      <PSpan>已领{props.count}</PSpan>
    </Div>
  );
};

ActivityItem.propTypes = {
  imgUrl: PropTypes.string, // 活动图片
  title: PropTypes.string, // 票券名
  list: PropTypes.array, // 票券列表
  count: PropTypes.number, // 已领
};

export default ActivityItem;
