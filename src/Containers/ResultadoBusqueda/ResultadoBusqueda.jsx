import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { raiz } from '../../utiles';
import { connect } from 'react-redux';
import './ResultadoBusqueda.css'
import { Typography, Row } from 'antd';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../configPeliculas';
import GridCard from '../../Components/GridCard/GridCard';

const { Title } = Typography;




const ResultadoBusqueda = (props) => {

    let navigate = useNavigate();



    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })


    // RENDER

    if (props.films.results[0]?.id !== undefined) {
        return (
            <div className='designPeliculas'>
                {/*APARTADO PARA LA IMAGEN DE CABECERA */}

                <div
                    style={{
                        backgroundSize: '100%, cover',
                        backgroundImage: `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.films.results[0].backdrop_path}')`,
                        height: '40em',

                        backgroundPosition: 'center, center',
                        width: '100%',
                        position: 'relative',
                        marginTop: '1em',
                        marginLeft: '1em',
                        marginRight: '1em'

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

                    <Row gutter={[16, 16]}>
                        {
                            props.films.results.map((pelicula, index) => {

                                return (
                                    <React.Fragment key={index}>
                                        {console.log(pelicula)}
                                        <GridCard
                                            objetoPeli={pelicula}
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
    credentials: state.credentials,
    films: state.search.peliculas
}))(ResultadoBusqueda);