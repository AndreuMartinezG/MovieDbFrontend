import React from 'react';
import { MOVIE_DETAIL } from '../../redux/types';
import { Col } from 'antd';
import './GridCard.css'
import { connect } from 'react-redux';

import { POSTER_SIZE, IMAGE_BASE_URL } from '../../configPeliculas';

function GridCards(props) {

    let { actor, key, keyPeli, keyActor, image, movieId, movieName, characterName, serie, serieId } = props


    const escogePelicula = (pelicula) => {

        //Guardamos la pelicula escogida en redux
        props.dispatch({ type: MOVIE_DETAIL, payload: pelicula });


        //Redirigimos a movieDetail con navigate
        //navigate("/detallespelicula");
    }

    if (actor) {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div className='card'
                    key={keyActor}
                    // onClick={() => escogePelicula(props.objetoPeli)}
                    style={{ position: 'relative' }}>
                    <img style={{ width: '100%', height: '30em' }} alt={characterName} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} />
                </div>
            </Col>
        )
    } else if (serie) {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div className='card' onClick={() => escogePelicula(props.objetoPeli)} key={keyPeli} style={{ position: 'relative' }}>
                    <a href={`/detallesSeries/${serieId}`} >
                        <img style={{ width: '100%', height: '30em' }} alt={movieName} src={image} />
                    </a>
                </div>
            </Col>
        )
    } else {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div className='card' onClick={() => escogePelicula(props.objetoPeli)} key={keyPeli} style={{ position: 'relative' }}>
                    <a href={`/detallesPelicula/${movieId}`} >
                        <img style={{ width: '100%', height: '30em' }} alt={movieName} src={image} />
                    </a>
                </div>
            </Col>
        )
    }

}

export default connect((state) => ({
    credentials: state.credentials
}))(GridCards);