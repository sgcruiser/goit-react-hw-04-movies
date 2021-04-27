import { Fragment, Component } from 'react';
// import { withRouter } from 'react-router-dom';

import routes from '../routes';

import { fetchMovieDetails } from '../services/moviesApi';
import Movie from '../components/Movie';
import Button from '../components/Button';

import Loader from '../components/Loader';

class MovieDetalisPage extends Component {
  state = {
    id: null,
    poster_path: null,
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: null,
    isLoading: false,
    // error: null,
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    // const movieId = 460465;

    // this.getMovieDetails(movieId);
    await fetchMovieDetails(movieId)
      .then(data => this.setState({ ...data }))
      .catch(error => this.setState({ error }));
  }

  handleClick = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      id,
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
      isLoading,
    } = this.state;

    return (
      <Fragment>
        <Button textButton="Go back" onClickButton={this.handleClick} />
        <Movie
          id={id}
          poster_path={poster_path}
          title={title}
          release_date={release_date}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />

        {isLoading && <Loader />}
      </Fragment>
    );
  }
}

export default MovieDetalisPage;
