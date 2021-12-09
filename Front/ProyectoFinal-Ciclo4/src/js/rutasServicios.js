import React from "react";
import {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NavLink } from "react-router-dom";


class Router extends Component{
    render(){//<> y </> de return es html para direcciones URL
        return(
            <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <NavLink to = "/cargarProductos" activeClassName = "active">Cargar Producto</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/guardarCliente" activeClassName = "active">Cliente</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/reporteVentas" activeClassName = "active">ReporteVentas</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/reporteClientes" activeClassName = "active">ReporteClientes</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/consolidacion" activeClassName = "active">Conolidacion</NavLink>
                    </li>
                </ul>
            </nav>
                <Routes>
                    <Route path = "/Producto" element = {<ProductoFunciones/>}>Funciones Producto</Route>
                    <Route path = "/cargarProducto" element = {<SubirProducto/>}>Cargar Producto</Route>
                    <Route path = "/guardarCliente" element = {<ProductoSubida/>}></Route>
                    <Route path = "/reporteVentas" element = {<ProductoSubida/>}></Route>
                    <Route path = "/reporteClientes" element = {<ProductoSubida/>}></Route>
                    <Route path = "/consolidacion" element = {<ProductoSubida/>}></Route>
                    <Route path = "/main" element = {<Router/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
//El path es la url que va a detectar para asi llamar al microservicio
export default Router;