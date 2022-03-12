import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { LOGOUT, MOVIES_TITLE } from '../../redux/types';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import './Header.css'
import { API_KEY } from '../../configPeliculas';
import axios from "axios";



const Header = (props) => {

    let navigate = useNavigate();

    const [titulo, setTitulo] = useState("");


    const navegar = (lugar) => {

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({type:LOGOUT});

        setTimeout(()=>{
            navigate("/");
        },1500);
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

            props.dispatch({type: MOVIES_TITLE, payload: resultados.data});

            setTimeout(()=>{
                navigate("/resultadobusqueda");
            },500);


        } catch (error) {
            console.log(error);
        }
    }

    if (!props.credentials?.token) {

        return (
            <div className='designHeader'>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/")}>Home</div>
                </div>

                <div className="headerSpace linksAuth">
                    <div className="link" onClick={() => navegar("/login")}>Login</div>
                    <div className="link" onClick={() => navegar("/register")}>Register</div>
                </div>
            </div>
        )

    } else if (props.credentials?.token && props.credentials?.usuario.rol === true) {

        return (
            <div className='designHeader'>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/")}>Home</div>
                    <div className="link" onClick={() => navegar("/peliculas")}>Peliculas</div>
                    <div className="link" onClick={() => navegar("/")}>Series</div>
                    <div className="link" onClick={() => navegar("/profile")}>Perfil</div>
                    <div className="link" onClick={() => navegar("/shopcart")}>Carrito</div>
                </div>
                <div className="headerSpace searchSpace">
                    <Input.Group compact>
                        <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Busca una película por título" onChange={(ev)=>manejador(ev)}/>
                        <Button onClick={()=>busquedaPorTitulo()} type="primary">Go!</Button>
                    </Input.Group>
                </div>
                <div className="headerSpace linksAuth">
                    <div className="link" onClick={() => navegar("/admin")}>Admin</div>
                    <div className="link" onClick={() => logOut()}>LogOut</div>
                </div>
            </div>
        )

    } else {

        return (
            <div className='designHeader'>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/")}>Home</div>
                    <div className="link" onClick={() => navegar("/")}>Peliculas</div>
                    <div className="link" onClick={() => navegar("/")}>Series</div>
                    <div className="link" onClick={() => navegar("/profile")}>Profile</div>
                </div>
                <div className="headerSpace searchSpace">
                    <Input.Group compact>
                        <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Busca una película por título" onChange={(ev)=>manejador(ev)}/>
                        <Button onClick={()=>busquedaPorTitulo()} type="primary">Go!</Button>
                    </Input.Group>
                </div>
                <div className="headerSpace linksAuth">

                    <div className="link" onClick={() => logOut()}>LogOut</div>
                    
                </div>
            </div>
        )
    }

}


export default connect((state)=>({
    credentials: state.credentials
}))(Header);