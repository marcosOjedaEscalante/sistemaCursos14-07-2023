import { request, response } from "express";
import { subirArchivo } from "../helpers/subirArchivo.js";

const upload = async (req = request, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        return res.status(400).json({
            msg: 'No viene archivo para cargarse en el servidor'
        });
    }

    try {
        const msg = await subirArchivo(req.files, ['txt', 'docx', 'sql'], 'archivosTexto');
        res.json({
            msg
        });   
    } catch (error) {
        res.status(400).json({
            error
        });
    }
}

export {
    upload
}