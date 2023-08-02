import { Router } from "express";
import { loginUsuario } from "../controllers/auth.controller.js";

const routerAutenticacion = Router();

routerAutenticacion.post('/login', loginUsuario);

export{
    routerAutenticacion
}