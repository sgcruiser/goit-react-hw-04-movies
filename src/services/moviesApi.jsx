import axios from 'axios';

const apiKey = 'c0d8c3367291055f39d1bbe32dc11d60';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: apiKey,
  // language: 'en-US',
  // include_adult: false,
};

const fetchTrending = async () => {
  return await axios
    .get('trending/movie/day?')
    .then(({ data }) => data.results)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchSearchMovies = async ({ searchQuery, pageNumber }) => {
  return await axios
    .get(`search/movie?&query=${searchQuery}&page=${pageNumber}`)
    .then(({ data }) => data.results)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchMovieDetails = async id => {
  return await axios
    .get(`/movie/${id}`)
    .then(({ data }) => data.results)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchMovieCredits = async id => {
  return await axios
    .get(`/movie/${id}/credits`)
    .then(({ data }) => data.cast)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchMovieReviews = async id => {
  return await axios
    .get(`/movie/${id}/reviews`)
    .then(({ data }) => data.results)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

export {
  fetchTrending,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};
