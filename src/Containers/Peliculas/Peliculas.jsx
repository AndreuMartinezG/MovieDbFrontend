import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {raiz} from '../../utiles';
import { connect } from 'react-redux';

import './Peliculas.css'


const Peliculas = (props) => {


    let navigate = useNavigate();

    //HOOKS
    const [films, setFilms] = useState([]);


    //useEffect
    useEffect(()=>{
        traePelis();
    },[]);

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })

    useEffect(()=>{
        //espera a cambio en el HOOK de films
    },[films]);
   
    const traePelis = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.get("https://movie-db-geekshubs.herokuapp.com/peliculas/novedades", config);

            setTimeout(()=>{

                setFilms(res.data.results);
            },2000);

        } catch (error) {
            console.log(error);
        }
    };


    if(films[0]?.id != undefined){
        return(
            <div className="designRooster">

                {
                    
                    films.map(pelicula => {

                        return (
                            <div key={pelicula.id} /*onClick={()=>escogePelicula(pelicula)}*/>
                                <img src={raiz + pelicula.poster_path} alt={pelicula.title}/>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }else{
        return (
            <div className='designHome'>
                <div className="marginLoader">
                    <img src={require('../../img/loader.gif')} alt="cargador"/>
                </div>
            </div>
        )
    }
}





export default connect((state) => ({
    credentials: state.credentials
}))(Peliculas);