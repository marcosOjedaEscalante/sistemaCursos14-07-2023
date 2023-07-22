import { Router } from "express";
import { create, deleteById, findAll, findById, update } from "../controllers/planFormativo.controller.js";

const routerPlanFormativo = Router();

routerPlanFormativo.get('/', findAll);

routerPlanFormativo.get('/:id', findById);

routerPlanFormativo.post('/', create);

routerPlanFormativo.put('/', update);

routerPlanFormativo.delete('/:id', deleteById);

export{
    routerPlanFormativo
}