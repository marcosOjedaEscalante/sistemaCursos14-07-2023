const findAllEstudiantes = (req, res) => {
    res.render('index');
}

const findByIdEstudiante = (req, res) => {
    res.send('find by id');
}

const insertEstudiante = (req, res) => {
    res.send('insert');
}

const updateEstudiante = (req, res) => {
    res.send('update');
}

const deleteByIdEstudiante = (req, res) => {
    res.send('delete by id');
}

export{
    findAllEstudiantes,
    findByIdEstudiante,
    insertEstudiante,
    updateEstudiante,
    deleteByIdEstudiante
}