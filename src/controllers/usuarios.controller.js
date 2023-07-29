import {request, response} from 'express';
import bcrytpjs from 'bcryptjs';
import { Usuario } from '../models/usuarios.js';

const findAll = (req = request, res = response) => {
    res.send('FindAll');
}

const findById = (req = request, res = response) => {
    res.send('Find By Id');
}

const create = async (req = request, res = response) => {
    const {nombre, correo, password, rol} = req.body;
    const usuario = {
        nombre,
        correo,
        password,
        rol
    }
    // Encriptar contraseña
    const salt = bcrytpjs.genSaltSync();
    usuario.password = bcrytpjs.hashSync(password, salt);

    const usuarioInsertado = await Usuario.create(usuario); // build save
    usuarioInsertado.password = '';
    res.json(usuarioInsertado);
}

const update = async (req = request, res = response) => {
    const id = req.params.id;
    const { correo, ...resto } = req.body;
    const usuarioActualizar = await Usuario.findByPk(id);
    const salt = bcrytpjs.genSaltSync();
    resto.password = bcrytpjs.hashSync(resto.password, salt);
    const actualizado = await usuarioActualizar.update(resto);
    actualizado.password = '';
    res.json(actualizado);
}

const deleteById = (req = request, res = response) => {
    res.send('Delete By Id');
}

export{
    findAll,
    findById,
    create,
    update,
    deleteById
}