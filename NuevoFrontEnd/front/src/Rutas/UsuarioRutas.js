/*import React, { Component } from "react";
import axios from "axios";
import User from "../models/User";
import express from "express";

class UserRouter extends Component() {

    redirect = () => {

        window.location('/users/signin');

    }

}
class UserRouter2 extends Component() {
    redirect2 = () => {

        window.location('/users/signup');

    }

}

class UserRouter3 extends Component() {
    setInJSON = () => {

            const obj = JSON.parse(JSON.stringify(req.body));
            const { name, email, password, confirm_password } = JSON.parse(JSON.stringify(req.body));
            const errors = [];
            //console.log(obj);
            if (name.length <= 0) {
                errors.push({ text: 'Por favor incerte su nombre.' });
            }
            if (password != confirm_password) {
                errors.push({ text: 'Las contraseñas no coinciden.' });
            }
            if (password.length < 4) {
                errors.push({ text: 'Las contraseñas debe ser mayor a 4 caracteres.' });
            }
            const emailUser = await User.findOne({ email: email });
            if (emailUser) {
                errors.push({ text: 'Este correo electronico ya esta en uso.' });
                req.flash('error_msg', 'Este correo electronico ya esta en uso.');
                res.redirect('/users/signup');
            }
            const nameUser = await User.findOne({ name: name });
            if (nameUser) {
                errors.push({ text: 'Este nombre ya esta en uso.' });
                req.flash('error_msg', 'Este nombre ya esta en uso.');
                res.redirect('/users/signup');
            }
            if (errors.length > 0) {
                res.render('users/signup', { errors, name, email, password, confirm_password });
            }
            else {
                //res.send('ok');
                const newUser = new User({ name, email, password });
                newUser.password = await newUser.encryptPassword(password);
                await newUser.save();
                req.flash('success_msg', 'Usuario registrado');
                res.redirect('/users/signin');
            }
            //console.log(obj);


    }

}

class UserRouter4 extends Component() {
    redirect3 = () => {

            window.location('/');

    }
}

class UserRouter5 extends Component() {
    redirect4 = () => {

        window.location('/');

    }
}

export default UserRouter;
export default UserRouter2;
export default UserRouter3;
export default UserRouter4;
export default UserRouter5;*/