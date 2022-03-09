import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import Rent from '../../Components/Rent/Rent';
import { raiz } from '../../utiles';

import './DetallesPelicula.css'


const DetallesPelicula = (props) => {

    let navigate = useNavigate();
    //Use EFECT
    useEffect(() => {

        if (props.search?.original_title === undefined) {
            navigate("/");
        }
    });

    return (
        <div className="designDetallesPelicula">
            <div className="filmDetailHalf">
                <div className="dataFilm">{props.search.original_title}</div>
                <div className="dataFilm">{props.search.overview}</div>
                <div className="dataFilm">
                    {
                        //EN CASO DE QUE TOKEN SEA TRUE, SI SE INCLUYE EL ELEMENTO RENT
                        //props.credentials.token && <Rent id={props.search.id} token={props.credentials.token} idUser={props.credentials.usuario.id}/>
                    }
                </div>
            </div>
            <div className="filmDetailHalf">
                <img src={raiz + props.search.poster_path} alt={props.search.original_title} /></div>
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials,
    search: state.search
}))(DetallesPelicula);