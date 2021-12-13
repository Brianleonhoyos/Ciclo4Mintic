import React from "react";
import { Component } from "react";
import axios from "axios";
import swal from "sweetalert";



class Proveedores extends Component {
    state = {
        Proveedores: [],
        status: null
    }

    componentWillMount() {
        this.getProveedores();
    }

    getProveedores = () => {
        //Trae todos los productos de la api
        axios.get("http://localhost:8085/proveedores/listar/")
            .then(res => {
                console.log(res.data);
                this.setState({
                    Proveedores: res.data
                })
            });
    }

    borrarProveedor = (nit) => {
        axios.delete("http://localhost:8085/proveedores/eliminar/" + nit)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Proveedor eliminado",
                    "success"
                );
            })
    }

    render() {
        if (this.state.Proveedores.length > 0) {
            return (
                <div>
                    <h1>Proveedores</h1>
                    <br></br>
                    <a href="/crearproveedor" class="btn btn-success btn-block">Crear Proveedor</a>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">ciudad</th>
                                <th scope="col">direccion</th>
                                <th scope="col">nit</th>
                                <th scope="col">nombre</th>
                                <th scope="col">telefono</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Proveedores.map((proveedor) => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td >{proveedor.ciudad}</td>
                                                <td >{proveedor.direccion}</td>
                                                <td >{proveedor.nit}</td>
                                                <td >{proveedor.nombre}</td>
                                                <td >{proveedor.telefono}</td>
                                                <td >
                                                    <div class="col-md-4 mx-auto">
                                                        <a href= {"/editarproveedor/" + proveedor.nit} class="btn btn-outline-primary">Editar Proveedor</a>
                                                    </div>
                                                    <br></br>
                                                    <button type="submit" class="btn btn-danger btn-block" onClick={
                                                        () => {
                                                            this.borrarProveedor(proveedor.nit)
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
                    <h1>No hay Proveedores en la Base de datos</h1>
                    <br></br>
                    <br></br>
                    <a href="/crearproveedor" class="btn btn-outline-primary">Crear Proveedor</a>
                </div>
            )
        }
    }

}

export default Proveedores;