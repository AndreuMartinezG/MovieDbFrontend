import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';

import './Header.css'


const Header = (props) => {

    let navigate = useNavigate();

    useEffect(()=>{
        console.log(props.credentials);
    })

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

    if (!props.credentials?.token) {
        return (
            <div className='designHeader'>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/")}>Home</div>
                </div>
                <div className="headerSpace"></div>
                <div className="headerSpace linksAuth">
                    <div className="link" onClick={() => navegar("/login")}>Login</div>
                    <div className="link" onClick={() => navegar("/register")}>Register</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='designHeader'>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/")}>Home</div>
                    <div className="link" onClick={() => navegar("/profile")}>Profile</div>
                </div>
                <div className="headerSpace"></div>
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