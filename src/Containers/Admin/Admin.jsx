import React from "react";
import Chart from "../../Components/Chart/Chart";
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";
import { connect } from "react-redux";
import { userData } from "./dummyData";

import './Admin.css';


const Admin = (props) => {

    return (
        <div className="designAdmin">
            <SideBarAdmin />
            <div className="designAdminBody">
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            </div>
        </div>
    );
};

export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search
}))(Admin);