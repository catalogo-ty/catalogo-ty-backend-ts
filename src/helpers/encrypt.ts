import bcryptjs from "bcryptjs";

export const encryptPassword = (password: string) => {

    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
}