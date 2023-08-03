import { request, response } from "express";
import jwt from 'jsonwebtoken';
import { Usuario } from "../models/usuarios.js";

const validarJWT = async (req = request, res = response, next) => {

    const token = req.header('Authorization');
    // validar existencia del token
    if (!token) {
        return res.status(401).json({
            msg: 'No cuentas con acceso a este recurso - no viene token'
        });
    }
    // validar que el token sea válido
    try {
        const { uid } = jwt.verify(token, process.env.SECRETKEY);
        const usuarioAutenticado = await Usuario.findByPk(uid);
        req.usuarioAutenticado = usuarioAutenticado;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'No cuentas con acceso a este recurso - el token no es válido'
        });
    }
}

export {
    validarJWT
}