/**
 * @Author: Hexon
 * @Date: 2018/11/7 下午11:56
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/7 下午11:56
 * @description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ActivityList from '../../components/ActivityList';
import Header from '../../components/Header';

const axiosInstance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5be1ab1a19266809d2d80bfd',
  timeout: 10000,
});

export default class ActiveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityList: [],
    };
  }

  componentDidMount() {
    axiosInstance
      .get(`/hparty/activityList/${this.props.match.params.categoryId}`)
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
      <div className="active-list">
        <Header title={this.props.location.state.title} />
        <ActivityList activityList={this.state.activityList} />
      </div>
    );
  }
}

ActiveList.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
};
