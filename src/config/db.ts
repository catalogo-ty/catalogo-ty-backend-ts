import mongoose from "mongoose";
import config from ".";

export const dbConnection = async () => {

    try {
        // Moongose 6.8.0 => mongoose.set("strictQuery", false);
        mongoose.set("strictQuery", false);
        await mongoose.connect(config.mongo_uri)
        console.log("Database online!!!");
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos')
    }
}

