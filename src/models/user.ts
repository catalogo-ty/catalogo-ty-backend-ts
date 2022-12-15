import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>({

    name: {
        type: String,
        // segundo elemento del array: mensaje de validacion
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        // segundo elemento del array: mensaje de validacion
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        // segundo elemento del array: mensaje de validacion
        required: [true, 'La contraseña es obligatorio'],
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

UserSchema.methods.toJSON = function () {
    // extraer password y __v
    const { password, __v, _id, ...user } = this.toObject()
    user.uid = _id
    return user;
}

export default model('User', UserSchema);