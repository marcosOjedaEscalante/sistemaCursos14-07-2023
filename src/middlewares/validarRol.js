import { request, response } from "express";

const validarRolAdmin = (req = request, res= response, next) => {
    const usuarioAutenticado = req.usuarioAutenticado;
    if(usuarioAutenticado.rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `El usuario ${usuarioAutenticado.nombre} no cuenta con los permisos para este recurso`
        });
    }
    next();
}

const validarRolUser =  () => {

}

const validarRoles = (...rest) => {

    return (req = request, res = response, next) => {
        if(!rest.includes(req.usuarioAutenticado.rol)){
            return res.status(401).json({
                msg: 'No tienes los privilegios para este recurso'
            });
        }
        next();
    }
}

export{
    validarRolAdmin,
    validarRoles
}