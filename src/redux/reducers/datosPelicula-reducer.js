import {MOVIE_DETAIL} from '../types';

const initialState = {
    film: {}
};

const datosPeliculaReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case MOVIE_DETAIL :
            return action.payload;

        default :
            return state
    }
}

export default datosPeliculaReducer;