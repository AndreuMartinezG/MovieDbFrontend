import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { raiz, key } from '../../utiles';
import { MOVIE_DETAIL } from '../../redux/types';
import { connect } from 'react-redux';
import './Peliculas.css'
import { Typography, Row, Button } from 'antd';

const { Title } = Typography;




const ResultadoBusqueda = (props) => {

    let navigate = useNavigate();

    //HOOKS
    const [films, setFilms] = useState([]);


    //useEffect
    useEffect(() => {
        traePelis();
    }, []);

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })

    useEffect(() => {
        //espera a cambio en el HOOK de films
    }, [films]);



    // FUNCIONES LOCALES

    const traePelis = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`, config);

            setTimeout(() => {

                setFilms(res.data.results);
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    };


    const escogePelicula = (pelicula) => {

        console.log(pelicula);
        //Guardamos la pelicula escogida en redux
        props.dispatch({ type: MOVIE_DETAIL, payload: pelicula });


        //Redirigimos a movieDetail con navigate
        navigate("/detallespelicula");
    }



    // RENDER

    if (films[0]?.id !== undefined) {
        return (
            <div className='designPeliculas'>
                {/*APARTADO PARA LA IMAGEN DE CABECERA */}

                <div className="imgCabezera">

                </div>

                <div>
                    <div className="tituloNovedades">
                        <Title style={{ color: 'white' }} level={2}>Titulo</Title>
                        <p style={{ color: 'white', fontSize: '1rem' }}>Textoo</p>
                    </div>
                </div>

                {/*BODY*/}

                <div className="bodyNovedades">
                    <Title level={2}>Novedades</Title>
                    <hr />


                    {/* GRID CARDS */}

                    <Row gutter={[16, 16]}>
                        {

                            films.map(pelicula => {

                                return (
                                    <div className='mostrarImg' key={pelicula.id} onClick={() => escogePelicula(pelicula)}>
                                        <img src={raiz + pelicula.poster_path} alt={pelicula.title} />
                                    </div>
                                )
                            })
                        }
                    </Row>

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
    credentials: state.credentials
}))(ResultadoBusqueda);