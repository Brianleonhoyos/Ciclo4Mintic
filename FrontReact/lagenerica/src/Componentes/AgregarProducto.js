import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";

class AgregarProducto extends Component {
    codigo = React.createRef();
    producto = React.createRef();
    nit = React.createRef();
    precioCompra = React.createRef();
    iva = React.createRef();
    precioVenta = React.createRef();

    state = {
        productos: [],
        status: null
    }

    guardarProducto = (e) => {
        e.preventDefault();
        let producto = {
            codigo: this.codigo.current.value,
            nombreProducto: this.producto.current.value,
            nitProveedor: this.nit.current.value,
            precioCompra: this.precioCompra.current.value,
            ivaCompra: this.iva.current.value,
            precioVenta: this.precioVenta.current.value
        }
        /* console.log(producto) */

        axios.post('http://localhost:8083/productos/guardar', producto)
            .then(response => {
                this.setState({
                    status: "success"
                })
            });
    }
    render() {
        if (this.state.status === "success") {
            return <Navigate to="/productos" />
        }
        return (
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card">
                        <div class="card-header mx-auto d-block">
                            <h1>Agregar Producto</h1>
                        </div>
                        <div class="card-body">
                            <form onSubmit={this.guardarProducto}>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="codigo" placeholder="Codigo del Producto" ref={this.codigo} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="producto" placeholder="Producto" ref={this.producto} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="nit" placeholder="Nit del Producto" ref={this.nit} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="precioCompra" placeholder="Precio Compra del Producto" ref={this.precioCompra} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="iva" placeholder="Iva del Producto" ref={this.iva} />
                                </div>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="precioVenta" placeholder="Precio Venta del Producto" ref={this.precioVenta} />
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

export default AgregarProducto;