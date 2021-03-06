import PropTypes from 'prop-types';
import defaultImage from './default-image.jpg';
import styles from './MoviesItem.module.scss';

const MoviesItem = ({ title, poster_path }) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImage;

  return (
    <div className={styles.moviesItem}>
      <div className={styles.moviesItem__tumb}>
        <img src={posterUrl} alt={title} className={styles.moviesItem__img} />
      </div>
      <p className={styles.moviesItem__title}>
        <span>{title}</span>
      </p>
    </div>
  );
};

MoviesItem.defaultProps = {
  poster_path: defaultImage,
  title: 'noname',
};

MoviesItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
};

export default MoviesItem;
