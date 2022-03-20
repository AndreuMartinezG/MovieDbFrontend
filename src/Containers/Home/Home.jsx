import React from "react";
import logo from '../../img/mainHomeImg.jpg';
import './Home.css';
import { Button } from "antd";

const Home = () => {

    return (
        <div className="designHome">
            <div className="bodyPart"></div>
            <div className="bodyPart"></div>
            <div className="bodyPart column">
                <div className="enlacesHomeUp">
                    <div className="enlacesHomeUp"><h1 className="h1Home">Wellcome to MINIMAL TV</h1></div>
                </div>
                <div className="enlacesHome">
                    <div className="enlacesHomeDown">
                        <div className="introHome"><h2>Para disfrutar de nuestra web primero</h2></div>
                        <div className="cardHomeLogin"><Button type="primary">Login</Button></div>
                        <div className="cardHomeLogin">Or</div>
                        <div className="cardHomeLogin"><Button type="primary">Register Now!</Button></div>
                    </div>    
                </div>    
            </div>
        </div>
    )
};


export default Home;