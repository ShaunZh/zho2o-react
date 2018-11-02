/**
 *
 * Personal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPersonal from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Personal extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Personal</title>
          <meta name="description" content="Description of Personal" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Personal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  personal: makeSelectPersonal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'personal', reducer });
const withSaga = injectSaga({ key: 'personal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Personal);
