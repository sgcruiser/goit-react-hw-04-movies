import { Component } from 'react';

import { fetchTrending } from '../services/moviesApi';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.getTrending();
  }

  async getTrending() {
    this.setState({ isLoadimg: true });

    await fetchTrending()
      .then(data => {
        this.setState({ movies: data.results });
        console.log(data);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <main>
        <MoviesList moviesList={movies} titleList="Trending Day" />

        {isLoading && <Loader />}
      </main>
    );
  }
}

export default HomePage;
