import { Response } from "express"
import { createJwt } from "../helpers/create-jwt";
import { comparePassword } from "../helpers/encrypt";
import { IUser } from "../interfaces/user.interface";

import User from "../models/user"

export const verificarUsuario = async (email: string, password: string, res: Response): Promise<IUser | undefined> => {

    try {
        // Verificar que el email esta en la bd
        const user = await User.findOne({email});
        if (!user) {
            res.status(400).json({
                msg: `Correo y/o contraseña incorrectos`
            })
        }
        // Verificar estatus del usuario
        if (user?.status === false) {
            res.status(400).json({
                msg: `Correo y/o contraseña incorrectos`
            })
        }
        // Comparar password del body con el password encriptado del usuario
        const validPassword = comparePassword(password, user!.password)
        if (!validPassword) {
            res.status(400).json({
                msg: `Correo y/o contraseña incorrectos`
            })
        }
        

        // Retornar usuario
        return user!

    } catch (error) {
        console.log({error});
    }

}

export const generarJWT = async (id:string): Promise<string> => {
    
    const jwt = await createJwt(id)
    return jwt

}