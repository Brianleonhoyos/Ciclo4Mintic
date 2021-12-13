import React from "react";
import { Component} from "react";
import axios from "axios";



class Venta extends Component {

    cedula = React.createRef();
    codigo = React.createRef();
    cantidad = React.createRef();

    state = {
        status: null
    };

    clientes = []

    productos = {
        nameProducto: [23]
    }
    
    precios = {
        compra: [],
        ventaIva: []
    }
    
    
    
    submit = (evento) => {

        evento.preventDefault();
        console.log("La cedula es este: " + this.cedula.current.value + ", el codigo es este: " + this.codigo.current.value + " y la cantidad es esta:" + this.cantidad.current.value);

        let takeCliente  = function(cedula, clientes) {
            axios.get ('http://localhost:8082/clientes/listar?cedula=' + cedula)
            .then(res => {
                console.log(res.data);
                clientes.push(res.data);
            });
            
                //console.log("Esto es lo que tiene State.Clientes" + this.clientes);//Para revisar que tiene adentro clientes
        }

        
        
        let takeProducto  = function(codigo, productos) {
            axios.get ('http://localhost:8083/productos/listar?codigo=' + codigo)
            .then(res => {
                console.log(res.data)
                productos.push(res.data);
                //console.log("Esto es lo que tiene State.Clientes" + this.productos); //Para revisar que tiene adentro clientes
            }).catch("Error por: " + console.log)
           
        }
        
        
        let math = function cantidad(cantidad, valor, iva, precios){
            let multiplicarCantidad = valor * cantidad;
            let compraIva = multiplicarCantidad + (iva * cantidad);

            console.log("Valor igual a esto " + multiplicarCantidad); 
            console.log("Valor igual a esto " + compraIva);

            precios.compra.push(multiplicarCantidad); 
            precios.ventaIva.push(compraIva);
        }
        
       
        takeCliente(this.cedula.current.value, this.clientes);
        
        takeProducto(this.codigo.current.value, this.productos);

        math(this.cantidad.current.value, this.productos.precioCompra, this.productos.ivaCompra, this.precios);
         
        //aun falta por calcular el precio mas el iva y los dos formularios mas para cargar tres objetos como dicta el pdf, pero primero quiero saber si todo funcion
    }

    FinHTML = function () {

             return(
             <div>
                 <table>
                     <td><h5>| Nombre Producto: {<div>{this.productos.nameProducto[0]}</div>} |</h5>
                     </td>
                     <td><h5>| Valor Compra: {<div>{this.precios.compra[0]}</div>} |</h5>
                     </td>
                     <td><h5>| Valor a Pagar: {<div>{this.precios.ventaIva[0]}</div>} |</h5>
                     </td>
                 </table>
                 <br></br>
                 <br></br>
                 <br></br>
             </div>
                         
             );
         
     }

    guardarVentas = (clientes, productos, precios, cantidad, codigo) => {

        var tempDetalle = {
            cantidadProducto: cantidad,
            codigoProducto: codigo,
            valorIva: productos.ivaCompra,
            valorTotal: precios.compra,
            valorVenta: precios.ventaIva
            
        }

        var tempVentas = {
            cedulaCliente: clientes,
            codigoVenta: codigo,
            detalleVenta: tempDetalle,
            ivaVenta: productos.ivaCompra,
            valorTotal: precios.compra,
            valorVenta: precios.ventaIva
        };

        console.log(tempVentas);
        axios.get ('http://localhost:8081/ventas/guardar' + tempVentas)
        .then(result => {
            console.log(result)
            this.setState({
                status: "succes"
           })
        })
        .catch(console.log)        

    }
    
    render(){
            return (

                <div>
                    <h1>Productos</h1>

                    <form onSubmit={this.submit}>

                        <h3>|Cedula || Codigo del Producto || Cantidad|</h3> 
                        <input type = "text" placeholder = "317382091828"  id = "cedula" ref = {this.cedula}/> <input id = "codigo" placeholder = "007" ref = {this.codigo}/> <input type = "number" id = "cantidad" placeholder = "'1' por defecto" ref = {this.cantidad}/>
                        <br></br>
                        <button type="submit">Consultar</button>  
                    </form>
                    
                    <table>
                        <tr>
                            <td></td>
                            <td>
                                <button onClick={ 
                                    () => {
                                    this.guardarVentas(this.clientes, this.productos, this.precios, this.cantidad.current.value, this.codigo.current.value)
                                    }
                                }>Enviar Datos</button>
                                <FinHTML/>
                            </td>
                        </tr>                                            
                    </table>                    
                          
                </div>
            );
        }
    }



    export default Venta;