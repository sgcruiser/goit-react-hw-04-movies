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

  getMovieCredits = movieId => {
    fetchMovieCredits(movieId)
      .then(data => this.setState({ cast: data.cast }))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { cast } = this.state;

    return (
      <Fragment>
        {cast && (
          <div>
            {cast.map(item => (
              <li>
                <CastCard
                  imgUrl={item.profile_path}
                  name={item.name}
                  character={item.character}
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
