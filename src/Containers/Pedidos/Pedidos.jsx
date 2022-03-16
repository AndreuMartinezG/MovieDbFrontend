import React from "react";
import SideBarProfile from "../../Components/SideBarProfile/SideBarProfile";

import './Pedidos.css'

const Pedidos = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };

    return (
        <div className="designPedidos">
            <SideBarProfile />
            <div className="userUpdate">
                <h3 className="widgetLgTitle">Latest transactions</h3>

            </div>
            
        </div>
    )
}

export default Pedidos;