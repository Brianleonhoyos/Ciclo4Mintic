import React from "react";
import { Component } from "react";
import { LoginButton } from './LogIn';
import { LogOutButton } from './LogOut';

class Navbar extends Component {



    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/inicio">La Generica</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/productos">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/clientes">Clientes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/proveedores">Proveedores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/reportes">Reportes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/ventas">Ventas</a>
                            </li>
                            <li class="nav-item">

                                <LoginButton />
                                <LogOutButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;