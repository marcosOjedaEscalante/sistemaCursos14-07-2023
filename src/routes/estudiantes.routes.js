import { Router } from "express";
import { deleteByIdEstudiante, findAllEstudiantes, findByIdEstudiante, insertEstudiante, llamarFormulario, updateEstudiante } from "../controllers/estudiantes.controller.js";

const routerEstudiante = Router();

routerEstudiante.get('/listarTodos', findAllEstudiantes);

routerEstudiante.get('/listarPorId/:id', findByIdEstudiante);

routerEstudiante.post('/insertar', insertEstudiante);

routerEstudiante.post('/actualizar', updateEstudiante);

routerEstudiante.get('/eliminarPorId/:id', deleteByIdEstudiante);

routerEstudiante.get('/formularioInsertar', llamarFormulario);

export{
    routerEstudiante
}