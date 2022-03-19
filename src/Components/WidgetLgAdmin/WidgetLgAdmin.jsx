
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import axios from "axios";
import "./WidgetLgAdmin.css";

const WidgetLgAdmin = (props) => {

    const [Pedidos, setPedidos] = useState([])

    useEffect(() => {
        traerPedidos()
    }, [])


    const traerPedidos = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/pedidos/avanzado`, config);
            
            let cuted = resultado.data.slice(-4)
            let reversed = cuted.reverse();
            setPedidos(reversed)

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
                <td className="widgetLgDate">{value.Fecha_Alquiler}</td>
                <td className="widgetLgAmount">{value.Titulo_Alquilado}</td>
                <td className="widgetLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>
        )

    })



    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLgAdmin">
            <h3 className="widgetLgTitleAdmin">Ultimas Peliculas Vendidas</h3>
            <table className="widgetLgTableAdmin">
                <tbody>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Email</th>
                    <th className="widgetLgTh">Nombre</th>
                    <th className="widgetLgTh">Fecha</th>
                    <th className="widgetLgTh">Titulo</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {renderCarrito}
                </tbody>
            </table>
        </div>
    );
}

export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search
}))(WidgetLgAdmin);
