import './SideBarProfile.css';
import React, { useState } from 'react';

import "./SideBarProfile.css";
import {

  PermIdentity,
  Storefront,
  AttachMoney,

} from "@material-ui/icons";
import { Link } from "react-router-dom";


const SideBarProfile = () => {


  const [opened, setOpened] = useState(false);



  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">

            <Link to="/profile" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Area Usuario
              </li>
            </Link>
            <Link to="/datosPerfil" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Datos Perfil
              </li>
            </Link>
            <Link to="/pedidos" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Pedidos
              </li>
            </Link>
            <Link to="/shopcart" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Carrito
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/peliculas" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Peliculas
              </li>
            </Link>
            <Link to="/series" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Series
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBarProfile;


