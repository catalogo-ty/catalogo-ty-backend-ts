import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import * as authService from '../services/auth.service'

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
        const user = await authService.verificarUsuario(email, password, res)
        // LLamar a servicio para generar JWT
        const jwt = await authService.generarJWT(user?._id) 

        res.json({
            mgs: 'Login OK!!',
            user,
            jwt
        })

    } catch (error) {
        console.log({error});
    }

} 
