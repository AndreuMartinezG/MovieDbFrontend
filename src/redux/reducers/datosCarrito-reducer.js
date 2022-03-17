import { ADD_CART, REMOVE_CART, EDIT_CART, EMPTY_CART } from '../types';

const initialState = {
    products: [],
    quantity: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        //Ejemplo de añadido de datos
        case ADD_CART:
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        //Ejemplo de modificacion del carrito (otro producto que ya existia)
        case EDIT_CART:
            let nuevoCarrito = state.products.map((item) => {

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
        case EMPTY_CART:
            return initialState;

        //Ejemplo de modificacion de datos
        case REMOVE_CART:
            // let arrayProducts = state.products

            ///////////////////////////////////////////////////////////////////////OPCION 1//////////////////////////
            // let editarCarrito = state.products.map( (item) => {
            // 	if (item.id === action.payload.id) { // si ya existe
            //         console.log("He detectado id")
            //         return !item !== action.payload      
            //     };
            // 	return item;
            // });
            // console.log(editarCarrito, "estoy en editarCarrito")
            // return {
            //     ...state,
            //     products: editarCarrito
            // };


            ///////////////////////////////////////////////////////////////////////OPCION 2//////////////////////////
            // let newProducts = []
            // newProducts = [newProducts, ...state.products.find(item => item.id !== action.payload.id)];
            // console.log(newProducts, "Estoy en el map")


            // console.log(newProducts, "estoy en editarCarrito")
            // return {
            //     ...state,
            //     products: newProducts
            // };


            ///////////////////////////////////////////////////////////////////////OPCION 3//////////////////////////A MEDIAS SOLO GUARDA El PRIMER RESULTADO DE state.products[]
            // let newProducts = []
            // newProducts = state.products.find(item => item.id !== action.payload.id);
            // console.log(newProducts, "Estoy en el map")


            // console.log(newProducts, "estoy en editarCarrito")
            // return {
            //     ...state,
            //     products: newProducts
            // };



            ///////////////////////////////////////////////////////////////////////OPCION 4//////////////////////////ERROR 
            // let editarCarrito = state.products.map((item) => {

            //     
            //         item = [item, ...state.products.find(item => item.id !== action.payload.id)];

            //     return item;
            // });
            // console.log(editarCarrito, "estoy en editarCarrito")


            // return {
            //     ...state,
            //     products: editarCarrito
            // };



            ///////////////////////////////////////////////////////////////////////OPCION 5//////////////////////////ME ELIMINA EL ITEM Q YO QUIERO PERO REPITE DOS VECES LA PELICULA

            // let totalCarrito = []

            // let editarCarrito = state.products.map((item) => {

            //     
            //     let count =  totalCarrito.push(state.products.find(item => item.id !== action.payload.id));
            //     console.log(count);
            //     console.log(item)

            //     return item;

            // });
            // console.log (editarCarrito)
            // console.log(totalCarrito, "estoy en editarCarrito")
            // return {
            //     ...state,
            //     products: totalCarrito
            // };



            ///////////////////////////////////////////////////////////////////////OPCION 6//////////////////////////

            // let totalCarrito = []
            // let contenidoCarrito = state.products

            // totalCarrito = contenidoCarrito.find((item) => { return item.id !== action.payload.id });


            // console.log(totalCarrito, "estoy en editarCarrito")

            // return {
            //     ...state,
            //     products: totalCarrito
            // };


            ///////////////////////////////////////////////////////////////////////OPCION 7//////////////////////////
            let totalCarrito = [];

            for (let i = 0; i < state.products.length; i++) {
                let item = []
                item = state.products[i];

                if (item.id !== action.payload.id) {
                    let count =  totalCarrito.push(item);
                }
            }
            
            return {
                ...state,
                products: totalCarrito
            };

        default:
            return state
    }
}
export default cartReducer;