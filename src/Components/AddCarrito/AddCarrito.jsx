import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ADD_CART, REMOVE_CART } from '../../redux/types';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

//import './AddCarrito.css'

const AddCarrito = (props) => {

    let navigate = useNavigate();

    const [AddedCart, setAddedCart] = useState(false)

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)
        comprobarCarrito()
    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    })

    const comprobarCarrito = () => {

        props.cart.products.map((item)=>{

            if (item.id === props.search.id){
                setAddedCart(true)
                console.log("He entrado en el primer if")
            }
        })
    }

    const onClickAdd = () => {

        if (!AddedCart) {
            //No tenemos el item añadido 
            props.dispatch({type: ADD_CART, payload: props.movieInfo});
            
            setAddedCart(true)
            
        } else {
            //si que tenemos el item añadido
            props.dispatch({type: REMOVE_CART, payload: props.movieInfo});
            setAddedCart(false)
        }

    }



    return (
        <div className='designAddCarrito'>
            <Button onClick={()=>onClickAdd()} > {!AddedCart ? "Add to Cart" : "Delet from Cart"}</Button>
        </div>
    )
}



export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search.film
}))(AddCarrito);