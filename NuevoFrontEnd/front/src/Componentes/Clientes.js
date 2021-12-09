import React, {Component} from "react";

class Clientes extends Component{

    state = {
        clientes:[],
        status:null
    }

    componentWillUnmount(){//Esto es para llamar cuando se arma el componente
        this.getProductos();
    }

    getClientes = () => {
        axios.get("http://localhost:8081/clientes/listar")
            .then (res =>{
                console.log(res.data)
                this.setState({
                    clientes:res.data
                })
            });
    }

    eliminarClientes = (codigo, setState) => {

    }

    render(){
        return(
            <div>
        <h1>Clientes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Acciones mhe?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.clientes.map((clientes) => { //this.state para ver el dato. productos el nombre del array y map para recorrerlo, luego con cada iteracion (map es un bucle) se guarda en la funcion productos
                          return(//Si pongo la etiqueta div se me va a repetir un CHINGO!!!, por eso react. y esa madre porque eso es un fragmento que cumple con la funcion del DIV pero solo se creara una sola vez envolviendo todo el rellenito UwU 
                             <React.Freagment> 
                                 <tr>
                                     <td>{
                                     clientes.cedula//Para buscar dentro del JSON, .codigo_Producto seria el codigo que tiene desde el mongo, luego seria con el nombre y pues tu ya me entiendes
                                     }</td>
                                     <td>{
                                     clientes.nombre
                                     }</td>
                                     <td>{
                                     clientes.direccion
                                     }</td>
                                     <td>{
                                     clientes.telefono
                                     }</td>
                                     <td>{
                                     clientes.correo
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

export default Clientes;