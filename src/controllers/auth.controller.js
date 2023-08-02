import { request, response } from "express";
import bcryptjs from 'bcryptjs';
import { Usuario } from "../models/usuarios.js";
import { generarJWT } from "../helpers/jwt.js";

const loginUsuario = async (req = request, res = response) => {
    const { correo, password } = req.body;
    // Validar el correo existencia
    const usuario = await Usuario.findOne({ where: { correo } });
    if(!usuario){
        return res.json({
            msg: 'El correo o contraseña son inválidos - correo'
        });
    }
    // Validar la contraseña
    const passwordValido = bcryptjs.compareSync(password, usuario.password);
    if(!passwordValido){
        return res.json({
            msg: 'El correo o contraseña son inválidos - contraseña'
        });
    }
    // construir el token
    const token = await generarJWT(usuario.id);

    res.json({
        msg: 'Login funcionando',
        token
    });
}

export {
    loginUsuario
}