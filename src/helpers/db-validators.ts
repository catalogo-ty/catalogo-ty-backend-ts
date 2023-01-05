import mongoose from "mongoose";
import User from "../models/user";
import Role from "../models/role";
import Category from "../models/category";


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

export const validCategoryId = async (id: string) => {

    if (mongoose.Types.ObjectId.isValid(id)) {

        const category = await Category.findById(id)
        if (!category) {
            throw new Error(`No existe una caregoría con ID ${id} en la base de datos`)
        }
    }
    else {
        throw new Error('No es un ID válido de Mongo')
    }
}

export const isValidEmail = async (email: string = '') => {
    // Verificar si existe el correo
    const existeEmail = await User.findOne({ email })
    if (existeEmail) {
        throw new Error('Ya existe un usuario con ese correo electrónico')
    }
}

export const isValidRole = async (role: string = '') => {
    const existeRole = await Role.findOne({ role })
    if (!existeRole) {
        throw new Error(`El rol ${role} no está registrado`)
    }
}