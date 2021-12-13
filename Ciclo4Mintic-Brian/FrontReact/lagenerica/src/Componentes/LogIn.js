import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button style={{ backgroundColor: 'black', color: 'white', border: "2px solid white", marginLeft: "400px" }} onClick={() => { loginWithRedirect() }}>Ingresar Usuario</button>
}