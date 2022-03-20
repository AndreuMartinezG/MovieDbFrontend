import React, { useState } from 'react';

import "./SideBarAdmin.css";
import {

    PermIdentity,
    Storefront,
    AttachMoney,

} from "@material-ui/icons";
import { Link } from "react-router-dom";


const SideBarAdmin = () => {



    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Info</h3>
                    <ul className="sidebarList">

                        <Link to="/admin" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Area Admin
                            </li>
                        </Link>
                        <Link to="/registredUsers" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Usuarios Registrados
                            </li>
                        </Link>
                        <Link to="/registredFilms" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Peliculas Registradas
                            </li>
                        </Link>
                        <Link to="/registredOrders" className="link">
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon" />
                                Pedidos Registrados
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Actions</h3>
                    <ul className="sidebarList">
                        <Link to="/borrarUsuarios" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Borrar Usuarios
                            </li>
                        </Link>
                        <Link to="/borrarPelicula" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Borrar Peliculas
                            </li>
                        </Link>
                        <Link to="/borrarPedidos" className="link">
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon" />
                                Borrar Pedidos
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBarAdmin;

