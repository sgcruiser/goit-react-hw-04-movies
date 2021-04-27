import { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';
import MoviesItem from '../MoviesItem';

import styles from './MoviesList.module.scss';

const MoviesList = ({ moviesList, location, query, titleList }) => {
  return (
    <Fragment>
      {titleList && <h1 className={styles.title}>{titleList}</h1>}

      <ul className={styles.list}>
        {moviesList.map(({ id, title, poster_path }) => (
          <li key={id} className={styles.item}>
            <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: { from: location, query: query },
              }}
              className={styles.link}
            >
              <MoviesItem id={id} title={title} poster_path={poster_path} />
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

MoviesList.defaultProps = {
  title: '',
};

MoviesList.propTypes = {
  title: PropTypes.string,
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
