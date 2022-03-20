import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, Popover, Button } from 'antd';
import axios from "axios";


import './BorrarPelicula.css'
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";

const BorrarPelicula = (props) => {

    let navigate = useNavigate()


    const [Pelicula, setPelicula] = useState([])

    useEffect(() => {
        traerPelicula()
    }, [])

    useEffect(() => {
        if (props.credentials.token === '' || props.credentials.usuario.rol === false) {
            navigate("/");
        }

    })


    const onClickDelete = async (value) => {
        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        console.log( "ESTO ES BOY")
        try {
            let resultado = await axios.delete(`https://movie-db-geekshubs.herokuapp.com/peliculas/remove/${value.id}`, config);
            alert("Usuario Eliminado con exito")
            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }


    const traerPelicula = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/peliculas`, config);
            setPelicula(resultado.data)
        } catch (error) {
            console.log(error)
        }
    }

    
    const renderPelicula = Pelicula.map((value, index) => {

        return <tr key={index}>



            <td>{value.id}</td>

            <td>{value.titulo}</td>
            <td>{value.fecha}</td>
            <td><Button key={value.id} onClick={() => onClickDelete(value)} type="primary" danger>
                Eliminar
            </Button></td>

        </tr>

    })






    return (
        <div className="designPedidos">
            <SideBarAdmin />
            <div className="userUpdate2 widthPedidos">
                <div className="widgetLg">
                    <h1>Borrar Peliculas</h1>
                    <table className="widgetLgTable">
                        <thead>
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Id</th>
                                <th className="widgetLgTh">Titulo</th>
                                <th className="widgetLgTh">Fecha Estreno</th>
                                <th className="widgetLgTh">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderPelicula}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search
}))(BorrarPelicula);