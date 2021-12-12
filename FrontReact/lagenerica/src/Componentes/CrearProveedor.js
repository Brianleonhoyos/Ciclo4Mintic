import React from "react";
import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router";

class CrearProveedor extends Component {
    ciudad = React.createRef();
    direccion = React.createRef();
    nit = React.createRef();
    nombre = React.createRef();
    telefono = React.createRef();

    state = {
        Proveedores: [],
        status: null
    }

    enviarProveedor = (e) => {
        e.preventDefault();
        /* alert(this.cedula.current.value); */
        var proveedor = {
            ciudad: this.ciudad.current.value,
            direccion: this.direccion.current.value,
            nit: this.nit.current.value,
            nombre: this.nombre.current.value,
            telefono: this.telefono.current.value
        }

        axios.post("http://localhost:8085/proveedores/guardar/", proveedor)
            .then(res => {
                this.setState({
                    status: "success"
                })
            })
    }

    render() {
        if (this.state.status === "success") {
            return <Navigate to="/proveedores" />
        }
        return (
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card">
                        <div class="card-header mx-auto d-block">
                            <h1>Crear nuevo proveedor</h1>
                        </div>
                        <div class="card-body">
                            <form onSubmit={this.enviarProveedor}>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="ciudad" placeholder="Ciudad" ref={this.ciudad} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="direccion" placeholder="Direccion" ref={this.direccion} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="nit" placeholder="Nit" ref={this.nit} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="nombre" placeholder="Nombre" ref={this.nombre} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="telefono" placeholder="Telefono" ref={this.telefono} />
                                </div>
                                <br></br>
                                <div class="form-goup p-2 center">
                                    <button type="submit" class="btn btn-success btn-block">
                                        Crear
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default CrearProveedor;