import { Suspense, lazy, Fragment } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from '../Loader';

import styles from './Additional.module.scss';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast-view" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews-view" */),
);

const Additional = ({ match, location }) => {
  return (
    <Fragment>
      <div className={styles.additional}>
        <h4 className={styles.additional_title}>Additional information</h4>
        <ul className={styles.additional_list}>
          <li className={styles.additional_item}>
            <NavLink
              exact
              to={{
                pathname: `${match.url}/cast`,
                state: { ...location.state },
              }}
              className={styles.additional__link}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.additional_item}>
            <NavLink
              exact
              to={{
                pathname: `${match.url}/reviews`,
                state: { ...location.state },
              }}
              className={styles.additional__link}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Route exact path={`${match.path}/cast`} component={Cast} />

          <Route exact path={`${match.path}/reviews`} component={Reviews} />
        </Suspense>
      </div>
    </Fragment>
  );
};

Additional.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Additional);
