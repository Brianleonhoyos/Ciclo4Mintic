import React, {Component} from "react";
import axios from "axios";
import {Link, Navigate} from "react-router-dom";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";


class Productos extends Component{
    
    state = {
        productos:[],
        status:null
    }
    
    componentWillUnmount(){//Esto es para llamar cuando se arma el componente
        this.getProductos();
    }

    getProductos = () => {
        //Aqui trae todos los productos de la API
        axios.get("http://localhost:8081/api/productos") //Aqui va la url de listar
            .then(res =>{
                console.log(res.data)
                this.setState({
                     productos:res.data
                })
            }); //Accion de que va a hacer el microservicio con esa info
    }

    eliminarProductos = (codigo) => {
        axios.delete("http://localhost:8081/api/productos/{codigo}" + codigo) // Lo que concateno son los parametros
            .then(res => {
                this.setState({
                    status:"delete"
                });

                window.location.reload(true);

            })
    }

render(){
    return(
        //Aqui puedo retornar valores html, todo dentro de <div>, si no sale error
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
                        <th>Acciones mhe?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.productos.map((producto) => { //this.state para ver el dato. productos el nombre del array y map para recorrerlo, luego con cada iteracion (map es un bucle) se guarda en la funcion productos
                          return(//Si pongo la etiqueta div se me va a repetir un CHINGO!!!, por eso react. y esa madre porque eso es un fragmento que cumple con la funcion del DIV pero solo se creara una sola vez envolviendo todo el rellenito UwU 
                             <React.Freagment> 
                                 <tr>
                                     <td>{
                                     producto.codigo//Para buscar dentro del JSON, .codigo_Producto seria el codigo que tiene desde el mongo, luego seria con el nombre y pues tu ya me entiendes
                                     }</td>
                                     <td>{
                                     producto.nombreProducto
                                     }</td>
                                     <td>{
                                     producto.nitProveedor
                                     }</td>
                                     <td>{
                                     producto.precioCompra
                                     }</td>
                                     <td>{
                                     producto.ivaCompra
                                     }</td>
                                     <td>{
                                     producto.precioVenta
                                     }</td>
                                     <td>
                                     <Link to = {"/editarProductos/" + producto.nitProveedor}>Editar</Link>
                                     <button onclick = {
                                         () =>{
                                             this.eliminarProductos(producto.codigo);
                                         } 
                                     }>Eliminar</button></td>
                                     
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

export default Productos;