import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, Popover, Button } from 'antd';
import axios from "axios";


import './BorrarUsuarios.css'
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";

const BorrarUsuarios = (props) => {

    let navigate = useNavigate()


    const [Usuario, setUsuario] = useState([])

    useEffect(() => {
        traerUsuarios()
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

        try {
            let resultado = await axios.delete(`https://movie-db-geekshubs.herokuapp.com/usuarios/${value.id}`, config);
            alert("Usuario Eliminado con exito")
            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }


    const traerUsuarios = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/usuarios`, config);
            setUsuario(resultado.data)

        } catch (error) {
            console.log(error)
        }
    }
    const renderUsuario = Usuario.map((value, index) => {

        return <tr key={index}>



            <td>{value.nombre} {value.apellido}</td>

            <td>{value.email}</td>
            <td>{value.telefono}</td>
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
                    <h1>Todos los Pedidos</h1>
                    <table className="widgetLgTable">
                        <thead>
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Nombre</th>
                                <th className="widgetLgTh">Email</th>
                                <th className="widgetLgTh">Telefono</th>
                                <th className="widgetLgTh">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderUsuario}
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
}))(BorrarUsuarios);