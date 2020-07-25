import { ADD_TODO, TOGGLE_TODO, SET_FILTER, REQUESTING_DATA, RECEIVED_POP_MOVIES } from "./actionTypes";
import axios from 'axios';
import { API_URL, API_PARAMETERS } from '../config';

let nextTodoId = 0;

const requestingPopMovies = () => ({
    type: REQUESTING_DATA,
});

const receivedPopMovies = (movies) => ({
    type: RECEIVED_POP_MOVIES, payload: { movies }
});

export const getMovies = () => {
    return function(dispatch) {
        dispatch(requestingPopMovies());
        axios.get(`${API_URL}/movie/popular?${API_PARAMETERS}`)
            .then((response) => {
                console.log(response);
                dispatch(receivedPopMovies(response.data.results));
            });        
    }
}

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
