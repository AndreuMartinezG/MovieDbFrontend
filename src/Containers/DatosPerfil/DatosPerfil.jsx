import React, { useEffect } from "react";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";

import { Link } from "react-router-dom";
import './DatosPerfil.css'
import SideBarProfile from "../../Components/SideBarProfile/SideBarProfile";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';


import axios from "axios";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, } from 'antd';

import {MODIFY_CREDENTIALS} from '../../redux/types';




const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


const DatosPerfil = (props) => {

    let navigate = useNavigate()


    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })
    

    const updateUser = async (dataToSubmit) => {

        let body = dataToSubmit
        console.log("EStoy dentro de la funcion update", body)
        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {
            //Hacemos el update en la base de datos
            let res = await axios.put(`https://movie-db-geekshubs.herokuapp.com/usuarios/${props.credentials.usuario.id}`, body, config);

            console.log(res, "ESTO ES LA RESPUESTA DEL PUT")

            if (res) {
                //Guardamos en redux
                props.dispatch({ type: MODIFY_CREDENTIALS, payload: dataToSubmit });
            }
        } catch (error) {
            console.log(error)
        }

    }


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <div className="designDatosPerfil">
            <SideBarProfile></SideBarProfile>
            <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Edit User</h1>
                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img
                                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className="userShowImg"
                            />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">{props.credentials.usuario.nombre}</span>
                                <span className="userShowUserTitle">Web Developer</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon" />
                                <span className="userShowInfoTitle">{props.credentials.usuario.nombre} {props.credentials.usuario.apellido}</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className="userShowIcon" />
                                <span className="userShowInfoTitle">{props.credentials.usuario.edad} años</span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon" />
                                <span className="userShowInfoTitle">{props.credentials.usuario.telefono}</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon" />
                                <span className="userShowInfoTitle">{props.credentials.usuario.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <Formik
                            initialValues={{
                                nombre: `${props.credentials.usuario.nombre}`,
                                apellido: `${props.credentials.usuario.apellido}`,
                                edad: `${props.credentials.usuario.edad}`,
                                email: `${props.credentials.usuario.email}`,
                                telefono: `${props.credentials.usuario.telefono}`,
                            }}
                            validationSchema={Yup.object().shape({
                                nombre: Yup.string(),
                                apellido: Yup.string(),
                                email: Yup.string()
                                    .email('Email invalido'),
                                edad: Yup.number()
                                    .typeError('Debes especificar un numero')
                                    .min(18, 'Edad minima 18')
                                    .max(99, 'Edad maxima 99'),
                                telefono: Yup.string()
                                    .matches(phoneRegExp, 'Telefono no valido'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    
                                    let dataToSubmit = {
                                        id: props.credentials.usuario.id,
                                        nombre: values.nombre,
                                        apellido: values.apellido,
                                        edad: values.edad,
                                        email: values.email,
                                        telefono: values.telefono,
                                    };
                                    console.log(dataToSubmit, "ESTO SE ENVIA")
                                    updateUser(dataToSubmit)

                                    setSubmitting(false);
                                }, 500);
                            }}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                } = props;

                                return (

                                    <div className="actualizarPerfil" >
                                        <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

                                            <Form.Item required label="Nombre" hasFeedback validateStatus={errors.nombre && touched.nombre ? "error" : 'success'}>
                                                <Input
                                                    id="nombre"
                                                    placeholder="Introduce tu nombre"
                                                    type="text"
                                                    value={values.nombre}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.nombre && touched.nombre ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.nombre && touched.nombre && (
                                                    <div className="input-feedback">{errors.nombre}</div>
                                                )}
                                            </Form.Item>

                                            <Form.Item required label="Apellido" hasFeedback validateStatus={errors.apellido && touched.apellido ? "error" : 'success'}>
                                                <Input
                                                    id="apellido"
                                                    placeholder="Introduce tu Apellido"
                                                    type="text"
                                                    value={values.apellido}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.apellido && touched.apellido ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.apellido && touched.apellido && (
                                                    <div className="input-feedback">{errors.apellido}</div>
                                                )}
                                            </Form.Item>

                                            <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                                                <Input
                                                    id="email"
                                                    placeholder="Introduce tu Email"
                                                    type="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.email && touched.email ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                            </Form.Item>

                                            <Form.Item required label="Edad" hasFeedback validateStatus={errors.edad && touched.edad ? "error" : 'success'}>
                                                <Input
                                                    id="edad"
                                                    placeholder="Introduce tu Edad"
                                                    type="text"
                                                    value={values.edad}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.edad && touched.edad ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.edad && touched.edad && (
                                                    <div className="input-feedback">{errors.edad}</div>
                                                )}

                                            </Form.Item>

                                            <Form.Item required label="Telefono" hasFeedback validateStatus={errors.telefono && touched.telefono ? "error" : 'success'}>
                                                <Input
                                                    id="telefono"
                                                    placeholder="Introduce tu Telefono"
                                                    type="text"
                                                    value={values.telefono}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.telefono && touched.telefono ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.telefono && touched.telefono && (
                                                    <div className="input-feedback">{errors.telefono}</div>
                                                )}

                                            </Form.Item>

                                            {/* <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>

                                                <Input
                                                    id="password"
                                                    placeholder="Introduce tu Contraseña"
                                                    type="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.password && touched.password ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.password && touched.password && (
                                                    <div className="input-feedback">{errors.password}</div>
                                                )}
                                            </Form.Item>

                                            <Form.Item required label="Confirm" hasFeedback validateStatus={errors.confirmPassword && touched.confirmPassword ? "error" : 'success'}>
                                                <Input
                                                    id="confirmPassword"
                                                    placeholder="Introduce confirmacion de Contraseña"
                                                    type="password"
                                                    value={values.confirmPassword}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.confirmPassword && touched.confirmPassword && (
                                                    <div className="input-feedback">{errors.confirmPassword}</div>
                                                )}
                                            </Form.Item> */}

                                            <Form.Item className='floatLeft'{...tailFormItemLayout}>
                                                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                                    Enviar
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
            )
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials
}))(DatosPerfil);






    // <SideBarProfile />
    // <div className="designProfileHalf profileLeft">
    //     <div className="profileField">Nombre: {props.credentials.usuario.nombre} </div>
    //     <div className="profileField">Apellidos: {props.credentials.usuario.apellido}
    //     </div>
    //     <div className="profileField">Email: {props.credentials.usuario.email}</div>
    //     <div className="profileField">Teléfono: {props.credentials.usuario.telefono}</div>
    //     <div className="profileField">N. cuenta: {props.credentials.usuario.numCuenta}</div>
    // </div>