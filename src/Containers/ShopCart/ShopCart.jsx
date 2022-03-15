import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import './ShopCart.css'

const ShopCart = (props) => {
    
    let navigate = useNavigate()

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })


    return (

        <div className="designShopCart">
            Soy carrito
        </div>
    );


};




export default connect((state) => ({
    credentials: state.credentials
}))(ShopCart);