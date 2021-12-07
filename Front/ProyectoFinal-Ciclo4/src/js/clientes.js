const { text } = require('express');
const express = require('express');
const router = express.Router();

//const User = require('../models/User');

const passport = require('passport');

let consultar = function(){
    window.location = "/consultar"
    //router.get('/listar', passport.authenticate('local', {
      //  let cedula = document.getElementById("formGroupExampleInput"); 
      //  let datos = req.body();
    //}));
}
/*let crear = function(){
    window.location = "/crear"    ------------> debo de revisar esto porque creo que Brian ya guarda los usuarios en SINGUP
}*/
let actualizar = function(){
    window.location = "/actualizar"
}
let borrar = function(){
    window.location = "/borrar"
}

router.get('/consultar', isAuthenticated,function (req, res) {
    const {cedula} = req.body; 
    res.redirect('/clientes/listar');
    let datos = req.body();
});

router.get('/crear', isAuthenticated,function (req, res) {

    const {cedula, nombre, direccion, celular, correo} = req.body;
    const  User = new user({cedula, nombre, direccion, celular, correo});
    
    User.save(err =>{
        if(err){
            res.status(500).send('Error al registrar usuario');
        }
        else{
            res.status(200).send('Usuario Registrado');
        }
    });
    res.redirect('/clientes/guardar');

});

router.get('/actualizar', isAuthenticated,function (req, res) {
    const {cedula, nombre, direccion, relefono, correo} = req.body;
    const  User = new user({cedula, nombre, direccion, relefono, correo});
    res.redirect('/clientes/actualizar/{nit}');
    
});

router.get('/borrar', isAuthenticated,function (req, res) {
    const {cedula} = req.body; 
    res.redirect('/clientes/eliminar/{nit} ');

});