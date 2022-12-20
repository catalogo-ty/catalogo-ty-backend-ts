import { encryptPassword } from '../helpers/encrypt';
import { IUser } from "../interfaces/user.interface";
import User from "../models/user";

export const getAllUsers = async (limit: number, from: number) => {

    const query = { status: true }

    const resp = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(from)
            .limit(limit)
    ]);

    const [total, users] = resp
    return { total, users }

}

export const getOneUser = async (id: string): Promise<IUser | null> => {

    const user = await User.findById(id);
    return user

}

export const createNewUser = async (user: IUser) => {

    try {
        const newUser = new User(user)
        newUser.password = encryptPassword(user.password)
        
        await newUser.save()
        return newUser

    } catch (error) {
        console.log(error);
    }
}

export const updateOneUser = async (id: string, user: IUser, password: string | undefined) => {
    
    try {
        if (user.password) {// nuevo password
            // Encriptar contraseña
            user.password = encryptPassword(user.password)
        }
        //  {new:true} = Para que retorne el usuario con los nuevos datos
        const userUpdated = await User.findByIdAndUpdate(id, user, {new:true})
        return userUpdated

    } catch (error) {
        console.log(error);
    }
}