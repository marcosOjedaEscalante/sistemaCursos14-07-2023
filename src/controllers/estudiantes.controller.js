import { request, response } from "express";

const findAll = (req = request, res = response) => {
    res.json('Listado estudiantes');
}

const findById = (req = request, res = response) => {
    const id = req.params.id;
    res.json(`Un estudiante por id ${id}`);
}

const create = (req = request, res = response) => {
    const estudiante = req.body;
    console.log(estudiante);
    res.json(estudiante);
}

const update = (req = request, res = response) => {
    const estudiante = req.body;
    console.log(estudiante);
    res.json(estudiante);
}

const deleteById = (req = request, res = response) => {
    const id = req.params.id;
    res.json(`Eliminar estudiante ${id}`);
}

export{
    findAll,
    findById,
    create,
    update,
    deleteById
}
