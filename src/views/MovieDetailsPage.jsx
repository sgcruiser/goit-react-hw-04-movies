import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import routes from '../routes';
import { fetchMovieDetails } from '../services/moviesApi';
import Movie from '../components/Movie';

import Loader from '../components/Loader';

class MovieDetailsPage extends Component {
  state = {
    // movie: [],
    title: null,
    poster_path: null,
    overview: null,
    genres: null,
    release_date: null,
    vote_average: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.getMovieDetails(movieId);
  }

  getMovieDetails = id => {
    this.setState({ isLoading: true });

    fetchMovieDetails(id)
      .then(data => {
        this.setState({ ...data });
        console.log(data);
      })
      .catch(error => this.setState({ error }));
    // .finally(() => this.setState({ isLoading: false }));
  };

  handleClick = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const {
      title,
      poster_path,
      overview,
      genres,
      release_date,
      vote_average,
      isLoading,
    } = this.state;
    const { match, location, history } = this.props;

    return (
      <Fragment>
        {title && (
          <Movie
            title={title}
            poster_path={poster_path}
            overview={overview}
            genres={genres}
            release_date={release_date}
            vote_average={vote_average}
            match={match}
            location={location}
            history={history}
          />
        )}

        {isLoading && <Loader />}
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
