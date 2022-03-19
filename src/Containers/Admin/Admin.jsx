import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Chart from "../../Components/Chart/Chart";
import SideBarAdmin from "../../Components/SideBarAdmin/SideBarAdmin";
import { connect } from "react-redux";
import { userData } from "./dummyData";

import './Admin.css';
import WidgetSmAdmin from "../../Components/WidgetSmAdmin/WidgetSmAdmin";
import WidgetLgAdmin from "../../Components/WidgetLgAdmin/WidgetLgAdmin";


const Admin = (props) => {

    let navigate = useNavigate()

    useEffect(() => {
    }, [])

    useEffect(() => {
        if (props.credentials.token === '' || props.credentials.usuario.rol === false) {
            navigate("/");
        }

    })

    return (
        <div className="designAdmin">
            <SideBarAdmin />
            <div className="designAdminBody">
                <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
                <div className="designwidgetsAdmin">
                    <WidgetSmAdmin />
                    <WidgetLgAdmin />
                </div>
            </div>
        </div>
    );
};

export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search
}))(Admin);