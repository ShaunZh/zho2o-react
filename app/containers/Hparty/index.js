import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home';
import ActivityList from './activeList';
import MerchantDetail from './merchantDetail';
import Payment from './payment';

const Hparty = props => (
  <div className="hparty">
    <Switch>
      <Route path={`${props.match.path}`} exact component={Home} />
      <Route
        path={`${props.match.path}/activityList/:categoryId`}
        component={ActivityList}
      />
      <Route
        path={`${props.match.path}/merDetail/:merchantSeq`}
        component={MerchantDetail}
      />
      <Route
        path={`${props.match.path}/payment/:couponId`}
        component={Payment}
      />
      <Redirect to={`${props.match.url}`} />
    </Switch>
  </div>
);

Hparty.propTypes = {
  match: PropTypes.object,
};

export default Hparty;
