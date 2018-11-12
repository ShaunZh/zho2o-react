/**
 *
 * ActivityListPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class ActivityListPage extends React.Component {
  render() {
    return <div />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'activityListPage', saga });

export default compose(
  withSaga,
  withConnect,
)(ActivityListPage);
