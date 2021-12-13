import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Ventas from "../Componentes/Venta";
import { LogOutButton } from '../Componentes/LogOut';
import {Profile} from "../Componentes/Profiles"

const divUpBorder = {
    backgroundColor: "azure",
    margin: "20px",
    width: "1000px",
    height: "200px",
    color: "black"
};

const nav = {
    color: "white",
    textDecoration: "none"
};

class Rutas extends Component {
    
    render() {
        return (
            <BrowserRouter>
            <div style={divUpBorder}>
                <Profile/>
                <LogOutButton/>
            </div>
      
                        <NavLink style={nav} to="/ventas" >   VENTAS  </NavLink>

                <Routes>
                    <Route path="/ventas" element={<Ventas />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
///:codigo para poder concatenar en una ruta del front, no del back
export default Rutas;


