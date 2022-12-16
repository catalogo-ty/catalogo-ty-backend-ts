import mongoose from "mongoose";
import User from "../models/user";

export const validUserId = async (id: string) => {

    if (mongoose.Types.ObjectId.isValid(id)) {

        const user = await User.findById(id)
        if (!user) {
            throw new Error(`No existe un usuario con ID ${id} en la base de datos`)
        }
    }
    else {
        throw new Error('No es un ID válido de Mongo')
    }
}