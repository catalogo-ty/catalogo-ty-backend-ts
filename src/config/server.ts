import express, {Application, Response, Request} from "express";
import cors from "cors";
import  userRoutes  from "../v1/user.routes";
import config from ".";

export class Server {

    private app: Application;
    private port: string;

    constructor(){

        this.app = express();
        this.port = config.port;
        
        // Cargar rutas
        this.routes();
        this.middlewares()

    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log("Servidor en puerto: " + this.port);
            
        } )
    }

    routes(){
        this.app.use(config.pathV1.users, userRoutes);

        this.app.get('*', (req: Request,res:Response) => {
            res.json({
                msg: "Acceso denegado"
            })
        })
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura del body - JSON
        this.app.use( express.json() );
    }

}