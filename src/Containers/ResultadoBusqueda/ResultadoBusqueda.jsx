import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { raiz } from '../../utiles';
import { MOVIE_DETAIL } from '../../redux/types';
import { connect } from 'react-redux';
import './ResultadoBusqueda.css'
import { Typography, Row } from 'antd';
import MainImage from '../../Components/MainImg/MainImage';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE, BACKDROP_SIZE } from '../../configPeliculas';

const { Title } = Typography;




const ResultadoBusqueda = (props) => {

    let navigate = useNavigate();



    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })




    const escogePelicula = (pelicula) => {

        console.log(pelicula);
        //Guardamos la pelicula escogida en redux
        props.dispatch({ type: MOVIE_DETAIL, payload: pelicula });


        //Redirigimos a movieDetail con navigate
        navigate("/detallespelicula");
    }

    console.log(props.films)

    // RENDER

    if (props.films.results[0]?.id !== undefined) {
        return (
            <div className='designPeliculas'>
                {/*APARTADO PARA LA IMAGEN DE CABECERA */}

                {/* <MainImage
                    image={`${IMAGE_BASE_URL}w1280${props.films.results[0].backdrop_path}`}
                    title={props.films.results[0].original_title}
                    text={props.films.results[0].overview}
                /> */}

                <div
                    style={{
                        backgroundSize: '100%, cover',
                        backgroundImage: `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.films.results[0].backdrop_path}')`,
                        height: '40em',

                        backgroundPosition: 'center, center',
                        width: '100%',
                        position: 'relative',
                        marginTop: '1em'
                    }}
                >
                    <div>
                        <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }} >
                            <Title style={{ color: 'white' }} level={2} > {props.films.results[0].original_title} </Title>
                            <p style={{ color: 'white', fontSize: '1rem' }}  >{props.films.results[0].overview} </p>
                        </div>
                    </div>
                </div>
                {/*BODY*/}

                <div className="bodyNovedades">
                    <Title level={2}>Resultados Busqueda!</Title>
                    <hr />


                    {/* GRID CARDS */}

                    {

                        props.films.results.map(pelicula => {

                            return (
                                <div className='mostrarImg' key={pelicula.id} onClick={() => escogePelicula(pelicula)}>
                                    <img src={raiz + pelicula.poster_path} alt={pelicula.title} />
                                </div>
                            )
                        })
                    }

                </div>


                <div className="botonMasNovedades">
                    <button>LOAD MORE</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='designPeliculas'>
                <div className="marginLoader">
                    <img src={require('../../img/loader.gif')} alt="cargador" />
                </div>
            </div>
        )
    }
}





export default connect((state) => ({
    credentials: state.credentials,
    films: state.search.peliculas
}))(ResultadoBusqueda);