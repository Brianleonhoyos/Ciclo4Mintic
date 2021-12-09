import React, {Component} from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Productos from "./Componentes/Productos";
import Clientes from "./Componentes/Clientes";
import Reportes from "./Componentes/Reportes";
import SubirProducto from "./Componentes/agregarProducto";
import EditarProducto from "./Componentes/EditarProducto";

class Rutas extends Component{
    render(){
        return(
            <BrowserRouter>
                <ul>
                    <li>
                        <NavLink to = "/productos" activeClassName = "active">Productos</NavLink>
                        <NavLink to = "/clientes"  activeClassName = "active">Clientes</NavLink>
                        <NavLink to = "/reporte"  activeClassName = "active">Reportes</NavLink>
                        <NavLink to = "/cargarProductos" activeClassName = "active">Cargar Productos</NavLink>
                         <NavLink to = "/editarProductos" activeClassName = "active">Editar Productos</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path = "/productos" element = {<Productos />}/>
                    <Route path = "/clientes" element = {<Clientes />}/>
                    <Route path = "/reporte" element = {<Reportes />}/>
                    <Route path = "/cargarProductos" element = {<SubirProducto />}/>
                    <Route path = "/editarProductos/:codigo" element = {<EditarProducto />}/>
                </Routes>
            </BrowserRouter>
        );
    }
}
///:codigo para poder concatenar en una ruta del front, no del back
export default Rutas;