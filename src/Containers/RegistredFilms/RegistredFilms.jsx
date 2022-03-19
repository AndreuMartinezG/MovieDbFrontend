import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import SideBarProfile from "../../Components/SideBarProfile/SideBarProfile";
import { connect } from 'react-redux';
import axios from "axios";


import './RegistredFilms.css'
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";

const RegistredFilms = (props) => {

    const [Films, setFilms] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        traerFilms()
    }, [])

    useEffect(() => {
        if (props.credentials.token === '' || props.credentials.usuario.rol === false) {
            navigate("/");
        }

    })


    const traerFilms = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {
            let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/peliculas`, config);
            setFilms(resultado.data)

        } catch (error) {
            console.log(error)
        }
    }

    const renderFilms = Films.map((value, index) => {

        const Button = ({ type }) => {
            return <button className={"widgetLgButton " + type}>{type}</button>;
        };

        return (
            <tr key={index} className="widgetLgTr">
                <td className="widgetLgUser">
                    <span className="widgetLgName">{value.titulo}</span>
                </td>
                <td className="widgetLgDate">{value.fecha}</td>
                <td className="widgetLgAmount">{value.genero}</td>
                <td className="widgetLgAmount">{value.id}</td>

            </tr>
        )

    })






    return (
        <div className="designPedidos">
            <SideBarAdmin />
            <div className="userUpdate2 widthPedidos">
                <div className="widgetLg">
                    <h1>Peliculas Registradas</h1>
                    <table className="widgetLgTable">
                        <thead>
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Pelicula</th>
                                <th className="widgetLgTh">Fecha Estreno</th>
                                <th className="widgetLgTh">Genero</th>
                                <th className="widgetLgTh">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderFilms}
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
}))(RegistredFilms);