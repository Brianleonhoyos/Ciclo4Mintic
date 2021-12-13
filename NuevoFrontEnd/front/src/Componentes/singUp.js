import React, { Component } from "react";


class singUp extends Component {
    render() {
        return (

            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card">
                        <div class="card-header mx-auto d-block">
                            Registro de Cuenta
                        </div>
                        <div class="card-body">
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="name" placeholder="Nombre" />

                                </div>
                                <div class="form-group p-2">
                                    <input type="email" class="form-control" name="email" placeholder="Correo" />
                                </div>
                                <div class="form-group p-2">
                                    <input type="password" class="form-control" name="password" placeholder="Clave" />

                                </div>
                                <div class="form-group p-2">
                                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirmación Clave" />

                                </div>
                                <div class="form-group p-2">
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}

export default singUp;