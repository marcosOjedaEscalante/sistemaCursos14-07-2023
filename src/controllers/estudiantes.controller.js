import { request, response } from "express";
import { Estudiante } from "../models/estudiante.js";

const findAll = async (req = request, res = response) => {
    try {
        const arregloEstudiantes = await Estudiante.findAll();
        res.status(200).json(arregloEstudiantes);
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            mensajePersonalizado: 'Error en el servidor, findAll estudiante'
        });
    }
}

const findById = async (req = request, res = response) => {
    try {
        let id = req.params.id;
        id = parseInt(id);
        if (isNaN(id)) {
            res.status(400).json({
                mensajePersonalizado: 'Error en el cliente, findById estudiante, id no válido'
            });
        } else {
            const estudiante = await Estudiante.findByPk(id);
            res.status(200).json(estudiante);
        }
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            mensajePersonalizado: 'Error en el servidor, findById estudiante'
        });
    }
}

const create = async (req = request, res = response) => {
    try {
        let arregloIdentificadoresEstudiantes = await Estudiante.findAll({
            attributes: ['id_estudiante']
        });
        const estudiante = req.body;
        arregloIdentificadoresEstudiantes = arregloIdentificadoresEstudiantes.map((estudiante) => {
            return estudiante.dataValues.id_estudiante;
        });
        const respuesta = arregloIdentificadoresEstudiantes.includes(estudiante.id_estudiante);
        if (respuesta) {
            res.status(406).json({
                mensajePersonalizado: 'Error en el cliente, create estudiante, identificador repetido'
            });
        } else {
            const estudianteInsertado = await Estudiante.create(estudiante);
            res.status(200).json(estudianteInsertado);
        }
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            mensajePersonalizado: 'Error en el servidor, create estudiante'
        });
    }
}

const update = async (req = request, res = response) => {
    try {
        const { id_estudiante, nombre, apellido_pat, apellido_mat } = req.body;
        const estudiante = await Estudiante.findByPk(id_estudiante);
        if (estudiante) {
            estudiante.nombre = nombre;
            estudiante.apellido_pat = apellido_pat;
            estudiante.apellido_mat = apellido_mat;
            const estudianteActualizado = await estudiante.save();
            res.json(estudianteActualizado);
        } else {
            res.status(400).json({
                mensajePersonalizado: 'Error en el cliente, save estudiante, no existe este estudiante',
                estudiante: req.body
            });
        }
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            mensajePersonalizado: 'Error en el servidor, update estudiante'
        });
    }
}

const deleteById = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const estudiante = await Estudiante.findByPk(id);
        if (estudiante) {
            await estudiante.destroy();
            res.json(`El estudiante con id: ${id}, fue eliminado con éxito`);
        } else {
            res.json(`El estudiante con id: ${id}, no existe`);
        }
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            mensajePersonalizado: 'Error en el servidor, deleteById estudiante'
        });
    }
}

export {
    findAll,
    findById,
    create,
    update,
    deleteById
}
