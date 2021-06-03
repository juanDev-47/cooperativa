import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import clienteRoutes from './routes/clienteRoutes';

// procedemos a crear una clase con la cual vamos a levantar nuestro servidor haciendo uso de typescript
class Server { 

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/cliente',clienteRoutes);

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port `, this.app.get('port'));
        });
    }

}

// se inicia el servidor con una instancia del objeto Server
const server = new Server();
server.start();