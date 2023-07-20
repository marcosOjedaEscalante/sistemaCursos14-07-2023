import { Router } from "express";
import { deleteByIdEstudiante, findAllEstudiantes, findByIdEstudiante, insertEstudiante, updateEstudiante } from "../controllers/estudiantes.controller.js";

const routerEstudiante = Router();

routerEstudiante.get('/listarTodos', findAllEstudiantes);

routerEstudiante.get('/listarPorId/:id', findByIdEstudiante);

routerEstudiante.post('/insertar', insertEstudiante);

routerEstudiante.post('/actualizar', updateEstudiante);

routerEstudiante.get('/eliminarPorId/:id', deleteByIdEstudiante);

export{
    routerEstudiante
}