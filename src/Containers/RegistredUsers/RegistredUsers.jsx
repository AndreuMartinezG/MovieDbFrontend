import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";
import { connect } from 'react-redux';
import axios from "axios";


import './RegistredUsers.css'

const RegistredUsers = (props) => {

    const [Usuarios, setUsuarios] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        traerUsuarios()
    }, [])

    useEffect(() => {
        if (props.credentials.token === '' || props.credentials.usuario.rol === false) {
            navigate("/");
        }


    })


    const traerUsuarios = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            
            let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/usuarios`, config);
            setUsuarios(resultado.data)

        } catch (error) {
            console.log(error)
        }
    }

    const renderUsuarios = Usuarios.map((value, index) => {

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
                    <span className="widgetLgName">{value.email}</span>
                </td>
                <td className="widgetLgDate">{value.nombre} {value.apellido}</td>
                <td className="widgetLgAmount">{value.edad}</td>
                <td className="widgetLgAmount">{value.telefono }</td>
                <td className="widgetLgAmount">{value.id}</td>
                
            </tr>
        )

    })






    return (
        <div className="designPedidos">
            <SideBarAdmin />
            <div className="userUpdate2 widthPedidos">
                <div className="widgetLg">
                    <h1>Usuarios Registrados</h1>
                    <table className="widgetLgTable">
                        <thead>
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Email</th>
                                <th className="widgetLgTh">Nombre - Apellido</th>
                                <th className="widgetLgTh">Edad</th>
                                <th className="widgetLgTh">Telefono</th>
                                <th className="widgetLgTh">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderUsuarios}
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
}))(RegistredUsers);