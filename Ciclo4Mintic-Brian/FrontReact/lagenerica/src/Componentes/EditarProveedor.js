import React from "react";
import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router";

class EditarProveedor extends Component {
    path = null;
    url = [];
    proveedorNit = null;
    ciudad = React.createRef();
    direccion = React.createRef();
    nit = React.createRef();
    nombre = React.createRef();
    telefono = React.createRef();

    state = {
        Proveedor: [],
        status: null
    }

    componentWillMount() {
        this.path = window.location.pathname;
        this.url = this.path.split('/');
        this.proveedorNit = this.url[2];
        this.getProveedor(this.proveedorNit);
    }

    getProveedor = (nit) => {
        axios.get('http://localhost:8085/proveedores/listar?nit=' + nit)
            .then(res => {
                this.setState({
                    Proveedor: res.data
                })
                console.log(res.data)
                /*                 console.log(res.data[0].cedula)
                                console.log(res.data[0].nombre)
                                console.log(res.data[0].direccion)
                                console.log(res.data[0].telefono)
                                console.log(res.data[0].correo) */
            })
    }

    enviarProveedor = (e) => {
        e.preventDefault();
        var proveedor = {
            ciudad: this.ciudad.current.value,
            direccion: this.direccion.current.value,
            nit: this.proveedorNit,
            nombre: this.nombre.current.value,
            telefono: this.telefono.current.value
        }

        axios.put("http://localhost:8085/proveedores/actualizar/" + this.proveedorNit, proveedor)
            .then(res => {
                this.setState({
                    status: "success"
                })
            })
    }

    render() {
        /* console.log(this.state.cliente[0]); */
        if (this.state.status === "success") {
            return <Navigate to="/proveedores" />
        }
        return (
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card">
                        <div class="card-header mx-auto d-block">
                            <h1>Editar proveedor</h1>
                        </div>
                        <div class="card-body">
                            <form onSubmit={this.enviarProveedor}>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="ciudad" placeholder="Ciudad" ref={this.ciudad} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="direccion" placeholder="Dirección" ref={this.direccion} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="nit" placeholder="Nit" ref={this.nit} defaultValue={this.proveedorNit} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="nombre" placeholder="Nombre completo" ref={this.nombre} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="telefono" placeholder="Teléfono" ref={this.telefono} />
                                </div>
                                <br></br>
                                <div class="form-goup p-2 center">
                                    <button type="submit" class="btn btn-primary btn-block">
                                        Cargar
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

export default EditarProveedor;