import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGOUT, MOVIES_TITLE, EMPTY_CART } from '../../redux/types';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import './Header.css'
import { API_KEY } from '../../configPeliculas';
import axios from "axios";
import {

    PermIdentity,
    Theaters,
    Tv,
    AddShoppingCart,
    PowerSettingsNewOutlined,
    Settings,
    HomeRounded,

} from "@material-ui/icons";

import Login from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logo from '../../img/breakingNew.jpg'



const Header = (props) => {

    let navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [ContadorPedido, setContadorPedido] = useState()

    useEffect(() => {
        pedidosActivos()
    }, [])

    useEffect(() => {
        pedidosActivos()
    }, [ContadorPedido])

    const navegar = (lugar) => {

        setTimeout(() => {
            pedidosActivos()
            navigate(lugar);
        }, 200);

    }

    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: EMPTY_CART });
        props.dispatch({ type: LOGOUT });


        setTimeout(() => {
            navigate("/");
        }, 500);
    }


    const manejador = (ev) => {
        setTitulo(ev.target.value);
    }


    const busquedaPorTitulo = async () => {

        //Axios que trae resultados....

        try {
            let resultados = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${titulo}&page=1&include_adult=false`);

            console.log(resultados)
            //Guardo en redux los resultados de las películas

            props.dispatch({ type: MOVIES_TITLE, payload: resultados.data });

            setTimeout(() => {
                navigate("/resultadobusqueda");
            }, 500);


        } catch (error) {
            console.log(error);
        }
    }

    const pedidosActivos = () => {

        let count = props.cart.products.length
        if (count === 0) {
            setContadorPedido(count)
        } else {
            setContadorPedido(count)
        }

    }


    // RENDER

    if (!props.credentials?.token) {

        return (
            <div className='designHeader'>
                <div className="headerSpace linksDesign">
                    
                </div>
                <div className="spaceHeader linksDesign heigth">
                    <div className="link " onClick={() => navegar("/")}><HomeRounded fontSize="large" /></div>
                </div>
                <div className="headerSpace linksAuth">
                    <div className="link" onClick={() => navegar("/login")}><Login /> Login</div>
                    <div className="link" onClick={() => navegar("/register")}><AppRegistrationIcon /> Register</div>
                </div>
            </div>
        )

    } else if (props.credentials?.token && props.credentials?.usuario.rol === true) {

        return (
            <div className='designHeader'>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/")}><HomeRounded fontSize="large" /></div>
                    <div className="link" onClick={() => navegar("/peliculas")}><Theaters /> Peliculas</div>
                    <div className="link" onClick={() => navegar("/series")}><Tv /> Series</div>
                    <div className="link" onClick={() => navegar("/profile")}><PermIdentity />Perfil</div>
                    <div className="link topbarIconContainer" onClick={() => navegar("/shopcart")}>
                        <AddShoppingCart />
                        {ContadorPedido !== 0 ? <span className="topIconBadge">{ContadorPedido}</span> : null}
                    </div>
                </div>
                <div className="headerSpace searchSpace">
                    <Input.Group compact>
                        <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Busca una película por título" onChange={(ev) => manejador(ev)} />
                        <Button onClick={() => busquedaPorTitulo()} type="primary">Go!</Button>
                    </Input.Group>
                </div>
                <div className="headerSpace linksAuth">
                    <div className="link" onClick={() => navegar("/admin")}><Settings />Admin</div>
                    <div className="link" onClick={() => logOut()}><PowerSettingsNewOutlined /></div>
                </div>
            </div>
        )

    } else {

        return (
            <div className='designHeader'>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/")}><HomeRounded fontSize="large" /></div>
                    <div className="link" onClick={() => navegar("/peliculas")}><Theaters /> Peliculas</div>
                    <div className="link" onClick={() => navegar("/series")}><Tv /> Series</div>
                    <div className="link" onClick={() => navegar("/profile")}><PermIdentity />Perfil</div>
                    <div className="link topbarIconContainer" onClick={() => navegar("/shopcart")}>
                        <AddShoppingCart />
                        {ContadorPedido !== 0 ? <span className="topIconBadge">{ContadorPedido}</span> : null}
                    </div>
                </div>
                <div className="headerSpace searchSpace">
                    <Input.Group compact>
                        <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Busca una película por título" onChange={(ev) => manejador(ev)} />
                        <Button onClick={() => busquedaPorTitulo()} type="primary">Go!</Button>
                    </Input.Group>
                </div>
                <div className="headerSpace linksAuth">

                    <div className="link" onClick={() => logOut()}><PowerSettingsNewOutlined /></div>

                </div>
            </div>
        )
    }

}


export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search
}))(Header);