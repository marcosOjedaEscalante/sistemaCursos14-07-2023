import { Router } from "express";
import { create, deleteById, findAll, findById, update } from "../controllers/usuarios.controller.js";

const routerUsuarios = Router();

routerUsuarios.get('/', findAll);

routerUsuarios.get('/:id', findById);

routerUsuarios.post('/', create);

routerUsuarios.put('/', update);

routerUsuarios.delete('/:id', deleteById);

export{
    routerUsuarios
}