import { createJwt } from "../helpers/create-jwt";
import { comparePassword } from "../helpers/encrypt";
import { IUser } from "../interfaces/user.interface";
import User from "../models/user"

export const verificarUsuario = async (email: string): Promise<IUser | null> => {
    // Verificar que el email esta en la bd
    const user = await User.findOne({ email }, {
        _id:1,
        name:1,
        email:1,
        password:1
    })
    return user
}

export const verificarPassword = ( password: string, userPassword:string): boolean => {
    const validPassword = comparePassword(password, userPassword);
    return validPassword;
}

export const generarJWT = async (id: string): Promise<string> => {

    const jwt = await createJwt(id)
    return jwt

}