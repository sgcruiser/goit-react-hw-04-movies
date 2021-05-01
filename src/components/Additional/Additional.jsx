import { Suspense, lazy, Fragment } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import routes from '../../routes';
import Loader from '../Loader';

import styles from './Additional.module.scss';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast-view" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews-view" */),
);

const Additional = () => {
  return (
    <Fragment>
      <div className={styles.additional}>
        <h4 className={styles.additional_title}>Additional information</h4>
        <ul className={styles.additional_list}>
          <li className={styles.additional_item}>
            <NavLink
              exact
              to={`${routes.cast}`}
              className={styles.additional__link}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.additional_item}>
            <NavLink
              exact
              to={`${routes.reviews}`}
              className={styles.additional__link}
            >
              Reviews
            </NavLink>
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

export default withRouter(Additional);
