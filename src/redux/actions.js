import { REQUESTING_DATA, RECEIVED_POP_MOVIES, RECEIVED_ERROR, RECEIVED_MOVIE, RECEIVED_SEARCH_RESULT, ERASE_MOVIE, ERASE_SEARCH_RESULT } from "./actionTypes";
import axios from 'axios';
import { API_URL, API_PARAMETERS, LANGUAGE, API_KEY } from '../config';

export const eraseMovie = () => ({
  type: ERASE_MOVIE,
});

export const eraseSearchResult = () => ({
  type: ERASE_SEARCH_RESULT,
});

const requestingPopMovies = () => ({
    type: REQUESTING_DATA,
});

const errorReceived = () => ({
    type: RECEIVED_ERROR,
});

const receivedPopMovies = (movies) => ({
    type: RECEIVED_POP_MOVIES, payload: { movies }
});

const receivedMovie = (movie) => ({
  type: RECEIVED_MOVIE, payload: { movie }
});

const receivedSearchResult = (result, resultQtt, pageQtt) => ({
  type: RECEIVED_SEARCH_RESULT, payload: { result, resultQtt, pageQtt }
});

export const getMovies = () => {
    return function(dispatch) {
        dispatch(requestingPopMovies());
        axios.get(`${API_URL}/movie/popular?${API_PARAMETERS}`)
            .then((response) => {
                dispatch(receivedPopMovies(response.data.results));
            })
            .catch(error => {
              dispatch(errorReceived());
            });        
    }
}

export const getMovie = (movieId) => {
  return function(dispatch) {
    dispatch(requestingPopMovies());
    axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=recommendations,similar,videos`)
      .then((response) => {        
        dispatch(receivedMovie(response.data));
      })
      .catch(error => {
        dispatch(errorReceived());
      });
  }
}

export const searchMovie = (query, page) => {
  return function(dispatch) {
    dispatch(requestingPopMovies());
    axios.get(`${API_URL}/search/movie/?${API_PARAMETERS}&query=${query}&page=${page}`)
      .then((response) => {        
        dispatch(receivedSearchResult(response.data.results, response.data.total_results, response.data.total_pages));
      })
      .catch(error => {
        dispatch(errorReceived());
      });
  }
}
