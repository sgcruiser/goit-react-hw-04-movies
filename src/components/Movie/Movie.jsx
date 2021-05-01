import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';
import Button from '../Button';
import Additional from '../Additional';

import defaultImage from './default-image.jpg';

import styles from './Movie.module.scss';

const Movie = ({ movieData, match, location, history }) => {
  const {
    title,
    poster_path,
    overview,
    genres,
    release_date,
    vote_average,
  } = movieData;

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImage;

  const useScore = vote_average * 10;
  const releaseDate = `${release_date}`.slice(0, 4);

  function handleClick(event) {
    history.push(location?.state?.from || routes.home);
  }

  return (
    <main>
      <Button textButton="Go back" onClickButton={handleClick} />
      <Button textButton="Go back" />
      <div className={styles.movieCard}>
        <img
          src={imageUrl}
          alt={title}
          title={title}
          className={styles.movieCard__img}
        />
        <div>
          <h3 className={styles.movieCard__title}>{title}</h3>
          <p className={styles.movieCard__score}>Use score : {useScore}</p>
          <p className={styles.movieCard__relise}>{releaseDate}</p>
          <p className={styles.movieCard__overview}>{overview}</p>
          <div className={styles.movieCard__genres}>{genres}</div>
        </div>
      </div>
      <Additional />
    </main>
  );
  // }
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
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Movie);
