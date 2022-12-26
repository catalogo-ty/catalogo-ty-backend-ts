import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from "../config";
import { PayloadJWT } from "../interfaces/user.interface";
import User from "../models/user";

export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {

    // Token  presente en los headers de la petición (x-token)
    const token = req.header('x-token')   
    if (!token) {
        return res.status(401).json({
            msg: 'Usuario no autorizado'
        })
    }

    try {
        //Obtener usuario desde el token
        /*
        Nota: Método verify retorna un objecto JwtPayload o un string.
        Esto provoca que no se pueda desestructurar el objeto que contiene los datos
        provenientes desde el token
        SOLUCIÓN: Crear la interfaz PayloadJWT y castear la función verify para asi
        obtener el dato deseado desde el objecto
        
        https://github.com/auth0/node-jsonwebtoken/issues/483
        */
        const { uid } = <PayloadJWT>verify(token, config.secretKeyJWT)
        
        const user = await User.findById(uid)
        if (!user) {
            return res.status(401).send({
                msg: 'Usuario no autorizado'
            })
        }

        if (!user.status) {
            return res.status(401).send({
                msg: 'Usuario no autorizado'
            })
        }

        // authUser: Objeto de usuario autenticado
        req.authUser = user;
        

        next();

        
    } catch (error) {
        console.log(error);
        
    }
}