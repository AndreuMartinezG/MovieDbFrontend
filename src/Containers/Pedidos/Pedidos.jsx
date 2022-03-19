import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import SideBarProfile from "../../Components/SideBarProfile/SideBarProfile";
import { connect } from 'react-redux';
import axios from "axios";


import './Pedidos.css'

const Pedidos = (props) => {

    const [Pedidos, setPedidos] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        traerPedidos()
    }, [])

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }

    })


    const traerPedidos = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let body = props.credentials.usuario.id
            let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/pedidos/${props.credentials.usuario.id}`, config);

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
                <td className="widgetLgUser">
                    <img
                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                        className="widgetLgImg"
                    />
                    <span className="widgetLgName">{value.Titulo_Alquilado}</span>
                </td>
                <td className="widgetLgDate">{value.Fecha_Alquiler}</td>
                <td className="widgetLgAmount">{value.Precio}</td>
                <td className="widgetLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>
        )

    })






    return (
        <div className="designPedidos">
            <SideBarProfile />
            <div className="userUpdate2 widthPedidos">
                <div className="widgetLg">
                    <h1>Pedidos</h1>
                    <table className="widgetLgTable">
                        <thead>
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Film</th>
                                <th className="widgetLgTh">Date</th>
                                <th className="widgetLgTh">Price</th>
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
}))(Pedidos);