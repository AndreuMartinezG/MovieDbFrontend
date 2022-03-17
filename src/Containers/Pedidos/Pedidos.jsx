import React , { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import SideBarProfile from "../../Components/SideBarProfile/SideBarProfile";
import { connect } from 'react-redux';
import axios from "axios";


import './Pedidos.css'

const Pedidos = (props) => {

    
    let navigate = useNavigate()

    useEffect(() => {
        traerPedidos()
    }, [])

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }

    })
    
    
    const traerPedidos = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let body = props.credentials.usuario.id
            console.log(body, "ESTO ES EL BODY")
            let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/pedidos/${props.credentials.usuario.id}`, config);

            console.log(resultado)

        }catch (error) {
            console.log(error)
        }
    }






    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };

    return (
        <div className="designPedidos">
            <SideBarProfile />
            <div className="userUpdate2 widthPedidos">
                <div className="widgetLg">
                    <h3 className="widgetLgTitle">Pedidos</h3>
                    <table className="widgetLgTable">
                        <thead>
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Customer</th>
                                <th className="widgetLgTh">Date</th>
                                <th className="widgetLgTh">Amount</th>
                                <th className="widgetLgTh">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <img
                                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                        className="widgetLgImg"
                                    />
                                    <span className="widgetLgName">Susan Carol</span>
                                </td>
                                <td className="widgetLgDate">2 Jun 2021</td>
                                <td className="widgetLgAmount">$122.00</td>
                                <td className="widgetLgStatus">
                                    <Button type="Approved" />
                                </td>
                            </tr>
                            <tr className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <img
                                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                        className="widgetLgImg"
                                    />
                                    <span className="widgetLgName">Susan Carol</span>
                                </td>
                                <td className="widgetLgDate">2 Jun 2021</td>
                                <td className="widgetLgAmount">$122.00</td>
                                <td className="widgetLgStatus">
                                    <Button type="Declined" />
                                </td>
                            </tr>
                            <tr className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <img
                                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                        className="widgetLgImg"
                                    />
                                    <span className="widgetLgName">Susan Carol</span>
                                </td>
                                <td className="widgetLgDate">2 Jun 2021</td>
                                <td className="widgetLgAmount">$122.00</td>
                                <td className="widgetLgStatus">
                                    <Button type="Pending" />
                                </td>
                            </tr>
                            <tr className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <img
                                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                        className="widgetLgImg"
                                    />
                                    <span className="widgetLgName">Susan Carol</span>
                                </td>
                                <td className="widgetLgDate">2 Jun 2021</td>
                                <td className="widgetLgAmount">$122.00</td>
                                <td className="widgetLgStatus">
                                    <Button type="Approved" />
                                </td>
                            </tr>
                            <tr className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <img
                                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                        className="widgetLgImg"
                                    />
                                    <span className="widgetLgName">Susan Carol</span>
                                </td>
                                <td className="widgetLgDate">2 Jun 2021</td>
                                <td className="widgetLgAmount">$122.00</td>
                                <td className="widgetLgStatus">
                                    <Button type="Declined" />
                                </td>
                            </tr>
                            <tr className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <img
                                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                        className="widgetLgImg"
                                    />
                                    <span className="widgetLgName">Susan Carol</span>
                                </td>
                                <td className="widgetLgDate">2 Jun 2021</td>
                                <td className="widgetLgAmount">$122.00</td>
                                <td className="widgetLgStatus">
                                    <Button type="Pending" />
                                </td>
                            </tr>
                            <tr className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <img
                                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                        className="widgetLgImg"
                                    />
                                    <span className="widgetLgName">Susan Carol</span>
                                </td>
                                <td className="widgetLgDate">2 Jun 2021</td>
                                <td className="widgetLgAmount">$122.00</td>
                                <td className="widgetLgStatus">
                                    <Button type="Approved" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default connect((state) => ({
    cart: state.cart,
    credentials: state.credentials,
    search: state.search
}))(Pedidos);