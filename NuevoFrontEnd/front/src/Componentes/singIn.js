import React, {Component} from "react";


class singIn extends Component{



    render(){
        return(
        
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card mt-4 tex-center">
                        <div class="card-header mx-auto d-block">
                            <h1>Bienvenido</h1>
                        </div>
                        <img src="/recursos/imagenes/3582883.jpg" class="rounded-circle mx-auto d-block m-4 logo" alt="Logo"/>
                        <div class="card-body">
                                <div class="form-goup p-2">
                                    <input type="email" class="form-control" name="email" placeholder="Correo" autofocus/>
                                </div>
                                <div class="form-group p-2">
                                    <input type="password" name="password" class="form-control" placeholder="Clave"/>
                                </div>
                                <div class="form-goup p-2 center">
                                <LoginButton/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
             

        );
    }
}

export default singIn;