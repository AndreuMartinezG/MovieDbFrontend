import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainImage from '../../Components/MainImg/MainImage';
import MovieInfo from '../../Components/MovieInfo/MovieInfo';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE } from '../../configPeliculas';
//import Rent from '../../Components/Rent/Rent';
import { raiz } from '../../utiles';
import GridCard from '../../Components/GridCard/GridCard';

import { List, Avatar, Row, Col, Button } from 'antd';

import './DetallesPelicula.css'


const DetallesPelicula = (props) => {

    let navigate = useNavigate();
    const movieId = props.search.id


    const [Casts, setCasts] = useState([])
    const [DataFilm, setDataFilm] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)

    //Use EFECT
    useEffect(() => {

        if (props.search?.original_title === undefined) {
            navigate("/");
        }

        getDetallesPelicula()
    }, []);

    const toggleActorView = () => {
        setActorToggle(!ActorToggle)
    }


    const getDetallesPelicula = async () => {

        let endpointForCasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        let detallesVideo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`

        try {

            let res = await axios.get(endpointForCasts);
            let resVideo = await axios.get(detallesVideo)
            setCasts(res.data.cast)
            setDataFilm(resVideo.data)


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
            
                <MovieInfo movie={props.search} detalles={DataFilm}/>

                {/* Actors Grid*/}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <Button onClick={toggleActorView}>Toggle Actor View </Button>
                </div>

                {ActorToggle &&
                    <Row gutter={[16, 16]}>
                        {
                            Casts.map((cast, index) => (
                                <React.Fragment key={index}>
                                {cast.profile_path &&
                                <GridCard actor
                                    image={cast.profile_path}
                                    characterName={cast.characterName}
                                    keyActor={cast.id} />}
                                </React.Fragment>
                            ))
                        }
                    </Row>
                }
                <br />

            </div>
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials,
    search: state.search.film
}))(DetallesPelicula);