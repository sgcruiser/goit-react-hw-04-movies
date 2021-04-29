import { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';

import routes from '../routes';

import { fetchMovieDetails } from '../services/moviesApi';
import Movie from '../components/Movie';
import Button from '../components/Button';

// import Loader from '../components/Loader';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    poster_path: null,
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: null,
    // movie: [],
    // isLoading: false,
    // error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    // const movieId = 460465;
    this.getMovieDetails(movieId);
  }

  async getMovieDetails(movieId) {
    // this.setState({ isLoadimg: true });

    await fetchMovieDetails(movieId)
      .then(data => {
        return this.setState({ ...data });
      })
      .catch(error => this.setState({ error }));
  }

  handleClick = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    // const { movie, isLoading } = this.state;
    // const movieArg = Object.entries(movie);
    const {
      id,
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.state;
    console.log(this.state);
    // const { match, location } = this.props;

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

        {/* {isLoading && <Loader />} */}
      </Fragment>
    );
  }
}

export default withRouter(MovieDetailsPage);
