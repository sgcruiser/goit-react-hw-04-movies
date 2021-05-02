import { Component, Fragment } from 'react';

import { fetchMovieCredits } from '../../services/moviesApi';

import CastCard from '../CastCard';
import styles from './Cast.module.scss';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.getMovieCredits(movieId);
  }

  async getMovieCredits(id) {
    await fetchMovieCredits(id)
      .then(data => {
        this.setState({ cast: data.cast });
        console.log(data);
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;

    return (
      <Fragment>
        {cast && (
          <ul className={styles.cast}>
            {cast.map(({ id, name, profile_path, character }) => (
              <li key={id} className={styles.cast__item}>
                <CastCard
                  img={profile_path}
                  name={name}
                  character={character}
                />
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
}

export default Cast;
