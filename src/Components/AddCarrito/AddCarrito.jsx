import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Button } from 'antd';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
 
//import './AddCarrito.css'
 
const AddCarrito = (props) => {
 
    let navigate = useNavigate();
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidMount (montado)
 
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
 
 
    return (
        <div className='designAddCarrito'>
            <Button > Añadir a Carrito</Button>
        </div>
    )
}
export default connect((state) => ({ 
    //variables de rdx a crear
}))(AddCarrito);