import bcryptjs from "bcryptjs";

export const encryptPassword = (password: string) => {

    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
}

export const comparePassword = ( password: string, userPassword: string) => {
    return bcryptjs.compareSync(password, userPassword);
}