import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { raiz } from '../../utiles';
import { connect } from 'react-redux';
import './Peliculas.css'
import { Typography, Row } from 'antd';
import MainImage from '../../Components/MainImg/MainImage';
import { API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../../configPeliculas';
import GridCard from '../../Components/GridCard/GridCard';

const { Title } = Typography;




const Peliculas = (props) => {

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

            let res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`, config);

            setTimeout(() => {

                setFilms(res.data.results);
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    };

    // RENDER

    if (films[0]?.id !== undefined) {
        return (
            <div className='designPeliculas'>
                {console.log(films)}
                {/*APARTADO PARA LA IMAGEN DE CABECERA */}

                <MainImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${films[0].backdrop_path}`}
                    title={films[0].original_title}
                    text={films[0].overview}
                />

                {/*BODY*/}

                <div className="bodyNovedades">
                    <Title level={2}>Novedades</Title>
                    <hr />


                    {/* GRID CARDS */}

                    <Row gutter={[16, 16]}>
                        {
                            films.map((pelicula, index) => {

                                return (
                                    <React.Fragment key={index}>
                                        {console.log(pelicula)}
                                        <GridCard
                                            objetoPeli = {pelicula}
                                            image={raiz + pelicula.poster_path}
                                            movieId={pelicula.id}
                                            movieName={pelicula.title}
                                            keyPeli={pelicula.id}
                                        />
                                    </React.Fragment>
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
}))(Peliculas);