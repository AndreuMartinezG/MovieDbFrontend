import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainImage from '../../Components/MainImg/MainImage';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE } from '../../configPeliculas';
//import Rent from '../../Components/Rent/Rent';
import { raiz } from '../../utiles';

import './DetallesPelicula.css'


const DetallesPelicula = (props) => {

    let navigate = useNavigate();
    const movieId = props.search.id
    
    
    const [Casts, setCasts] = useState([])

    //Use EFECT
    useEffect(() => {

        if (props.search?.original_title === undefined) {
            navigate("/");
        }

        getDetallesPelicula()
    }, []);


    const getDetallesPelicula = async () => {

        let endpointForCasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

        try {

            let res = await axios.get(endpointForCasts);
            setCasts(res.data.cast)

            
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="designDetallesPelicula">

            {/* Header */}

                <MainImage
                    image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${props.search.backdrop_path}`}
                    title={props.search.original_title}
                    text={props.search.overview}
                />
            

            {/* Body */}

            <div style={{ width: '85%', margin: '1rem auto' }}>

                {/* Movie Info */}

                

            </div>


            {/* <div className="filmDetailHalf">
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
                <img src={raiz + props.search.poster_path} alt={props.search.original_title} /></div> */}
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials,
    search: state.search.film
}))(DetallesPelicula);