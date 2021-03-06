import { REQUESTING_DATA, RECEIVED_POP_MOVIES, RECEIVED_MOVIE, RECEIVED_SEARCH_RESULT, ERASE_MOVIE, ERASE_SEARCH_RESULT, RECEIVED_ERROR } from "./actionTypes";

const initialState = {
  movies: [],
  fetching: false,
  selectedMovie: {},
  searchResult: [],
  searchResultQtt: 0,
  searchPageQtt: 0,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUESTING_DATA:         
        return Object.assign({}, state, {fetching: true});
    case RECEIVED_POP_MOVIES:        
        const { movies } = action.payload;        
        return {
            ...state,
            fetching: false,
            movies,
            error: false,
        };
    case RECEIVED_MOVIE:
       const { movie } = action.payload;
       return {
         ...state,
         selectedMovie: movie,
         fetching: false,
         error: false,
       };
    case RECEIVED_SEARCH_RESULT:
       const { result, resultQtt, pageQtt } = action.payload;       
       return {
         ...state,
         fetching: false,
         searchResult: result,
         searchResultQtt: resultQtt,
         searchPageQtt: pageQtt,
         error: false,
       };
    case ERASE_MOVIE: 
       return {
         ...state,
         selectedMovie: {},
       };
    case ERASE_SEARCH_RESULT: 
       return {
         ...state,
         searchResult: [],
         searchResultQtt: 0,
         searchPageQtt: 0,
       };
    case RECEIVED_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
