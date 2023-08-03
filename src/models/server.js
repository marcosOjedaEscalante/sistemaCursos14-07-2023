import express from 'express';
import cors from 'cors';
import { routerEstudiantes } from '../routes/estudiantes.routes.js';
import { routerPlanFormativo } from '../routes/planFormativo.routes.js';
import { routerCurso } from '../routes/cursos.routes.js';
import { routerUsuarios } from '../routes/usuarios.routes.js';
import { routerAutenticacion } from '../routes/auth.routes.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        //this.app.use(express.urlencoded({extended: true})); web service con formularios, postman url encode
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/auth', routerAutenticacion);
        this.app.use('/estudiantes', routerEstudiantes);
        this.app.use('/planFormativo', routerPlanFormativo);
        this.app.use('/cursos', routerCurso);
        this.app.use('/usuarios', routerUsuarios);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }

}