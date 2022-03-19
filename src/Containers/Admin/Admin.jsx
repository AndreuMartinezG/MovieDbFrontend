import React from "react";
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";

import './Admin.css';


const Admin = () => {

    return (
        <div className="designAdmin">
            <SideBarAdmin />
            <div className="designAdminBody">
                Soy Admin
            </div>
        </div>
    );
};

export default Admin;