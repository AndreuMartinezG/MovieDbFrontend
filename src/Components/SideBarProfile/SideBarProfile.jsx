import './SideBarProfile.css';
import { useState } from 'react';
import { Drawer, Burger } from '@mantine/core';


function SideBarProfile() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer className='color'
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        padding="xl"
        size="50vw"
        position='left'
      >
        <navbar className="flex">
          <h1 className='titulo-lateral'>Tu Perfil:</h1>
          <div className='bt-lateral'>item 1</div>
          <div className='bt-lateral'>item 2</div>
          <div className='bt-lateral'>item 3</div>
          <div className='bt-lateral'>item 4</div>

        </navbar>
      </Drawer>

      <Burger opened={opened} onClick={() => setOpened(true)}>Open Drawer</Burger>
    </>
  );
}

export default SideBarProfile;