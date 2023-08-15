const { response, request } = require('express');

let req = request;

//! Por cada ruta se puede separar su controller
//! Es decir por cada ruta de route debemos menterlo dentro del archivo controller/USUARUIO

const usuariosGet = (req = request, res = response) => {
    const { q, Nombre, App } = req.query;//!
    res.json({ msg: 'Api-get-From-Controller', q, Nombre, App });
}

const usuariosPut = (req = request, res = response) => {

    const id = req.params.id; ///*NOTESE QUE EXTRAEMOS LOS DATOS DESDE LA URL CON EL NOMBRE 'ID' DESDE EL ROUTER */
    res.json({ msg: 'Api-put-From-Controller', id });
}

const usuariosDelete = (req = request, res = response) => {
    res.json('Api-Delete-From-Controller');
}

const usuariosPost = (req = request, res = response) => {
    //const body = req.body;//! Extraemos los datos directamente
    //? Podemos desestrcuturara los datos para solo traer lo que necesitamos y evitar traer datos que no son nuestros
    const { hola } = req.body;
    res.status(201).json({

        msg: 'Api-post-From-Controller',
        hola
    });
    //console.log(req.body)
}


module.exports = { usuariosGet, usuariosPut, usuariosDelete, usuariosPost }