import React, { Component } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Productos from "./Componentes/Productos";
import Clientes from "./Componentes/Clientes";
import Ventas from "./Componentes/Ventas";
import Consolidacion from "./Componentes/Consolidacion";
import Reportes from "./Componentes/Reportes";
import Inicio from "./Componentes/Inicio";
import AgregarProducto from "./Componentes/AgregarProducto";
import CrearCliente from "./Componentes/CrearCliente";
import EditarCliente from "./Componentes/EditarCliente";
import Proveedores from "./Componentes/Proveedores";
import CrearProveedor from "./Componentes/CrearProveedor";
import EditarProveedor from "./Componentes/EditarProveedor";

class Rutas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/consolidacion" element={<Consolidacion />} />
                    <Route path="/reportes" element={<Reportes />} />
                    <Route path="/crearcliente" element={<CrearCliente />} />
                    <Route path="/agregarproducto" element={<AgregarProducto />} />
                    <Route path="/ventas" element={<Ventas />} />
                    <Route path="/editarcliente/:cedula" element={<EditarCliente />} />
                    <Route path="/inicio" element={<Inicio />} />

                    <Route path="/proveedores" element={<Proveedores />} />
                    <Route path="/crearproveedor" element={<CrearProveedor />} />
                    <Route path="/editarproveedor/:nit" element={<EditarProveedor />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
///:codigo para poder concatenar en una ruta del front, no del back
export default Rutas;