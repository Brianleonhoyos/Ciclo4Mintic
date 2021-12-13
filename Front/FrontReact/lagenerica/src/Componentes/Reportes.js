import React from "react";
import { Component } from "react";

class Reportes extends Component {
    render() {
        return (
            <div>
                <h1>Reportes</h1>
                <div class="col-md-4 mx-auto">
                    <a href={"/listadoClientes/"} class="btn btn-outline-primary">Listado de clientes</a>
                </div>
                <div class="col-md-4 mx-auto">
                    <a href={"/ventasCliente/"} class="btn btn-outline-primary">Listado de ventas por cliente</a>
                </div>
            </div>
        );
    }
}

export default Reportes;