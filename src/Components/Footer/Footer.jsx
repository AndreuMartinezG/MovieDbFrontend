import React from "react";
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {

    return (
        <div className="designFooter">
            <div className="divFooter">Autor :  Andreu Martinez ©</div>
            <div className="divFooter">
            <SocialIcon 
                url="https://www.linkedin.com/in/andreu-martinez-garcia-400a8433/" 
                style={{ height: 25, width: 25, marginLeft: 16 }}/>
            <SocialIcon 
                network="github" 
                bgColor="white"
                url="https://github.com/AndreuMartinezG/"
                style={{ height: 25, width: 25, marginLeft: 16 }}/>
            <SocialIcon 
                network="twitter" 
                url="https://twitter.com/Andreu_92"
                style={{ height: 25, width: 25, marginLeft: 16}}/>
            </div>
             
        </div>
    )
}

export default Footer;