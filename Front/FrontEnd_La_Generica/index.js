const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const bcrypt= require('bcrypt');
const mongoose=require('mongoose');
const user = require('./public/usuario.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
const mongo_uri ='mongodb://localhost:27017/tienda'
mongoose.connect(mongo_uri,function(err){
    if(err){
        console.log('Inicia Log de errores de Mongo');
        throw  err;
        console.log('Finaliza Log de errores de Mongo');
    }
    else{
        console.log('se conectó a ${mongo_uri}');
    }
});

app.post('/registrar',(req,res) => { 
    
    const {nomUsuario,contraseña} =req.body;
    console.log('Entra a metodo post/registrar');
const  Usuario=new usuario({nomUsuario,contraseña});
console.log('Declara variable usuario');
    Usuario.save(err =>{
        if(err){
            res.status(500).send('Error al registrar usuario');
        }
        else{
            res.status(200).send('Usuario Registrado');
        }
    });
    
});
app.post('/autenticacion',(req,res) => { 
    const {nomUsuario,contraseña} =req.body;
    userusuario.findOne({nomUsuario},(err,usuario) => {
        if(err){
            res.status(500).send('Error al autenticar usuario');
        }else if(!usuario){
            res.status(500).send('El usuario no existe');
        } else
        {
            ususuario.isCorrectPassword(contraseña,(err,result)=>{
                if(err){
                    res.status(500).send('Error al autenticar');
                }else if(result){
                    res.status(200).send('Usuario logueado correctamente');
                }else{
                    res.status(500).send('usuario o clave incorrecta');
                }
            });
        }
    });
});
app.listen(3000,() => {
        console.log('Servidor Inicia puerto 3000');
})
module.exports=index;