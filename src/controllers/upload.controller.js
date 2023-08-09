import { request, response } from "express";
import path from 'path';
import { fileURLToPath } from "url";

const upload = (req = request, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        return res.status(400).json({
            msg: 'No viene archivo para cargarse en el servidor'
        });
    }
    const { archivo } = req.files;

    let extension = archivo.name.split('.');
    extension = extension[extension.length - 1];
    const opcionesExtension = ['png', 'jpg', 'docx', 'sql', 'txt'];
    if (!opcionesExtension.includes(extension)) {
        return res.status(400).json({
            msg: `La ruta ${extension} del archivo ${archivo.name} no está permitida.`
        });
    }

    const rutaGuardarArchivo = path.join(path.dirname(fileURLToPath(import.meta.url)), '../uploads/', archivo.name);

    archivo.mv(rutaGuardarArchivo, (err) => {
        if (err) {
            return res.status(500).json({ err });
        }
        res.json({
            msg: 'Archivo cargado!'
        });
    });
}

export {
    upload
}