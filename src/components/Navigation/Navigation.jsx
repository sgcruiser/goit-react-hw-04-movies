// import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Logo from './blue_short.svg';

import styles from './Navigation.module.scss';

const Navigation = props => {
  return (
    <div className={styles.navi}>
      <img src={Logo} alt="Logo" width="160" height="60" />
      <NavLink
        className={styles.button}
        activeClassName={styles.buttonActive}
        exact
        to={routes.home}
      >
        Home
      </NavLink>

      <NavLink
        className={styles.button}
        activeClassName={styles.buttonActive}
        to={routes.movies}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
