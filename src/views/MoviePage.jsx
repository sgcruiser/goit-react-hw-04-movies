import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

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

  componentDidMount() {
    const { search, pathname } = this.props.location;
    const { query } = queryString.parse(search);

    if (search && pathname) {
      this.setState({
        searchQuery: query,
      });
    }
  }

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

    this.props.history.push({
      search: `query=${query}`,
    });
  };

  async getMovies() {
    const { searchQuery, pageNumber } = this.state;
    const arg = { searchQuery, pageNumber };

    this.setState({ isLoadimg: true });

    await fetchSearchMovies(arg)
      .then(data => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <Fragment>
        <SearchForm onSubmit={this.onChangeQuery} />

        {error && (
          <error>
            <p>Произошла ошибка, повторите запрос...</p>
          </error>
        )}

        <MoviesList moviesList={movies} />

        {isLoading && <Loader />}
      </Fragment>
    );
  }
}

export default withRouter(MoviePage);
