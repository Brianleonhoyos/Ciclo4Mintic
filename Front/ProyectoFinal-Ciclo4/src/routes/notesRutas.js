const express = require('express');
const router = express.Router();

const {isAuthenticated} = require('../helpers/auth');

//------------------------------------------------------------------------//
router.get('/servicios/productos', isAuthenticated,function (req, res) {
    res.render('servicios/productos');
});

router.get('/servicios/clientes', isAuthenticated,function (req, res) {
    res.render('servicios/clientes');
});
router.get('/servicios/reportes', isAuthenticated,function (req, res) {
    res.render('servicios/reportes');
});
router.get('/servicios/ventas', isAuthenticated,function (req, res) {
    res.render('servicios/ventas');
});



module.exports = router;