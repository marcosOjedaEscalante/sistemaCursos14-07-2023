import { Router } from "express";
import { upload } from "../controllers/upload.controller.js";

const routerUpload = Router();

routerUpload.post('/', upload);

export{
    routerUpload
}