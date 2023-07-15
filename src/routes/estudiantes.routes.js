import { Router } from "express";
import { create, deleteById, findAll, findById, update } from "../controllers/estudiantes.controller.js";


const routerEstudiantes = Router();

routerEstudiantes.get('/', findAll);

routerEstudiantes.get('/:id', findById);

routerEstudiantes.post('/', create);

routerEstudiantes.put('/', update);

routerEstudiantes.delete('/:id', deleteById);

export{
    routerEstudiantes
}