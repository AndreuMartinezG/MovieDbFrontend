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
                opened={opened}
                onClose={() => setOpened(false)}
                title=""
                padding="xl"
                size="50vw"
                position='left'
            >

                <h1 className='titulo-lateral' >Opciones:</h1>
                <div className='bt-lateral' onClick={() => navegar("/")}>Tus Datos de Perfil</div>
                <div className='bt-lateral'>item 2</div>
                <div className='bt-lateral'>item 3</div>
                <div className='bt-lateral'>item 4</div>

            </Drawer>

            <Burger opened={opened} onClick={() => setOpened(true)}>Open Drawer</Burger>
        </>
    );
}

export default SideBarProfile;