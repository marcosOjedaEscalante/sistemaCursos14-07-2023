import express from 'express';
import { routerEstudiante } from '../routes/estudiantes.routes.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes() {
        this.app.use('/estudiantes', routerEstudiante);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }

}