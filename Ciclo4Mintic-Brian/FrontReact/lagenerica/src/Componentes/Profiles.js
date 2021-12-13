import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
export const Profile = () => {

    const { user, isAuthenticated, isLoading} = useAuth0();

    // eslint-disable-next-line no-undef
    let enviarCliente = function () {
        /* alert(this.cedula.current.value); */
        var cliente = {
            cedula: null,
            nombre: user.name,
            direccion: null,
            telefono: null,
            correo: user.email
        }

        axios.post("http://localhost:8082/clientes/guardar/", cliente)
            .then(res => {
                this.setState({
                    status: "success"
                })
            })
    }

    if(isLoading){
        return(
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return(
        isAuthenticated && (
            <div>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                {enviarCliente()}
            </div>
        )
    );


}