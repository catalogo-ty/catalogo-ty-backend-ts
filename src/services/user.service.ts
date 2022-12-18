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