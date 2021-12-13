import React from "react";
import  { Component } from "react";
import axios from "axios";

class Consolidacion extends Component{
    ciudad = React.createRef();
    totalVentas = React.createRef();

    state = {
        consols: [],
        status: null
    }

    state = {
        ventas: [],
        status: null
    }

    componentWillMount() {
        this.getVentas();
        this.sumaVentas();
        this.postConsolidacion();
    }

   

    getVentas = () => {
        //Trae todos los productos de la api
        axios.get("http://localhost:8081/ventas/listar/")
            .then(res => {
                console.log(res.data);
                this.setState({
                    ventas: res.data
                })
            });
        
        this.sumaVentas(this.ventas);
    }

    sumaVentas = (ventas) => {
        let suma = 0;
        for (let i = 0; i < ventas.length; i++) {
            const element = ventas[i];
            suma+=ventas[i].totalVentas;            
        }
        console.log(suma);
        return suma;
    }
    

    postConsolidacion = () => {
        //e.preventDefault();
        //alert (this.cedula.current.value);
        var consolidacion = {
            ciudad: "Bogotá",
            totalVentas: this.sumaVentas(),
        } 
        
        axios.post("http://localhost:8084/consolidacion/guardar", consolidacion)
            .then(res=>{
                this.setState({
                    status:"success"
                })
            })
    }

    
    render() {
        return (
            <div>
                <p>Consolidación</p>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ciudad</th>
                            <th scope="col">Total ventas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ventas.map((venta) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td >{venta.ciudad}</td>
                                            <td >{venta.totalVentas}</td>
                                         </tr>
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Consolidacion;