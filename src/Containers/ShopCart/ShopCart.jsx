import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { EMPTY_CART, REMOVE_CART } from '../../redux/types';
import { Typography, Popover, Button } from 'antd';
import axios from 'axios';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../configPeliculas'

import './ShopCart.css'


const { Title } = Typography;

const ShopCart = (props) => {

    let navigate = useNavigate()


    const [Carrito, setCarrito] = useState([])
    const [ControlCarrito, setControlCarrito] = useState(true)

    useEffect(() => {
        // fetchFavoredMovie()
        console.log(props)
        setCarrito(props.cart.products)
        console.log(Carrito)

    }, [])

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }

    })

    useEffect(() => {

    }, [ControlCarrito])


    // const fetchFavoredMovie = () => {
    //     axios.post('/api/favorite/getFavoredMovie', variable)
    //         .then(response => {
    //             if (response.data.success) {
    //                 console.log(response.data.favorites)
    //                 setFavorites(response.data.favorites)
    //                 setLoading(false)
    //             } else {
    //                 alert('Failed to get subscription videos')
    //             }
    //         })
    // }

    const onClickDelete = (movieId, userFrom) => {

        // const variables = {
        //     movieId: movieId,
        //     userFrom: userFrom,
        // }

        // axios.post('/api/favorite/removeFromFavorite', variables)
        //     .then(response => {
        //         if (response.data.success) {
        //             fetchFavoredMovie()
        //         } else {
        //             alert('Failed to Remove From Favorite')
        //         }
        //     })
    }


    const onClickDeleteAll = () => {

        props.dispatch({ type: EMPTY_CART });
        setControlCarrito(false)

    }

    const renderCards = Carrito.map((value, index) => {


        const content = (
            <div>
                {value.poster_path ?
                    <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${value.backdrop_path}`} />
                    : "no image"}

            </div>
        );

        return <tr key={index}>

            <Popover content={content} title={`${value.title}`}>
                <td>{value.title}</td>
            </Popover>

            <td>{value.release_date}</td>
            <td><button onClick={() => onClickDelete(value.movieId, value.userFrom)}> Remove </button></td>
        </tr>
    })

    if (ControlCarrito) {
        return (
            <div style={{ width: '85%', margin: '3rem auto' }}>
                <Title level={2} > Carrito de {props.credentials.usuario.nombre} </Title>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Movie Title</th>
                            <th>Release Date</th>
                            <td>Remove from Cart</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCards}

                    </tbody>

                </table>
                <button onClick={() => onClickDeleteAll()}> Remove All </button>
                <button onClick={() => onClickDelete(Carrito.movieId, Carrito.userFrom)}> Comprar </button>
            </div>
        )

    } else {
        return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > Carrito de {props.credentials.usuario.nombre} </Title>
            <hr />
            <h4>PRIMERO AÑADE PRODUCTOS AL CARRITO</h4>
        </div>
        )
    }
}






export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search
}))(ShopCart);