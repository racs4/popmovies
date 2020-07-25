import { ADD_TODO, TOGGLE_TODO, REQUESTING_DATA, RECEIVED_POP_MOVIES, SEARCH } from "./actionTypes";

const initialState = {
  movies: [],
  fetching: false,
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
