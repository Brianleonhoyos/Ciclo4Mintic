import React from "react";
import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router";

class CrearCliente extends Component {
    cedula = React.createRef();
    nombre = React.createRef();
    direccion = React.createRef();
    telefono = React.createRef();
    correo = React.createRef();

    state = {
        clientes: [],
        status: null
    }

    enviarCliente = (e) => {
        e.preventDefault();
        /* alert(this.cedula.current.value); */
        var cliente = {
            cedula: this.cedula.current.value,
            nombre: this.nombre.current.value,
            direccion: this.direccion.current.value,
            telefono: this.telefono.current.value,
            correo: this.correo.current.value
        }

        axios.post("http://localhost:8082/clientes/guardar/", cliente)
            .then(res => {
                this.setState({
                    status: "success"
                })
            })
    }

    render() {
        if (this.state.status === "success") {
            return <Navigate to="/clientes" />
        }
        return (
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card">
                        <div class="card-header mx-auto d-block">
                            <h1>Crear nuevo cliente</h1>
                        </div>
                        <div class="card-body">
                            <form onSubmit={this.enviarCliente}>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="cedula" placeholder="Cédula" ref={this.cedula} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="nombre" placeholder="Nombre completo" ref={this.nombre} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="direccion" placeholder="Dirección" ref={this.direccion} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="telefono" placeholder="Teléfono" ref={this.telefono} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="correo" placeholder="Correo electrónico" ref={this.correo} />
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

export default CrearCliente;