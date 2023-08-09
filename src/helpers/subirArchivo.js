import path from 'path';
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';

const subirArchivo = (files, opcionesExtension = ['png', 'jpg', 'docx', 'sql', 'txt'], carpeta = '') => {
    return new Promise((resolve, reject) => {
        const { archivo } = files;

        let extension = archivo.name.split('.');
        extension = extension[extension.length - 1];
        if (!opcionesExtension.includes(extension)) {
            return reject(`La ruta ${extension} del archivo ${archivo.name} no está permitida.`);
        }

        const nombreFinal = uuidv4() + '.' + extension;
        const rutaGuardarArchivo = path.join(path.dirname(fileURLToPath(import.meta.url)), '../uploads/', carpeta ,nombreFinal);

        archivo.mv(rutaGuardarArchivo, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`El archivo ${nombreFinal} ha sido guardado correctamente`);
        });
    });
}

export {
    subirArchivo
}