import { NextFunction, Request, Response } from "express";
import  { validationResult }  from "express-validator";

// middlewares tambien tienen como parámetros req y res
// next: Función que se va a ejecutar si el middleware pasa
export const validateFields = (req: Request, res: Response, next: NextFunction ) => {

    // Errores registrados en express-validator
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    next();

}