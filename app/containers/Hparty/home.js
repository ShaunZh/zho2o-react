/**
 *
 * Hparty
 *
 */

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import HeaderNoBk from '../../components/HeaderNoBk';
import ActivityList from '../../components/ActivityList';
import NavList from '../../components/NavList';
import SimpleTitle from '../../components/SimpleTitle';

import iconGolf from '../../images/icon_golf.png';
import iconRiding from '../../images/icon_riding.png';
import iconSword from '../../images/icon_sword.png';
import iconChildren from '../../images/icon_children.png';

const axiosInstance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5be1ab1a19266809d2d80bfd',
  timeout: 10000,
});

const BkImg = styled.img`
  width: 100%;
  height: 180px;
`;

const ActiDiv = styled.div`
  margin-top: 12px;
  background-color: #fff;
`;

/* eslint-disable react/prefer-stateless-function */
export default class Hparty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: 'https://source.unsplash.com/random/428x283',
      activityList: [],
      navList: [
        {
          title: '高尔夫',
          iconUrl: iconGolf,
          categoryId: '1234',
        },
        {
          title: '马术',
          iconUrl: iconRiding,
          categoryId: '213121',
        },
        {
          title: '剑术',
          iconUrl: iconSword,
          categoryId: '13121',
        },
        {
          title: '亲子游',
          iconUrl: iconChildren,
          categoryId: '21121',
        },
      ],
    };
  }

  back = () => {
    window.history.back();
  };

  componentDidMount() {
    axiosInstance
      .get('/hparty/mainImg')
      .then(res => {
        if (res.data.code === 200) {
          this.setState({
            mainImg: res.data.data.list,
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
    axiosInstance
      .get('/hparty/activityList')
      .then(res => {
        if (res.data.code === 200) {
          this.setState({
            activityList: res.data.data.list,
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <HeaderNoBk title="大手拉小手" />
        <BkImg src={this.state.mainImg} />
        <NavList navList={this.state.navList} />
        <ActiDiv>
          <SimpleTitle title="猜你喜欢" />
          <ActivityList activityList={this.state.activityList} />
        </ActiDiv>
      </div>
    );
  }
}

Hparty.propTypes = {};
