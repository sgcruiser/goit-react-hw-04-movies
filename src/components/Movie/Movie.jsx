import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Additional from '../Additional';

import defaultImage from './default-image.jpg';

import styles from './Movie.module.scss';

const Movie = ({
  title,
  poster_path,
  overview,
  genres,
  release_date,
  vote_average,
}) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImage;

  const useScore = vote_average * 10;
  const releaseDate = `${release_date}`.slice(0, 4);

  return (
    <main>
      <div className={styles.movieCard}>
        <img
          src={imageUrl}
          alt={title}
          title={title}
          className={styles.movieCard__img}
        />
        <div>
          <h3 className={styles.movieCard__title}>{title}</h3>
          <p className={styles.movieCard__score}>Use score : {useScore}%</p>
          <p className={styles.movieCard__relise}>{releaseDate}</p>
          <p className={styles.movieCard__overview}>{overview}</p>
          <ul className={styles.movieCard__genres}>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Additional />
    </main>
  );
};

Movie.defaultProps = {
  poster_path: defaultImage,
  release_date: 'XXXX-XX-XX',
  vote_average: 0,
  overview: '',
  genres: [],
};

Movie.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
};

export default withRouter(Movie);
