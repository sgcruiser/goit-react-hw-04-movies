import { Suspense, lazy, Fragment } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';
import Loader from 'react-loader-spinner';

import styles from './Additional.module.scss';

const Cast = lazy(() =>
  import('../Cast/index' /* webpackChunkName: "cast-view" */),
);
const Reviews = lazy(() =>
  import('../Reviews/index' /* webpackChunkName: "reviews-view" */),
);

const Additional = () => {
  return (
    <Fragment>
      <div className={styles.comment}>
        <h4 className={styles.title}>Additional information</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to={`${routes.cast}`}>Cast</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to={`${routes.reviews}`}>Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Route exact path={`${routes.cast}`} component={Cast} />

        <Route exact path={`${routes.reviews}`} component={Reviews} />
      </Suspense>
    </Fragment>
  );
};

Additional.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Additional);
