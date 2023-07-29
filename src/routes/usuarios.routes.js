import { Router } from "express";
import { check } from "express-validator";
import { create, deleteById, findAll, findById, update } from "../controllers/usuarios.controller.js";
import { validarCampos } from "../middlewares/validarCampos.js";
import { validarRol, validarCorreoExistencia } from "../helpers/validacionesBD.js";

const routerUsuarios = Router();

routerUsuarios.get('/', findAll);

routerUsuarios.get('/:id', findById);

routerUsuarios.post('/', [
    check('correo', 'El correo es inválido').isEmail(),
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('password', 'Requiere al menos 6 caracteres').isLength({min: 6}),
    check('correo').custom(validarCorreoExistencia),
    check('rol').custom(validarRol),
    validarCampos
], create);

routerUsuarios.put('/', update);

routerUsuarios.delete('/:id', deleteById);

export{
    routerUsuarios
}