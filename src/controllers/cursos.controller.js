import { Curso } from "../models/cursos.js";
import { PlanFormativo } from "../models/planFormativo.js";

const findAll = (req, res) => {
    res.json("find all");
}

const findById = async (req, res) => {
    const id = req.params.id;
    const curso = await Curso.findByPk(id, {
        include: PlanFormativo
    });
    res.json(curso);
}

const create = (req, res) => {
    res.json("create");
}

const update = (req, res) => {
    res.json("update");
}

const deleteById = (req, res) => {
    res.json("delete");
}

export{
    findAll,
    findById,
    create,
    update,
    deleteById
}