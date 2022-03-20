import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { raiz } from '../../utiles';
import { connect } from 'react-redux';
import './Peliculas.css'
import { Typography, Row } from 'antd';
import MainImage from '../../Components/MainImg/MainImage';
import { API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, IMAGE_SIZE, } from '../../configPeliculas';
import GridCard from '../../Components/GridCard/GridCard';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";
const { Title } = Typography;




const Peliculas = (props) => {

    let navigate = useNavigate();

    //HOOKS
    const [films, setFilms] = useState([]);
    const [Loading, setLoading] = useState(true)
    const [LoadingMore, setLoadingMore] = useState(false)
    const [CurrentPage, setCurrentPage] = useState(0)


    //useEffect
    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        traePelis(endpoint);
    }, []);

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })

    useEffect(() => {
        //espera a cambio en el HOOK de films
    }, [films]);

    useEffect(() => {

    }, [CurrentPage]);



    // FUNCIONES LOCALES

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/datosPerfil" className="link">
                        Datos Perfil
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
            </Menu.Item>
        </Menu>
    );

    const traePelis = async (path) => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.get(path, config);

            setTimeout(() => {
                //console.log(res.data.results + "estoy aqui")
                setFilms([...films, ...res.data.results]);
                setCurrentPage(res.data.page)
                setLoading(false)
                setLoadingMore(true)
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    };

    const masPelis = async () => {
        const endpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`
        traePelis(endpoint)
        setLoading(true)
        setLoadingMore(false)
    }

    // RENDER

    if (films[0]?.id !== undefined) {
        return (
            <div className='designPeliculas'>
                {/*APARTADO PARA LA IMAGEN DE CABECERA */}
                <MainImage
                    image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${films[0].backdrop_path}`}
                    title={films[0].original_title}
                    text={films[0].overview}
                />

                {/*BODY*/}

                <div className="bodyNovedades">
                    <div className="rowMainPeliculas">
                        <Title level={2}>Novedades</Title>
                        <div className="spaceWrap">
                            <Space wrap>
                                <Dropdown overlay={menu}>
                                    <Button>
                                        Filtros <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </Space>
                        </div>
                    </div>

                    <hr />


                    {/* GRID CARDS */}

                    <Row gutter={[16, 16]}>
                        {
                            films.map((pelicula, index) => {

                                return (
                                    <React.Fragment key={index}>
                                        <GridCard
                                            objetoPeli={pelicula}
                                            image={pelicula.poster_path ? `${raiz + pelicula.poster_path}` : null}
                                            movieId={pelicula.id}
                                            movieName={pelicula.title}
                                            keyPeli={pelicula.id}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </Row>

                </div>

                <div className="botonMasNovedades">

                    <Button type="primary" onClick={() => masPelis()} >{LoadingMore && "LOAD MORE"}{Loading && `Loading..`}</Button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='designPeliculasLoading'>
                <div className="marginLoader">
                    <h1>LOADING</h1>
                    <img src={require('../../img/loader.gif')} alt="cargador" />
                </div>
            </div>
        )
    }
}





export default connect((state) => ({
    credentials: state.credentials
}))(Peliculas);