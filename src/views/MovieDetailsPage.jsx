import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import routes from '../routes';
import { fetchMovieDetails } from '../services/moviesApi';
import Movie from '../components/Movie';

import Loader from '../components/Loader';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.getMovieDetails(movieId);
  }

  async getMovieDetails(id) {
    this.setState({ isLoading: true });

    await fetchMovieDetails(id)
      .then(data => this.setState({ movie: data }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleClick = event => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { isLoading, movie } = this.state;
    const { match, location, history } = this.props;
    console.log(this.state);

    return (
      <Fragment>
        <div>
          {movie && (
            <Movie
              movieData={movie}
              match={match}
              location={location}
              history={history}
            />
          )}

          {isLoading && <Loader />}
        </div>
      </Fragment>
    );
  }
}

MovieDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
