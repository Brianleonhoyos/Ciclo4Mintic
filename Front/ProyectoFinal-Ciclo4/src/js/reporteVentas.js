///////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const router = express.Router();
let tabla = [{}];

const User = require('../models/User');

router.get('/cargarTabla', isAuthenticated,function (req, res) {
    let codigo = document.getElementById("Codigo");
    res.redirect('/api/productos');
    let datos = req.body();
    agregarElemento(datos);

});

function agregarElemento(datos){
    for(let add of datos){tabla.push(datos)}
    crearTabla(tabla);
};
 
let crearTabla = function (lista){
    let stringTabla = "<tr><th>Cliente</th><th>Cedula</th><th>Fecha Venta</th><th>Codigo del Articulo</th><th>Valor Total de la Venta</th></tr>";
    for(let element of lista){
        let fila = "<tr> <td>";
        fila += element.cliente;
        fila += "</td>";

        fila += "<td>";
        fila += element.cedula;
        fila += "</td>";

        fila += "<td>";
        fila += element.fecha;
        fila += "</td>";

        fila += "<td>";
        fila += element.codigo;
        fila += "</td>";

        fila += "<td>";
        fila += element.valorTotal;
        fila += "</td>";

        fila += "</tr>";

        stringTabla += fila;
    }
    return stringTabla;
};

document.getElementById("tablaVentas").innerHTML = crearTabla(cliente);
////////////////////////////////////////////////////////////////////////////////////////////////// 

//router.get('/cargarTabla', isAuthenticated,function (req, res) {
    //let codigo = document.getElementById("Codigo");
    // let url = "/productos";
   // fectch
//});

//router.get('/users/logout', function (req, res) {
 //   req.logout();
 //   res.redirect('/');
//});