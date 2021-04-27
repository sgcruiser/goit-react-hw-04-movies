import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';
import Additional from '../Additional';

import defaultImage from './default-image.jpg';

import styles from './Movie.module.scss';

class Movie extends Component {
  state = {
    location: this.props.location,
  };

  handleClick = event => {
    this.props.history.push(this.state.location?.state?.from || routes.home);
  };

  render() {
    const {
      title,
      poster_path,
      overview,
      genres,
      release_date,
      vote_average,
    } = this.props;

    const imgUrl = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : defaultImage;
    const useScore = vote_average * 10;
    const releaseDate = `${release_date}`.slice(0, 4);

    return (
      <main>
        <div className={styles.card}>
          <img src={imgUrl} alt={title} className={styles.img} />
          <div className={styles.img}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.relise}>{releaseDate}</p>
            <div className={styles.genres}>{genres}</div>

            <p className={styles.score}>Use score : {useScore}</p>
            <p className={styles.overview}>{overview}</p>
          </div>
        </div>
        <Additional />
      </main>
    );
  }
}

Movie.defaultProps = {
  poster_path: defaultImage,
  release_date: 'XXXX-XX-XX',
  vote_average: 0,
  overview: '',
  genres: [],
};

Movie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Movie);
