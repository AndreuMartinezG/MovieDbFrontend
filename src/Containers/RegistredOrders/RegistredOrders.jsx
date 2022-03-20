import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";


import './RegistredOrders.css'
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";

const RegistredOrders = (props) => {

    const [Pedidos, setPedidos] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        traerPedidos()
    }, [])

    useEffect(() => {
        if (props.credentials.token === '' || props.credentials.usuario.rol === false) {
            navigate("/");
        }

    })

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
    const renderCarrito = Pedidos.map((value, index) => {

        const Button = ({ type }) => {
            return <button className={"widgetLgButton " + type}>{type}</button>;
        };

        return (
            <tr key={index} className="widgetLgTr">
                <td className="widgetLgName">{value.correo}
                </td>
                <td className="widgetLgDate">{value.Nombre}</td>
                <td className="widgetLgDate">{value.Edad}</td>
                <td className="widgetLgAmount">{value.Titulo_Alquilado}</td>
                <td className="widgetLgAmount">{value.Fecha_Alquiler}</td>
                <td className="widgetLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>
        )

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
                                <th className="widgetLgTh">Email</th>
                                <th className="widgetLgTh">Nombre</th>
                                <th className="widgetLgTh">Edad</th>
                                <th className="widgetLgTh">Titulo</th>
                                <th className="widgetLgTh">Fecha Compra</th>
                                <th className="widgetLgTh">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderCarrito}
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
}))(RegistredOrders);