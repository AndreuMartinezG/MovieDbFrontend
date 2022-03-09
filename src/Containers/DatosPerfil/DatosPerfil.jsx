import React, { useEffect } from "react";
import './DatosPerfil.css'
import SideBarProfile from "../../Components/SideBarProfile/SideBarProfile";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';



const DatosPerfil = (props) => {

    let navigate = useNavigate()


    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })

    return (
        <div className="designDatosPerfil">
            <SideBarProfile />
            <div className="designProfileHalf profileLeft">
                <div className="profileField">Nombre: {props.credentials.usuario.nombre} </div>
                <div className="profileField">Apellidos: {props.credentials.usuario.apellido}
                </div>
                <div className="profileField">Email: {props.credentials.usuario.email}</div>
                <div className="profileField">Teléfono: {props.credentials.usuario.telefono}</div>
                <div className="profileField">N. cuenta: {props.credentials.usuario.numCuenta}</div>
            </div>

        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials
}))(DatosPerfil);