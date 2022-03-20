import "./WidgetSmAdmin.css";
import { Visibility } from "@material-ui/icons";

import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import axios from "axios";

const WidgetSmAdmin = (props) => {

  const [Usuarios, setUsuarios] = useState([])

  useEffect(() => {
    traerUsuarios()
  }, [])

  const traerUsuarios = async () => {

    let config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    try {

      let resultado = await axios.get(`https://movie-db-geekshubs.herokuapp.com/usuarios`, config);

      let reversed = resultado.data.reverse();
      setUsuarios(reversed)

    } catch (error) {
      console.log(error)
    }
  }


  const renderUsuarios = Usuarios.map((value, index) => {
    


    return (
        <li key={index} className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{value.nombre} {value.apellido}</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            New
          </button>
        </li>
    )

  })




  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos Miembros</span>
      <ul className="widgetSmList">
        {renderUsuarios}
      </ul>
    </div>
  );

}

export default connect((state) => ({
  cart: state.cart,
  credentials: state.credentials,
  search: state.search
}))(WidgetSmAdmin);
