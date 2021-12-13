import React from "react";
import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router";

class EditarCliente extends Component {
    path = null;
    url = [];
    clientecedula = null;
    cedula = React.createRef();
    nombre = React.createRef();
    direccion = React.createRef();
    telefono = React.createRef();
    correo = React.createRef();

    state = {
        cliente: [],
        status: null
    }

    componentWillMount() {
        this.path = window.location.pathname;
        this.url = this.path.split('/');
        this.clientecedula = this.url[2];
        this.getCliente(this.clientecedula);
    }

    getCliente = (cedula) => {
        axios.get('http://localhost:8082/clientes/listar?cedula=' + cedula)
            .then(res => {
                this.setState({
                    cliente: res.data
                })
/*                 console.log(res.data[0].cedula)
                console.log(res.data[0].nombre)
                console.log(res.data[0].direccion)
                console.log(res.data[0].telefono)
                console.log(res.data[0].correo) */
            })
    }

    enviarCliente = (e) => {
        e.preventDefault();
        var cliente = {
            cedula: this.clientecedula,
            nombre: this.nombre.current.value,
            direccion: this.direccion.current.value,
            telefono: this.telefono.current.value,
            correo: this.correo.current.value
        }

        axios.put("http://localhost:8082/clientes/actualizar/" + this.clientecedula, cliente)
            .then(res => {
                this.setState({
                    status: "success"
                })
            })
    }
    
    render() {
        /* console.log(this.state.cliente[0]); */
        if (this.state.status === "success") {
            return <Navigate to="/clientes" />
        }
        return (
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card">
                        <div class="card-header mx-auto d-block">
                            <h1>Editar cliente</h1>
                        </div>
                        <div class="card-body">
                            <form onSubmit={this.enviarCliente}>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="cedula" placeholder="Cédula" ref={this.cedula} defaultValue={this.clientecedula}/>
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

export default EditarCliente;