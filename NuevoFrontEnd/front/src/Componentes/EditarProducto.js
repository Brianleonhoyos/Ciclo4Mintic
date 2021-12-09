import { Navigate } from "react-router";
import React, {Component} from "react";
import axios from "axios";


class EditarProducto extends Component{

    path = null;
    url = [];

    productoCodigo = null;

    let archivo = React.createRef();

    state = {
        producto_ArchivoLista:[],
        status:null
    }

    componentWillUnmount(){
        this.path = window.location.pathname;
        this.url = this.path.split("/");
        console.log(this.url);
        this.productoCodigo = this.url[2];
        this.getProductos(this.productoCodigo);

    }



    guardarProducto = (e, state) => {
        e.preventDefault(); //Para no enviar datos por la URL para mas securite
        if(typeof e !== 'string'){
            throw TypeError('El archivo no es una cadena de texto')
        }

        let lista = e.slice(false ? e.indexOf('/n') + 1 : 0)//? ES PARA DECIRLE QUE SI ES TRUE?
        .split('/n')//No puede ir ; arriba porque crea un error ya que e.slice se cierra
        .map(l => l.split(','));

        this.setState({
            state.producto_ArchivoLista:lista
        });
        //state.producto_ArchivoLista.push(lista);  Mirar el set status que creo que es una funcion que ocupa al .push

        getProducto(codigo, setState);
    
    }

    getProducto = (codigo, setState) => {

        axios.put("http://localhost:8081/api/productos/{nit}" + codigo + setState)
            .then(res => {
                this.setState({
                    producto:res.data //res.data es lo que le devuelve el microservicio
                })
            });

    }

    render(){
        console.log(this.state.producto);
        if(this.state.status === "succes"){
            return <Navigate to = "/main" />
        }

        return(
            <div>
                <h1>Editar</h1>
                <form onSubmit={this.guardarProducto(this.archivo, state)}>
                    <div class="card-body">
                        <div class="form-goup p-2 center">
                            <input type="file" accept=".csv" class="form-control" id="inputGroupFile02" name = "archivo" ref = {this.archivo}/> 
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



export default EditarProducto;

//Linea 13 input, el REF es para asignarle a un this. el valor del input