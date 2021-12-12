import React, { Component } from "react";
import axios from "axios";

class Ventas extends Component {

    cedula = React.createRef();
    nombre = React.createRef();
    codigo = React.createRef();
    producto = React.createRef();
    cantidad = React.createRef();
    total = React.createRef();
    codigo2 = React.createRef();
    producto2 = React.createRef();
    cantidad2 = React.createRef();
    total2 = React.createRef();
    codigo3 = React.createRef();
    producto3 = React.createRef();
    cantidad3 = React.createRef();
    total3 = React.createRef();
    totalVenta = React.createRef();
    iva = React.createRef();
    totalIva = React.createRef();


    state = {
        ventas: [],
        productos: [],
        status: null
    }
    guardarVentas = (tVenta, tIva) => {
        let tempVentas = {
        }
        tempVentas.push(this.state.ventas.cedula, this.state.productos, tVenta, tIva);
        axios.get("http://localhost:8081/ventas/guardar" + tempVentas)
            .then(res => {
                this.setState({
                    ventas: res.data
                })
            });
    }


    setData = function (tVenta, tIva) {
        document.getElementById("totalVenta").innerHTML = tVenta;
        document.getElementById("iva").innerHTML = this.state.productos.iva;
        document.getElementById("totalIva").innerHTML = tIva;
        this.guardarVentas(tVenta, tIva);
    };

    setMath = function () {
        let totalVenta = this.total + this.total2 + this.total3;
        let totalCantidad = totalVenta * this.cantidad;
        let totalIva = totalCantidad * this.iva;
        this.setData(totalVenta, totalIva);
    }

    getProducto = (codigo) => {
        if (codigo == null) {
            alert("Tiene que rellenar con el codigo del producto a pedir")
        } else {
            axios.get("http://localhost:8081/api/productos" + codigo)
                .then(res => {
                    this.setState({
                        productos: res.data
                    })
                });
            document.getElementById("producto").innerHTML = this.state.productos.producto;
            document.getElementById("total").innerHTML = this.state.productos.totalVenta;
        }
    };

    getCliente = (cedula) => {
        if (cedula == null) {
            alert("Tiene que rellenar con su cedula")
        } else {
            axios.get("http://localhost:8081/clientes/listar" + cedula)
                .then(res => {
                    this.setState({
                        ventas: res.data
                    })
                });
            document.getElementById("nombre").innerHTML = this.state.ventas.nombre;
        }
    };

    render() {
        return (
            <div>
                <h1>Registro Ventas</h1>
                <br></br>
                <table class="col-md-4 mx-auto">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h3>Cedula: </h3>
                            </td>
                            <td>
                                <input id="cedula" placeholder="317382091828" ref={this.cedula} />
                            </td>
                            <td>
                                <button onClick={() => { this.getCliente(this.cedula) }}>Consultar</button>
                            </td>
                            <td>
                                <h3> Cliente: </h3>
                            </td>
                            <td>
                                <input placeholder="Pepa Pink" ref={this.nombre} id="nombre" readonly />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3> Codigo del Producto </h3>
                            </td>
                            <td>
                                <h3>  </h3>
                            </td>
                            <td>
                                <h3>Nombre Producto</h3>
                            </td>
                            <td>
                                <h3>Cantidad</h3>
                            </td>
                            <td>
                                <h3>Valor Total</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input id="codigo" placeholder="007" ref={this.codigo} />
                            </td>
                            <td>
                                <button onClick={() => { this.getProducto(this.codigo) }} >Consultar</button>
                            </td>
                            <td>
                                <input placeholder="Figura de Accion" ref={this.producto} id="producto" readonly />
                            </td>
                            <td>
                                <input placeholder="'1' por defecto" ref={this.cantidad} id="cantidad" />
                            </td>
                            <td>
                                <input placeholder="$5.000" ref={this.total} id="total" readonly />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input id="codigo2" placeholder="007" ref={this.codigo2} />
                            </td>
                            <td>
                                <button>Consultar</button>
                            </td>
                            <td>
                                <input id="producto2" placeholder="Figura de Accion" ref={this.producto2} />
                            </td>
                            <td>
                                <input id="cantidad2" placeholder="'1' por defecto" ref={this.cantidad2} />
                            </td>
                            <td>
                                <input id="total2" placeholder="$5.000" ref={this.total2} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input id="codigo3" placeholder="007" ref={this.codigo3} />
                            </td>
                            <td>
                                <button>Consultar</button>
                            </td>
                            <td>
                                <input id="producto3" placeholder="Figura de Accion" ref={this.producto3} />
                            </td>
                            <td>
                                <input id="cantidad3" placeholder="'1' por defecto" ref={this.cantidad3} />
                            </td>
                            <td>
                                <input id="total3" placeholder="$5.000" ref={this.total3} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <h3>Total Venta</h3>
                            </td>
                            <td>
                                <input id="totalVenta" ref={this.totalVenta} readonly />
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <h3>Iva</h3>
                            </td>
                            <td>
                                <input id="iva" ref={this.iva} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <h3>Total Más Iva</h3>
                            </td>
                            <td>
                                <input id="ivaTotal" ref={this.totalIva} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => { this.setMath() }}>Enviar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
            </div>
        );
    }
}

export default Ventas;