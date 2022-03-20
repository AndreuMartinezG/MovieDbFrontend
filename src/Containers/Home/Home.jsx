import React from "react";
import logo from '../../img/mainHomeImg.jpg';
import './Home.css';
import { Button } from "antd";
import { connect } from "react-redux";

const Home = (props) => {

    if (!props.credentials?.token) {
        return (
            <div className="designHome">
                <div className="bodyPart"></div>
                <div className="bodyPart"></div>
                <div className="bodyPart column">
                    <div className="enlacesHomeUp">
                        <div className="enlacesHomeUp"><h1 className="h1Home">Wellcome to MINIMAL MOVIES</h1></div>
                    </div>
                    <div className="enlacesHome">
                        <div className="enlacesHomeDown">
                            <div className="row">
                                <div className="mitadEnlacesDown"></div>
                                <div className="mitadEnlacesDown">
                                    <div className="introHome">
                                        <h1 className="textoHome">Para disfrutar de nuestra web primero:</h1>
                                    </div>
                                </div>
                            </div>


                            <div className="enlacesDistribucion">
                                <div className="cardHomeLogin"><Button type="primary">Login</Button></div>
                                <div className="cardHomeLogin"><h2 className="OR">OR</h2></div>
                                <div className="cardHomeLogin"><Button type="primary">Register</Button></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="designHome">
                <div className="bodyPart"></div>
                <div className="bodyPart"></div>
                <div className="bodyPart column">
                    <div className="enlacesHomeUp">
                        <div className="columnBody">
                            <h1 className="h1Home">Bienvenido de nuevo {props.credentials?.usuario.nombre}</h1>
                            <h2 className="h2Home">Consulta nuestras  {
                            <Button type="primary" className="bottonNovedadeHome" onClick={()=>'/peliculas'}>Novedades</Button>}</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};


export default connect((state) => ({
    credentials: state.credentials
}))(Home);