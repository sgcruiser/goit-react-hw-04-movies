import axios from 'axios';

const API_KEY = 'c0d8c3367291055f39d1bbe32dc11d60';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};

const fetchTrending = async () => {
  return await axios
    .get('/trending/movie/day?')
    .then(({ data }) => data)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchSearchMovies = async ({ searchQuery, pageNumber }) => {
  return await axios
    .get('/search/movie', { params: { query: searchQuery, page: pageNumber } })
    .then(({ data }) => data)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchMovieDetails = async id => {
  return await axios
    .get(`/movie/${id}`)
    .then(({ data }) => data)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchMovieCredits = async id => {
  return await axios
    .get(`/movie/${id}/credits`)
    .then(({ data }) => data)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchMovieReviews = async id => {
  return await axios
    .get(`/movie/${id}/reviews`)
    .then(({ data }) => data)
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
