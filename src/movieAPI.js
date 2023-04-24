import axios from 'axios';
const API_KEY = '471085eef302fbeb69aee8ca65e58e67';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendMovies = async () => {
  const { data } = await axios.get('trending/movie/day');
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const getMovieByName = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data;
};