import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const LogOutButton = () => {
    const { logout } = useAuth0();

    return (<button style={{ backgroundColor: 'black', color: 'white', border: "2px solid white", marginLeft: "20px" }} onClick={() => { logout({ returnTo: window.location.origin }) }}>Salir del Perfil</button>);
}