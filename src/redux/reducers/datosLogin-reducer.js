import { LOGIN, LOGOUT } from '../types';

const initialState = {
    token: '',
    usuario: {}
};

const datosLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case LOGIN:
            return action.payload;

        //BORRAMOS DATOS GUARDADOS DE USUARIO LOGUEADO Y DEJAMOS VALORES VACIOS
        case LOGOUT:
            return initialState;

        default:
            return state
    }
}


export default datosLoginReducer;