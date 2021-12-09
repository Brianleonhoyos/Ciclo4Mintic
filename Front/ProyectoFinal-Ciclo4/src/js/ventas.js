
const Sell = require('../models/Ventas.js');

router.post('localhost:8081/ventas/guardar', isAuthenticated,function (req, res) {
    const {cedula, nombre, direccion, celular, correo} = req.body;
    const  Sell = new sell({cedula, nombre, direccion, celular, correo});
    res.render('index.hbs');
});