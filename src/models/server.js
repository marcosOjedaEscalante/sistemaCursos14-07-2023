import express from 'express';
import hbs from 'hbs';
import { routerEstudiante } from '../routes/estudiantes.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.set('view engine', 'hbs');
        this.app.use(express.urlencoded({ extended: false }));
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        hbs.registerPartials(__dirname + '/views/partials');
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