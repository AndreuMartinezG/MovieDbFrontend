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
        setCarrito(props.cart.products)

    }, [])

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }

    })

    useEffect(() => {
        if (Carrito.length !== 0){
            setControlCarrito(true)
        }else {
            setControlCarrito(false)
        }
    }, [ControlCarrito])


    //ELIMINO SOLO UN ITEM DEL CARRITO
    const onClickDelete = (value) => {
        props.dispatch({type: REMOVE_CART, payload: value})
        setControlCarrito(false)
        window.location.reload()
    }


    // FUNCION PARA ELIMINAR TODOS LOS PRODUCTOS DEL CARRITO
    const onClickDeleteAll = () => {

        props.dispatch({ type: EMPTY_CART });
        setControlCarrito(false)
        window.location.reload()

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
            <td><Button key={value.id} onClick={() => onClickDelete(value)} type="primary" danger>
                remove
            </Button></td>

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
                            <th>Remove from Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCards}

                    </tbody>

                </table>
                <div className="botonesShop">
                    <Button className='botonIndividualShop' onClick={() => onClickComprar()} type="primary" >
                        Buy
                    </Button>
                    <Button className='botonIndividualShop' onClick={() => onClickDeleteAll()} type="primary" danger>
                        Remove All
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