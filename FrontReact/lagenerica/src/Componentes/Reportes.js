import React, { Component } from "react";
import axios from "axios";


class Reportes extends Component {
    state = {
        clientes: [],
        status: null
    }

    componentWillMount() {
        this.getClientes();
    }

    getClientes = () => {
        //Trae todos los productos de la api
        axios.get("http://localhost:8082/clientes/listar")
            .then(res => {
                console.log(res.data);
                this.setState({
                    clientes: res.data
                })
            });
    }
    render() {
        return (
            <div>
                <br></br>
                <h1>Reportes</h1>
                <form>
                    <button type="button" class="btn btn-outline-primary">Listado de Clientes</button>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Cedula</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Telefono</th>

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
                                                <td >{cliente.correo}</td>
                                                <td >{cliente.direccion}</td>
                                                <td >{cliente.telefono}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </form>
                <button type="button" class="btn btn-outline-primary">Ventas por Cliente</button>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Valor Total Ventas</th>
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
                                            <td >50000</td>
                                        </tr>
                                        <tr>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        </tr>
                                        <tr>
                                            <td ></td>
                                            <td >TOTAL VENTA:</td>
                                            <td >50000</td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
                <form>

                </form>
            </div>
        );
    }
}

export default Reportes;