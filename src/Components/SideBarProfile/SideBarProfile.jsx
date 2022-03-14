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
                      Perfil
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Datos/Modificar Perfil
                    </li>
                  </ul>
                </div>
                <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Quick Menu</h3>
                  <ul className="sidebarList">
                    <Link to="/users" className="link">
                      <li className="sidebarListItem">
                        <PermIdentity className="sidebarIcon" />
                        Users
                      </li>
                    </Link>
                    <Link to="/products" className="link">
                      <li className="sidebarListItem">
                        <Storefront className="sidebarIcon" />
                        Products
                      </li>
                    </Link>
                    <li className="sidebarListItem">
                      <AttachMoney className="sidebarIcon" />
                      Transactions
                    </li>
                    <li className="sidebarListItem">
                      <BarChart className="sidebarIcon" />
                      Reports
                    </li>
                  </ul>
                </div>
                <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Notifications</h3>
                  <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <MailOutline className="sidebarIcon" />
                      Mail
                    </li>
                    <li className="sidebarListItem">
                      <DynamicFeed className="sidebarIcon" />
                      Feedback
                    </li>
                    <li className="sidebarListItem">
                      <ChatBubbleOutline className="sidebarIcon" />
                      Messages
                    </li>
                  </ul>
                </div>
                <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Staff</h3>
                  <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <WorkOutline className="sidebarIcon" />
                      Manage
                    </li>
                    <li className="sidebarListItem">
                      <Timeline className="sidebarIcon" />
                      Analytics
                    </li>
                    <li className="sidebarListItem">
                      <Report className="sidebarIcon" />
                      Reports
                    </li>
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


