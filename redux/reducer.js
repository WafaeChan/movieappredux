import {movies} from '../data'
import { SEARCH_MOVIE, MINI_RATE, ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from './constants';

const initstate={
    movies,
    rating: 0,
    search:'',

}

export const movieReducer = (state=initstate, action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {...state, search:action.payload};

        case MINI_RATE:
            return {...state, rating: action.payload}
        
        case ADD_MOVIE:
            return {...state, movies:[...state.movies, action.payload] }

        case DELETE_MOVIE:
            return {...state,movies:state.movies.filter(e => e.id !== action.payload)};
        
        case EDIT_MOVIE:
                        
                        return{
                            movies:state.movies.map((el,i)=>(el.id===action.payload.id?action.payload.moviename:el))
                        }
      

            default:
                return state;    
    }
    
}