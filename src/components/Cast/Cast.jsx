import { Component, Fragment } from 'react';

import { fetchMovieCredits } from '../../services/moviesApi';

import CastCard from '../CastCard';
// import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    this.getMovieCredits(movieId);
  }

  getMovieCredits = id => {
    fetchMovieCredits(id)
      .then(data => this.setState({ cast: data.cast }))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { cast } = this.state;

    return (
      <Fragment>
        {cast && (
          <div>
            {cast.map(({ name, profile_path, character }) => (
              <li>
                <CastCard
                  img={profile_path}
                  name={name}
                  character={character}
                />
              </li>
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default Cast;
