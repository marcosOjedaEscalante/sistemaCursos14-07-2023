import { Router } from "express";
import { create, deleteById, findAll, findById, update } from "../controllers/cursos.controller.js";

const routerCurso = Router();

routerCurso.get('/', findAll);

routerCurso.get('/:id', findById);

routerCurso.post('/', create);

routerCurso.put('/', update);

routerCurso.delete('/:id', deleteById);

export{
    routerCurso
}