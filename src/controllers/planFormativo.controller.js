const findAll = (req, res) => {
    res.json("find all");
}

const findById = (req, res) => {
    res.json("find by id");
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