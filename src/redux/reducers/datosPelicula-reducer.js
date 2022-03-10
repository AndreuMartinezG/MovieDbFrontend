import {MOVIE_DETAIL, MOVIES_TITLE} from '../types';

const initialState = {
    film: {},
    peliculas: []
};

const busquedaFilmsReducer = (state = initialState, action) => {
    switch(action.type){
        
        case MOVIE_DETAIL :
            return {...state, film: action.payload};

        case MOVIES_TITLE :
            return {...state, peliculas: action.payload};

        default :
            return state
    }
}

export default busquedaFilmsReducer;