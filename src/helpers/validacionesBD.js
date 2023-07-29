import { Usuario } from "../models/usuarios.js";

const validarCorreoExistencia = async (correo) => {
    const emailExiste = await Usuario.findOne({where: {correo}});
    if(emailExiste){
        throw new Error(`El correo ${correo} ya se encuentra inscrito`);
    }
}

const validarRol = async (rol) => {
    const rolExiste = await Usuario.findOne({where: {rol}});
    if(rolExiste){
        throw new Error(`El rol ${rol} no existe en la BD`);
    }
}

const validarIdUsuario =  async(id) => {
    const idExiste = await Usuario.findByPk(id);
    if(!idExiste){
        throw new Error(`El id ${id} no existe para actualizar`);
    }
}

export{
    validarCorreoExistencia,
    validarRol,
    validarIdUsuario
}