import { Request, Response } from "express";
import * as authService from '../services/auth.service'

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
        const user = await authService.verificarUsuario(email)
        if (!user) {
            return res.status(400).json({
                msg: `Correo y/o contraseña incorrectos`
            });
        }

        // Verificar el status del usuario
        if (user.status === false) {
            return res.status(400).json({
                msg: `Correo y/o contraseña incorrectos`
            })
        }

        // Verificar password
        const validPassword = authService.verificarPassword(password, user?.password!)
        if (!validPassword) {
            return res.status(400).json({
                msg: `Correo y/o contraseña incorrectos`
            })
        }
        // LLamar a servicio para generar JWT
        const token = await authService.generarJWT(user._id!)

        res.json({
            mgs: 'Login OK!!',
            user,
            token
        })

    } catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: 'Error en la autenticación'
        });
    }

} 
