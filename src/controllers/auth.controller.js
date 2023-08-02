import { request, response } from "express";

const loginUsuario = (req = request, res = response) => {
    res.json({
        msg: 'login ok'
    });
}

export{
    loginUsuario
}