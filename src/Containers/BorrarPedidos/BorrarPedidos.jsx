import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Typography, Popover, Button } from 'antd';
import './BorrarPedidos.css'
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";

const BorrarPedidos = (props) => {

    let navigate = useNavigate()


    const [Pedidos, setPedidos] = useState([])

    useEffect(() => {
        traerPedidos()
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

        console.log(value)
        try {
            let resultado = await axios.delete(`https://movie-db-geekshubs.herokuapp.com/pedidos/${value.id}`, config);
            alert("Usuario Eliminado con exito")
            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }


    const traerPedidos = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/pedidos/avanzado`, config);

            setPedidos(resultado.data)

        } catch (error) {
            console.log(error)
        }
    }

    const renderPedidos = Pedidos.map((value, index) => {

        return <tr key={index}>



            <td>{value.id}</td>
            <td>{value.correo}</td>

            <td>{value.Nombre}</td>
            <td>{value.Titulo_Alquilado}</td>
            <td>{value.Fecha_Alquiler}</td>
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
                    <h1>Borrar Pedidos</h1>
                    <table className="widgetLgTable">
                        <thead>
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Id Pedido</th>
                                <th className="widgetLgTh">Correo</th>
                                <th className="widgetLgTh">Nombre</th>
                                <th className="widgetLgTh">Titulo Alquilado</th>
                                <th className="widgetLgTh">Fecha Compra</th>
                                <th className="widgetLgTh">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderPedidos}
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
}))(BorrarPedidos);