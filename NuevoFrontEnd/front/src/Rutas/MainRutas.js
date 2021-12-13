import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { LoginButton } from '../Componentes/LogIn';


const divUpBorder = {
    backgroundColor: "azure",
    marginTop: "20px",
    width: "1000px",
    padding: "150px",
};

class Rutas extends Component {

    render() {
        return (
                <div>
            
                    <div style={divUpBorder}>
                                <LoginButton/>
                    </div>       
                
                    <div>
                        <img src = "../publicsSrc/recursos/imagenes/mercado" alt=""/>
                    </div>
                </div>
        );
    }
}
///:codigo para poder concatenar en una ruta del front, no del back
export default Rutas;