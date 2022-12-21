import { Schema, model } from "mongoose";
import { IRole } from "../interfaces/role.interface";


const RoleSchema = new Schema<IRole>({

    name: {
        type: String,
        // segundo elemento del array: mensaje de validacion
        required: [true, 'El rol es obligatorio']
    },
    
})



export default model('Role', RoleSchema);