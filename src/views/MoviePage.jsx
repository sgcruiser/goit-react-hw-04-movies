import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { fetchSearchMovies } from '../services/moviesApi';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader';

class MoviePage extends Component {
  state = {
    movies: [],
    pageNumber: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidMount = () => {
    if (this.props.location.state?.query) {
      this.setState({
        searchQuery: this.props.location.state.query,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getMovies();
    }
  }

  onChangeQuery = query => {
    this.setState({
      movies: [],
      pageNumber: 1,
      searchQuery: query,
      error: null,
    });
  };

  async getMovies() {
    const { searchQuery, pageNumber } = this.state;
    const arg = { searchQuery, pageNumber };

    this.setState({ isLoadimg: true });

    await fetchSearchMovies(arg)
      .then(data => this.setState({ movies: data.results }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { movies, isLoading, searchQuery, error } = this.state;
    console.log(this.props);

    return (
      <Fragment>
        <SearchForm onSubmit={this.onChangeQuery} />

        {error && (
          <error>
            <p>Произошла ошибка, повторите запрос...</p>
          </error>
        )}

        <MoviesList moviesList={movies} query={searchQuery} />

        {isLoading && <Loader />}
      </Fragment>
    );
  }
}

export default withRouter(MoviePage);
