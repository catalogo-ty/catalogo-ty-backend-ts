import { Schema, model } from "mongoose";
import { ICategory } from "../interfaces/category.interface";

const CategorySchema = new Schema<ICategory>({

    name: {
        type: String,
        required: [true, 'El nombre de la categoría es obligatorio']
    },
    status: {
        type: Boolean,
        default: true,
        required: [true, 'El estatus de la categoría es obligatorio']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
});

CategorySchema.methods.toJSON = function () {
    // extraer password y __v
    const { status, __v, ...category } = this.toObject()
    return category;
}

export default model('Category', CategorySchema);