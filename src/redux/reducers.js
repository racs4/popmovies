import { ADD_TODO, TOGGLE_TODO, REQUESTING_DATA, RECEIVED_POP_MOVIES, SEARCH, RECEIVED_MOVIE, RECEIVED_SEARCH_RESULT, ERASE_MOVIE, ERASE_SEARCH_RESULT } from "./actionTypes";

const initialState = {
  movies: [],
  fetching: false,
  selectedMovie: {},
  searchResult: [],
  searchResultQtt: 0,
  searchPageQtt: 0,
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
            movies
        };
    case RECEIVED_MOVIE:
       const { movie } = action.payload;
       return {
         ...state,
         selectedMovie: movie,
         fetching: false
       };
    case RECEIVED_SEARCH_RESULT:
       const { result, resultQtt, pageQtt } = action.payload;
       console.log(resultQtt);
       return {
         ...state,
         fetching: false,
         searchResult: result,
         searchResultQtt: resultQtt,
         searchPageQtt: pageQtt,
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
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
