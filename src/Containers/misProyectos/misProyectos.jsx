import React from "react";


import './ccss/misProyectos.css';

const misProyectos = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
            <h1>Mis Proyectos</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }