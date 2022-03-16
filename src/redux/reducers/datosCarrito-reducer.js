import {ADD_CART, REMOVE_CART, EDIT_CART, EMPTY_CART} from '../types';

const initialState = {
    products: [],
    quantity: 0
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        //Ejemplo de añadido de datos
        case ADD_CART :
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        //Ejemplo de modificacion del carrito (otro producto que ya existia)
        case EDIT_CART :
            let nuevoCarrito = state.products.map( (item) => {
				
				if (item.nombre === action.payload.nombre) { // si ya existe
					item.cantidad = action.payload.cantidad; // lo modifico
				};
				
				return item;
				
			});
		
		return {
			...state,
			cart: nuevoCarrito
		};

        //Ejemplo de reestablecimiento o borrado de datos
        case EMPTY_CART : 
            return initialState;

        //Ejemplo de modificacion de datos
        case REMOVE_CART :
            let arrayProducts = state.products

            console.log("Estoy en REMOVE_CART")

            let editarCarrito = state.products.map( (item) => {
                
				
				if (item.id === action.payload.id) { // si ya existe
                    console.log("He detectado id")
                    return !item !== action.payload
                    
                };
				return item;
				
			});

            console.log(editarCarrito)
            return {
                ...state,
                products: editarCarrito
            };

        default : 
            return state
    }
}
export default cartReducer;