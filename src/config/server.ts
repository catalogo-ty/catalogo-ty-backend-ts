import express, {Application, Response, Request} from "express";
import cors from "cors";
import  userRoutes  from "../v1/routes/user.routes";
import config from ".";
import { dbConnection } from "./db";

export class Server {

    private app: Application;
    private port: string;

    constructor(){

        this.app = express();
        this.port = config.port;
        this.database();
        
        this.middlewares();
        this.routes();

    }

    async database(){
        await dbConnection()
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