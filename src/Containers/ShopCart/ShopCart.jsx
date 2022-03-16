import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { EMPTY_CART, REMOVE_CART } from '../../redux/types';
import { Typography, Popover, Button } from 'antd';
import axios from 'axios';
import moment from 'moment'

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

    // FUNCION PARA ELIMINAR TODOS LOS PRODUCTOS DEL CARRITO
    const onClickDeleteAll = () => {

        props.dispatch({ type: EMPTY_CART });
        setControlCarrito(false)

    }


    //FUNCION PARA COMPRAR

    const onClickComprar = () => {

        Carrito.map(value => {

            const comprar = async () => {

                let config = {
                    headers: { Authorization: `Bearer ${props.credentials.token}` }
                };

                try {
                    let body = {
                        id: value.id,
                        titulo: value.title,
                        genero: value.genre_ids[0],
                        adult: value.adult,
                        fecha: value.release_date
                    }

                    console.log(body)
                    let resultado = await axios.post("https://movie-db-geekshubs.herokuapp.com/peliculas", body, config);

                    console.log("resultado", resultado)

                    let body2 = {
                        precio: 5,
                        peliculaId: value.id,
                        usuarioId: props.credentials.usuario.id,
                        fechaEntrega: moment().format('L')
                    }

                    let res2 = await axios.post("https://movie-db-geekshubs.herokuapp.com/pedidos", body2, config);

                    console.log(res2, "esto es la respuesta del pedido")

                } catch (error) {

                }
            }

            comprar();

        })
        alert("Pedido Realizado con EXITO!")
        onClickDeleteAll();
    }


    // FUNCION PARA MAPEAR EL CARRITO
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
            <div className='designShop' style={{ width: '85%', margin: '3rem auto' }}>
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
                <div className="botonesShop">
                    <Button onClick={() => onClickDeleteAll()} type="primary">
                        Remove All
                    </Button>
                    <Button onClick={() => onClickComprar()} type="primary">
                        Buy
                    </Button>
                </div>

            </div>
        )

    } else {
        return (
            <div className='designShop' style={{ width: '85%', margin: '3rem auto' }}>
                <Title level={2} > Carrito de {props.credentials.usuario.nombre} </Title>
                <hr />
                <h4>AÑADE PRODUCTOS AL CARRITO</h4>
            </div>
        )
    }
}






export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search
}))(ShopCart);