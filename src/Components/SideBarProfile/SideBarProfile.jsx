import './SideBarProfile.css';
import { useState } from 'react';
import { Drawer, Burger } from '@mantine/core';
import { useNavigate } from "react-router-dom";

import "./SideBarProfile.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";


function SideBarProfile() {

    let navigate = useNavigate();

    const [opened, setOpened] = useState(false);

    const navegar = (lugar) => {

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

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
                    <Link to="/carrito" className="link">
                    <li className="sidebarListItem">
                      <Storefront className="sidebarIcon" />
                      Carrito
                    </li>
                    </Link>
                    <Link to="/pedidos" className="link">
                    <li className="sidebarListItem">
                      <AttachMoney className="sidebarIcon" />
                      Pedidos
                    </li>
                    </Link>
                  </ul>
                </div>
                <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Quick Menu</h3>
                  <ul className="sidebarList">
                    <Link to="/users" className="link">
                      <li className="sidebarListItem">
                        <PermIdentity className="sidebarIcon" />
                        Peliculas
                      </li>
                    </Link>
                    <Link to="/products" className="link">
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



        // <>
        //     <Drawer
        //         className='sideBar'
        //         opened={opened}
        //         onClose={() => setOpened(false)}
        //         title=""
        //         padding="xl"
        //         size="20wh"
        //         position='left'
        //     >

        //         <h1 className='titulo-lateral' > Opciones: <hr /></h1>
        //         <div className="flexSide">
        //             <div className='bt-lateral' onClick={() => navegar("/pedidos")}>Pedidos </div>
        //             <div className='bt-lateral' onClick={() => navegar("/datosPerfil")}>Datos de Perfil</div>
        //             <div className='bt-lateral' onClick={() => navegar("/modificarPerfil")}>Modificar Perfil</div>
        //             <div className='bt-lateral' onClick={() => navegar("/peliculas")}>Buscar Peliculas</div>
        //         </div>


        //     </Drawer>

        //     <Burger
        //         opened={opened}
        //         onClick={() => setOpened(true)}
        //         size= "xl"
        //         color="#45f50d" 
        //     >
        //         Open Drawer</Burger>
        // </>


