import React from "react";
import { Component } from "react";
import axios from "axios";

class VentasCliente extends Component {
    state = {
        reportes: [],
        status: null
    }

    state = {
        cliente: [],
        status: null
    }

    componentWillMount() {
        this.getClientes();
        this.getVentasCliente();

    }

    getVentasCliente = () => {
        axios.get("http://localhost:8081/ventas/reporteClientes")
            .then(res => {
                console.log(res.data);
                this.setState({
                    reportes: res.data
                })
            });
    }

    getCedula = (cedula) => {
        axios.get('http://localhost:8082/clientes/listar?cedula=' + cedula)
            .then(res => {
                console.log(res.data);
                this.setState({
                    cliente: res.data
                })
            })

    }

    getClientes = () => {
        let list = this.state.reportes;
        for (let i = 0; i < list.length; i++) {
            let repo = this.state.reportes[i];
            let cedula = repo.cedula;
            this.getCedula(cedula);

            console.log(cedula);
        }
    }






    //Trae todos los productos de la api

    render() {
        return (
            <div>
                <br></br>
                <h1>Reportes</h1>
                <form>
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
                                this.state.reportes.map((reporte) => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td >{reporte.cedula}</td>
                                                <td >{reporte.cedula}</td>
                                                <td >{reporte.valorTotal}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </form>
            </div>
        )
    }
}

export default VentasCliente;