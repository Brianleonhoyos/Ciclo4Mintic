const { text } = require('express');
const express = require('express');
const router = express.Router();

//const User = require('../models/User');

const passport = require('passport');


let nombre = document.getElementById("formGroupExampleInput2"); 
let direccion = document.getElementById("formGroupExampleInput3"); 
let telefono = document.getElementById("formGroupExampleInput4"); 
let correo = document.getElementById("formGroupExampleInput5"); 

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
    let cedula = document.getElementById("formGroupExampleInput"); 
    res.redirect('/clientes/listar');
    let datos = req.body();
});

router.get('/crear', isAuthenticated,function (req, res) {
    let cedula = document.getElementById("formGroupExampleInput"); 
    let nombre = document.getElementById("formGroupExampleInput2"); 
    let direccion = document.getElementById("formGroupExampleInput3"); 
    let telefono = document.getElementById("formGroupExampleInput4"); 
    let correo = document.getElementById("formGroupExampleInput5"); 
    res.redirect('/clientes/guardar');
    let datos = req.body();
});

router.get('/actualizar', isAuthenticated,function (req, res) {
    let cedula = document.getElementById("formGroupExampleInput"); 
    let nombre = document.getElementById("formGroupExampleInput2"); 
    let direccion = document.getElementById("formGroupExampleInput3"); 
    let telefono = document.getElementById("formGroupExampleInput4"); 
    let correo = document.getElementById("formGroupExampleInput5"); 
    res.redirect('/clientes/actualizar/{nit}');
    let datos = req.body();
});

router.get('/borrar', isAuthenticated,function (req, res) {
    let cedula = document.getElementById("formGroupExampleInput"); 
    res.redirect('/clientes/eliminar/{nit} ');
    let datos = req.body();
});