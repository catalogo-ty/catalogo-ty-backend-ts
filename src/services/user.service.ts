import User from "../models/user";

export const getAllUsers = async ( limit: number, from: number ) => {

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