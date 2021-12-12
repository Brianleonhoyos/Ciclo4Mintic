import React from "react";
import { Component} from "react";
import axios from "axios";


class LuisVenta extends Component {

    cedula = React.createRef();
    codigo = React.createRef();
    cantidad = React.createRef();

    state = {
        status: null
    };

    clientes = []
    productos = []
    precios = {
        compra: [],
        ventaIva: []
    }
    
    submit = (evento) => {

        evento.preventDefault();
        console.log("La cedula es este: " + this.cedula.current.value + ", el codigo es este: " + this.codigo.current.value + " y la cantidad es esta:" + this.cantidad.current.value);

        let takeCliente  = function(cedula) {
            axios.get ('http://localhost:8082/clientes/listar?cedula=' + cedula)//Enconrefused, la url esta mal ya que hay que ponerle la nueva URL
            .then(res => {
                console.log(res.data);
                clientes.push(res.data);
            });
                console.log("Esto es lo que tiene State.Clientes" + this.clientes);//Para revisar que tiene adentro clientes
        }
        
        let takeProducto  = function(codigo) {
            axios.get ('http://localhost:8083/productos/listar?codigo=' + codigo)//Enconrefused, la url esta mal ya que hay que ponerle la nueva URL
            .then(res => {
                console.log(res.data)
                productos.push(res.data);
                console.log("Esto es lo que tiene State.Clientes" + this.productos); //Para revisar que tiene adentro clientes
            }).catch("Error por: " + console.log)}
        
        
        let math = function (valor, cantidad, iva){
            let multiplicarCantidad = valor * cantidad;
            let compraIva = multiplicarCantidad * iva;

            precios.compra.push(multiplicarCantidad); //Va a salir error de multiplicar cantidad = undefined porque aun no le han llegado nada al objeto productos de state.producto, esta mal la URL
            precios.ventaIva.push(compraIva);
        }
        
        takeCliente(this.cedula.current.value);
        takeProducto(this.codigo.current.value);
        math(this.state.productos.precioCompra, this.cantidad.current.value, this.productos.ivaCompra);

        //aun falta por calcular el precio mas el iva y los dos formularios mas para cargar tres objetos como dicta el pdf, pero primero quiero saber si todo funcion
    }


    guardarVentas = function(clientes, productos, precios, cantidad) {

        var tempDetalle = {

        }

        var tempVentas = {
            cliente: [],
            producto: [],
            detalleVenta:{
                cantidad:[],
                codigo:[],
                valorIva:[],
                valorTotal:[],
                valorVenta:[]
            },
            ivaVenta:[],
            totalVenta:[],
            valorVenta:[],
        };

        tempDetalle.push(cantidad, productos.codigo, productos.ivaCompra, productos.precioVenta, productos.precioCompra);
        tempVentas.push(clientes.nombre, productos.nombreProducto, tempDetalle, productos.ivaCompra, precios.ventaIva, precios.compra);

        axios.get ('http://localhost:8081/ventas/guardar' + tempVentas)
        .then(result => {
            console.log(result)
            this.setState({
                status = "succes"
           })
        })
        .catch(console.log)
        //Me esta llamando esta funcion al puro principio, me detecta el ultimo boton que lo llama, pero no se porque se llama solo

    }

    render(){

        if(this.state.status === "succes"){
            window.location("/ventasluis");//FaltaMain
        }

            return (

                <div>
                    <h1>Productos</h1>

                    <form onSubmit={this.submit}>

                        <h3>Cedula: </h3>
                        <input type = "text" placeholder = "317382091828"  id = "cedula" ref = {this.cedula}/>
                        
                        <h3> Codigo del Producto </h3> 
                        <input id = "codigo" placeholder = "007" ref = {this.codigo}/>

                        <h3>Cantidad</h3> 
                        <input id = "cantidad" placeholder = "'1' por defecto" ref = {this.cantidad}/>

                        <button type="submit">Consultar</button>  
                    </form>

                        <h3> Cliente: </h3>
                        <h4>
                        {
                            this.state.clientes.map((cliente) => {
                                return(
                                    <React.Freagment>
                                        <p>{cliente.nombre}</p>
                                    </React.Freagment>
                                );
                            })
                        }
                        </h4>
                        
                        <h3>Nombre Producto</h3> 
                        {
                            this.state.productos.map((producto) => {
                                return(
                                    <React.Freagment>
                                        <p>{producto.nombreProducto}</p>
                                    </React.Freagment>
                                );
                            })
                        }

                        <h3>Valor Total</h3> 
                        {
                            this.state.precios.compra.map((compra) => {
                                return(
                                    <React.Freagment>
                                        <p>{compra}</p>
                                    </React.Freagment>
                                );
                            })
                        } 


                        <h3>Total Más Iva</h3>
                        {
                            this.state.precios.ventaIva.map((iva) => {
                                return(
                                    <React.Freagment>
                                        <p>{iva}</p>
                                    </React.Freagment>
                                );
                            })
                        }
                        
                        <button onClick={this.guardarVentas(this.clientes, this.productos, this.precios, this.cantidad.current.value)}>Enviar</button>
                                     
                </div>
            );
        }
    }

    export default LuisVenta;