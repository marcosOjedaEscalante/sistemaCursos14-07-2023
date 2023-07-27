import {request, response} from 'express';

const findAll = (req = request, res = response) => {
    res.send('FindAll');
}

const findById = (req = request, res = response) => {
    res.send('Find By Id');
}

const create = (req = request, res = response) => {
    res.send('Create');
}

const update = (req = request, res = response) => {
    res.send('Update');
}

const deleteById = (req = request, res = response) => {
    res.send('Delete By Id');
}

export{
    findAll,
    findById,
    create,
    update,
    deleteById
}