import React from "react";
import { Component } from "react";
import axios from "axios";
import swal from "sweetalert";



class Clientes extends Component {
    state = {
        clientes: [],
        status: null
    }

    componentWillMount() {
        this.getClientes();
    }

    getClientes = () => {
        //Trae todos los productos de la api
        axios.get("http://localhost:8082/clientes/listar/")
            .then(res => {
                console.log(res.data);
                this.setState({
                    clientes: res.data
                })
            });
    }

    borrarCliente = (cedula) => {
        axios.delete("http://localhost:8082/clientes/eliminar/" + cedula)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Cliente eliminado",
                    "success"
                );
            })
    }

    editarCliente = (cedula) => {
        axios.delete("http://localhost:8082/clientes/actualizar/" + cedula)
            .then(res => {
                this.setState({
                    status: "update"
                });

                window.location.reload(true);

                swal(
                    "Cliente actualizado",
                    "success"
                );
            })
    }

    render() {
        if (this.state.clientes.length > 0) {
            return (
                <div>
                    <h1>Clientes</h1>
                    <br></br>
                    <a href="/crearcliente" class="btn btn-success btn-block">Crear cliente</a>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Cedula</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clientes.map((cliente) => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td >{cliente.cedula}</td>
                                                <td >{cliente.nombre}</td>
                                                <td >{cliente.direccion}</td>
                                                <td >{cliente.telefono}</td>
                                                <td >{cliente.correo}</td>
                                                <td >
                                                    <div class="col-md-4 mx-auto">
                                                        <a href= {"/editarcliente/" + cliente.cedula} class="btn btn-outline-primary">Editar cliente</a>
                                                    </div>
                                                    <br></br>
                                                    <button type="submit" class="btn btn-danger btn-block" onClick={
                                                        () => {
                                                            this.borrarCliente(cliente.cedula)
                                                        }
                                                    }>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <div>
                    <br></br>
                    <h1>No hay clientes en la Base de datos</h1>
                    <br></br>
                    <br></br>
                    <a href="/crearcliente" class="btn btn-outline-primary">Crear cliente</a>
                </div>
            )
        }
    }

}

export default Clientes;