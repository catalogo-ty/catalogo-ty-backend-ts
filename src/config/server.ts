import express, {Application} from "express";
import config from ".";
import  userRoutes  from "../v1/user.routes";

export class Server {

    private app: Application;
    private port: string

    constructor(){

        this.app = express();
        this.port = config.port
        
        // Cargar rutas
        this.routes()
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log("Servidor en puerto: " + this.port);
            
        } )
    }

    routes(){
        this.app.use(config.pathV1.users, userRoutes);
    }

}