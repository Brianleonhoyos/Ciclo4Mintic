router.get('/ventas/guardar', isAuthenticated,function (req, res) {
    res.render('index.hbs');
});