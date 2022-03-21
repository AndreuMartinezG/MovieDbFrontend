import './SideBarProfile.css';
import React, { useState } from 'react';

import "./SideBarProfile.css";
import {
  AttachMoney,
  AddShoppingCart,
  Theaters,
  Tv,
  Settings
} from "@material-ui/icons";
import { Link } from "react-router-dom";
const SideBarProfile = () => {




  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/datosPerfil" className="link">
              <li className="sidebarListItem">
                <Settings className="sidebarIcon" />
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
                <AddShoppingCart className="sidebarIcon" />
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
                <Theaters className="sidebarIcon" />
                Peliculas
              </li>
            </Link>
            <Link to="/series" className="link">
              <li className="sidebarListItem">
                <Tv className="sidebarIcon" />
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


