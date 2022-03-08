import './SideBarProfile.css';
import { useState } from 'react';
import { Drawer, Burger } from '@mantine/core';
import { useNavigate } from "react-router-dom";


function SideBarProfile() {

    let navigate = useNavigate();

    const [opened, setOpened] = useState(false);

    const navegar = (lugar) => {

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

    return (
        <>
            <Drawer 
                className='sideBar'
                opened={opened}
                onClose={() => setOpened(false)}
                title=""
                padding="xl"
                size="20vw"
                position='left'
            >

                <h1 className='titulo-lateral' > Opciones: <hr/></h1>
                <div className="flexSide">
                    <div className='bt-lateral' onClick={() => navegar("/profile")}>Pedidos </div>
                    <div className='bt-lateral' onClick={() => navegar("/")}>Datos de Perfil</div>
                    <div className='bt-lateral' onClick={() => navegar("/")}>Modificar Perfil</div>
                    <div className='bt-lateral' onClick={() => navegar("/peliculas")}>Buscar Peliculas</div>
                </div>


            </Drawer>

            <Burger opened={opened} onClick={() => setOpened(true)}>Open Drawer</Burger>
        </>
    );
}

export default SideBarProfile;