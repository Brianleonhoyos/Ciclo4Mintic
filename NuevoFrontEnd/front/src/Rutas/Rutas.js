import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Ventas from "../Componentes/LuisVenta";
import SingIn from "../Componentes/singIn.js";
import SingUp from "../Componentes/singUp.js";
import UserRutas from './UsuarioRutas';
import UserRutas2 from './UsuarioRutas';
import UserRutas3 from './UsuarioRutas';
import UserRutas4 from './UsuarioRutas';
import UserRutas5 from './UsuarioRutas';

class Rutas extends Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li>
                        <NavLink to="/ventas" >   VENTAS  </NavLink>
                        <NavLink to="/singIn" >   Ingresar  </NavLink>
                        <NavLink to="/singUp" >   Registrarse </NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path="/ventas" element={<Ventas />} />
                    <Route path="/singIn" element={<SingIn />} />
                    <Route path="/singUp" element={<SingUp />} />
                    <Route path="/users/signin" element={<UserRutas />} />
                    <Route path="/users/signin" element={<UserRutas2 />} />
                    <Route path="/users/signup" element={<UserRutas3 />} />
                    <Route path="/users/signup" element={<UserRutas4 />} />
                    <Route path="/users/logout" element={<UserRutas5 />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
///:codigo para poder concatenar en una ruta del front, no del back
export default Rutas;