import React from "react";
import { Navigate } from "react-router";
import axios from "axios";

class SubirProducto extends Component{

    archivo = React.createRef();

    state = {
        producto_ArchivoLista:[],
        status:null
    }

    guardarProducto = (e) => {
        e.preventDefault(); //Para no enviar datos por la URL para mas securite
        let producto = {
            archivo:this.archivo, // falta procesarlo para hacerlo una lista para que lo lea el microservicio de LINA
        }

        if(typeof e !== 'string'){
            throw TypeError('El archivo no es una cadena de texto')
        }

        let lista = e.slice(false ? e.indexOf('/n') + 1 : 0)//? ES PARA DECIRLE QUE SI ES TRUE?
        .split('/n')//No puede ir ; arriba porque crea un error ya que e.slice se cierra
        .map(l => l.split(','));

        producto_ArchivoLista.push(lista);

        axios.post("http://localhost:8081/api/productos" + producto_ArchivoLista) //Aqui va la url de listar
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
            <div class="card-body">
                <div class="form-goup p-2 center">
                    <input type="file" accept=".csv" class="form-control" id="inputGroupFile02" name = "archivo" ref = {this.archivo}/> 
                </div>
                <div class="form-goup p-2 center">
                    <button onClick = {
                        () => {
                            this.guardarProducto(this.archivo); // hay que mirar esto porque en el video lo hace con un form que llama a la funcion pero sin ningun parametro
                        }
                    } class="btn btn-primary btn-block">
                        Cargar
                    </button>
                </div>
            </div>
        );{
            
        }
    }

}

export default SubirProducto;

//Linea 13 input, el REF es para asignarle a un this. el valor del input