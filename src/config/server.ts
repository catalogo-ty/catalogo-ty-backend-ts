import express, {Application} from "express";
import config from ".";

export class Server {

    private app: Application;
    private port: string

    constructor(){

        this.app = express();
        this.port = config.port 
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log("Servidor en puerto: " + this.port);
            
        } )
    }

}