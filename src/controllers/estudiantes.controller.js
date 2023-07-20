import { Estudiante } from "../models/estudiante.js";

const findAllEstudiantes = async (req, res) => {
    const listadoEstudiantes = await Estudiante.findAll();
    res.render('index', {
        listadoEstudiantes
    });
}

const findByIdEstudiante = (req, res) => {
    res.send('find by id');
}

const insertEstudiante = async (req, res) => {
    const { txtIdentificador, txtRut, txtNombre, txtApePat, txtApeMat} = req.body;
    const identificador = parseInt(txtIdentificador);
    const estudianteInsertado = await Estudiante.create({
        id_estudiante: identificador,
        rut: txtRut,
        nombre: txtNombre,
        apellido_pat: txtApePat,
        apellido_mat: txtApeMat
    });
    const listadoEstudiantes = await Estudiante.findAll();
    res.render('index', {
        listadoEstudiantes
    });
}

const updateEstudiante = (req, res) => {
    res.send('update');
}

const deleteByIdEstudiante = (req, res) => {
    res.send('delete by id');
}

const llamarFormulario = (req, res) => {
    res.render('formularioInsertar');
}

export{
    findAllEstudiantes,
    findByIdEstudiante,
    insertEstudiante,
    updateEstudiante,
    deleteByIdEstudiante,
    llamarFormulario
}