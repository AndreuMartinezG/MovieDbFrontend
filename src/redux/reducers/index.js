import {combineReducers} from 'redux';

import credentials from './datosLogin-reducer';
import search from './datosPelicula-reducer';
import cart from './datosCarrito-reducer';


const rootReducer = combineReducers({
    credentials,
    search,
    cart
});


export default rootReducer;