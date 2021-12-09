import { Navigate } from "react-router";
import React, {Component} from "react";
import axios from "axios";

class SubirCliente extends Component{

    cedula = React.createRef();
    nombre = React.createRef();
    direccion = React.createRef();
    telefono = React.createRef();
    correo = React.createRef();


    state = {
        clientes_subida:[],
        status:null
    }

    guardarCliente = (e) => {
        e.preventDefault(); //Para no enviar datos por la URL para mas securite
        
        let tempClientes = {
           	cedula:this.cedula.current.value,
	        nombre:this.nombre.current.value,
	        direccion:this.direccion.current.value,
	        telefono:this.telefono.current.value,
	        correo:this.correo.current.value

        };

        let lista = 

        this.setState({
            state.clientes_subida:lista
        });
        //state.producto_ArchivoLista.push(lista);  Mirar el set status que creo que es una funcion que ocupa al .push

        axios.post("http://localhost:8081/clientes/guardar" + state.producto_ArchivoLista) //Aqui va la url de listar
            .then(res => {
                this.setState({
                    status:"succes"
                })
            })
    
    }

    render(){

        if(this.state.status === "succes"){
            return <Navigate to = "/main" />
        }

        return(
            <div>
                <h1>Guardar</h1>
                <form onSubmit={this.guardarProducto(this.archivo)}>
                    <div class="card-body">
                        <div class="form-goup p-2 center">
                            <input ref = {this.cedula}/>
                            <input ref = {this.nombre}/>
                            <input ref = {this.direccion}/>
                            <input ref = {this.telefono}/>
                            <input ref = {this.correo}/>
                        </div>
                        <div class="form-goup p-2 center">
                            <button type = "submit" class="btn btn-primary btn-block">
                                Cargar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
            
    }
}



export default SubirCliente;
