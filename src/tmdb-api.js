import axios from "axios";

const API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTczNzgwODhmNGZhZDA2NTNmMzkzZWRjMmJkNDlhNyIsIm5iZiI6MTcyMzI4NTMxNy4xODc1MDcsInN1YiI6IjY2YjczNWJjZGFjNzEwMTdmNmE4YzhhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ywzrsEQPFJ59J4_uvZddSX-0_GYeUiuJJt7ynXoz4ts";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMoviesByQuery = async (query) => {
  const url = `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?language=en-US`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data;
};