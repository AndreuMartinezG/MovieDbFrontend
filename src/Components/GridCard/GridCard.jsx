import React from 'react';
import { MOVIE_DETAIL } from '../../redux/types';
import { Col } from 'antd';
import './GridCard.css'
import { connect } from 'react-redux';

function GridCards(props) {

    let { actor, key, keyPeli, image, movieId, movieName, characterName } = props


    const escogePelicula = (pelicula) => {

        console.log(pelicula);
        //Guardamos la pelicula escogida en redux
        props.dispatch({ type: MOVIE_DETAIL, payload: pelicula });


        //Redirigimos a movieDetail con navigate
        //navigate("/detallespelicula");
    }

    if (actor) {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div
                    onClick={() => escogePelicula(props.objetoPeli)} key={keyPeli} style={{ position: 'relative' }}>
                    <img style={{ width: '100%', height: '30em' }} alt={characterName} src={`${image}`} />
                </div>
            </Col>
        )
    } else {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div className='card' onClick={() => escogePelicula(props.objetoPeli)} key={keyPeli} style={{ position: 'relative' }}>
                    <a href={`/detallesPelicula/${movieId}`} >
                        <img style={{ width: '90%', height: '30em' }} alt={movieName} src={image} />
                    </a>
                </div>
            </Col>
        )
    }

}

export default connect((state) => ({
    credentials: state.credentials
}))(GridCards);