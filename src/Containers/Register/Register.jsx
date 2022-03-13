import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    Form,
    Input,
    Button,
  } from 'antd';

import { connect } from 'react-redux';


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



const Register = (props) => {

    let navigate = useNavigate();



    useEffect(() => {
        //se ejecuta la primera vez que se ejecuta tan solamente
    }, []);

    useEffect(() => {
        if (props.credentials?.token) {
            navigate("/");
        }
    })


    const registrame = async () => {
       

        //2construimos el body

        let body = {
            
        }

        console.log("Esto es el body del registro", body);
        //3 envio de axios

        try {

            let resultado = await axios.post("https://movie-db-geekshubs.herokuapp.com/usuarios", body);
            console.log(resultado);

            setTimeout(() => {
                navigate("/login");
            }, 500);



        } catch (error) {
            console.log(error);
        }

    }



    //RENDER

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;
    //const dispatch = useDispatch();
    return (
  
        <Formik
            initialValues={{
                nombre: '',
                apellido: '',
                email: '',
                edad: '',
                telefono: '',
                password: '',
                confirmPassword: ''
            }}

            validationSchema={Yup.object().shape({
                nombre: Yup.string()
                    .required('Se requiere Nombre'),
                apellido: Yup.string()
                    .required('Se requiere Apellido'),
                email: Yup.string()
                    .email('Email invalido')
                    .required('Se requiere Email'),
                edad: Yup.number()
                    .typeError('Debes especificar un numero')
                    .min(18, 'Edad minima 18')
                    .max(99, 'Edad maxima 99')
                    .required('Se requiere Edad'),
                telefono: Yup.string()
                    .matches(phoneRegExp, 'Telefono no valido')
                    .required('Se requiere tu Telefono'),
                password: Yup.string()
                    .min(4, 'La contraseña requiere 4 caracteres')
                    .required('Se requiere Contraseña'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Las Contraseñas deben coincidir')
                    .required('Se requiere validacion de Contraseña')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
            
                let dataToSubmit = {

                  nombre: values.nombre,
                  apellido: values.apellido,
                  email: values.email,
                  edad: values.edad,
                  telefono: values.telefono,
                  password: values.password,
                };
                console.log(dataToSubmit, "ESto se enviaria")

                registrame(dataToSubmit)

                
                // dispatch(registerUser(dataToSubmit)).then(response => {
                //   if (response.payload.success) {
                //     props.history.push("/login");
                //   } else {
                //     alert(response.payload.err.errmsg)
                //   }
                // })
            
                setSubmitting(false);
              }, 500);
            }}
            >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;

                return (

                    <div className="app">
                        <h1>Registro</h1>
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
                            
                            <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                                
                              <Input
                                id="password"
                                placeholder="Enter your password"
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
                            
                            <Form.Item required label="Confirm" hasFeedback>
                              <Input
                                id="confirmPassword"
                                placeholder="Enter your confirmPassword"
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
                            </Form.Item>
                            
                            <Form.Item {...tailFormItemLayout}>
                              <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                Submit
                              </Button>
                            </Form.Item>
                      </Form>
                    </div>
                );
            }}
        </Formik>
    );

}

export default connect((state) => ({
    credentials: state.credentials
}))(Register);






// const registrame = async () => {
       

//     //2construimos el body

//     let body = {
//         nombre: datosUsuario.nombre,
//         apellido: datosUsuario.apellido,
//         edad: datosUsuario.edad,
//         email: datosUsuario.email,
//         dni: datosUsuario.dni,
//         password: datosUsuario.password,
//         telefono: parseInt(datosUsuario.telefono),
//         numCuenta: datosUsuario.numCuenta
//     }

//     console.log("Esto es el body del registro", body);
//     //3 envio de axios

//     try {

//         let resultado = await axios.post("https://movie-db-geekshubs.herokuapp.com/usuarios", body);
//         console.log(resultado);

//         setTimeout(() => {
//             navigate("/login");
//         }, 500);



//     } catch (error) {
//         console.log(error);
//     }

// }


// <div className="cardRegister">
//     <div className="upCardRegister">Formulario de Registro</div>
//     <div className="middleCardRegister">
//         {<pre>{JSON.stringify(datosUsuario, null, 2)}</pre>}
//         <input type="text" name="nombre" id="nombre" title="nombre" placeholder="Nombre:" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//         <input type="text" name="apellido" id="apellido" title="apellido" placeholder="Apellido:" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//         <input type="text" name="edad" id="edad" title="edad" placeholder="Edad:" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//         <input type="email" name="email" id="email" title="email" placeholder="Correo Electrónico:" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//         <input type="text" name="dni" id="dni" title="dni" placeholder="DNI" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//         <input type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//         <input type="password" name="password2" id="password2" title="password2" placeholder="Repite contraseña" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//         <input type="text" name="telefono" id="telefono" title="telefono" placeholder="Telefono" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//         <input type="text" name="numCuenta" id="numCuenta" title="numCuenta" placeholder="NºCuenta" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
//     </div>
//     <div className="bottomCardRegister">
//         {msgError}
//         <div className="botonRegistro" onClick={() => registrame()}>
//             Register me!
//         </div>
//     </div>
// </div>


//HOOK

// const [datosUsuario, setDatosUsuario] = useState({
//     nombre: "", apellido: "", edad: "", email: "",
//     dni: "", password: "", password2: "", telefono: "",
//     numCuenta: ""
// });

// const [msgError, /*setMsgError*/] = useState("");


// //Handler (manejador)
// const rellenarDatos = (e) => {
//     setDatosUsuario({ ...datosUsuario, [e.target.name]: e.target.value })
// };




//REGISTRME ()
 /*
        //Array de distintos campos

        setMsgError("");
        let error = "";

        let arrayCampos = Object.entries(datosUsuario);
        
        // //1 comprobación de errores antes de enviar al backend

        if(datosUsuario.password !== datosUsuario.password2){

            return (setMsgError("Los dos password deben de coincidir"));

        }else{
            setMsgError("");
        }

        for(let elemento of arrayCampos){
            error = checkError(elemento[0],elemento[1]);

            if(error !== "ok"){
                setMsgError(error);
                return;
            };
        };
        */