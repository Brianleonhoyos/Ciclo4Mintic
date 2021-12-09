import React, {Component} from "react";
import axios from "axios";
import {Link, Navigate} from "react-router-dom";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

class Ventas extends Component{

    codigo = React.createRef();

    state = {
        ventas:[],
        status:null
    }
    
    componentWillUnmount(){//Esto es para llamar cuando se arma el componente
        this.getProductos();
    }

    guardarVentas = () => {
        //Aqui trae todos los productos de la API
        axios.post("http://localhost:8081/api/productos" + this.codigo) //Aqui va la url de listar
            .then(res =>{
                console.log(res.data)
                this.setState({
                     ventas:res.data
                })
            }); //Accion de que va a hacer el microservicio con esa info
    }

    render(){
        return(
            
            <div>
                <h1>Productos</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Nit</th>
                                <th>Precio</th>
                                <th>Valor Mas IVA</th>
                                <th><input ref = {this.Codigo} placeholder = "Coloque Codigo del producto para Buscar"/></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.ventas.map((reporte) => { //this.state para ver el dato. productos el nombre del array y map para recorrerlo, luego con cada iteracion (map es un bucle) se guarda en la funcion productos
                          return(//Si pongo la etiqueta div se me va a repetir un CHINGO!!!, por eso react. y esa madre porque eso es un fragmento que cumple con la funcion del DIV pero solo se creara una sola vez envolviendo todo el rellenito UwU 
                             <React.Freagment>

                                <tr>
                                     <td>{
                                     reporte.codigo//Para buscar dentro del JSON, .codigo_Producto seria el codigo que tiene desde el mongo, luego seria con el nombre y pues tu ya me entiendes
                                     }</td>
                                     <td>{
                                     reporte.nombreProducto
                                     }</td>
                                     <td>{
                                     reporte.nitProveedor
                                     }</td>
                                     <td>{
                                     reporte.precioCompra
                                     }</td>
                                     <td>{
                                     reporte.ivaCompra
                                     }</td>
                                     <td>{
                                     reporte.precioVenta
                                     }</td>
                                     <td>
                                     <Link to = {"/editarProductos/" + reporte.nitProveedor}>Editar</Link>
                                     </td>
                                </tr>

                             </React.Freagment>
                          );
                        })
                    }
                </tbody>
            </table>
        </div>
        );
    }
}

export default Ventas;