import { SEARCH_MOVIE, MINI_RATE, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from './constants'


export const searchMovie = moviename =>({
    type: SEARCH_MOVIE,
    payload: moviename
});

export const miniRate = myrate =>({
    type: MINI_RATE,
    payload: myrate
});

export const addMovie = payload =>({
    type: ADD_MOVIE,
    payload
});

export const editMovie = (moviename, id) =>({
    type: EDIT_MOVIE,
    payload : {moviename,id}
});

// export const editMovie = (payload) =>({
//     type: EDIT_MOVIE,
//     payload
// });

export const deleteMovie = moviename =>({
    type: DELETE_MOVIE,
    payload: moviename
})

