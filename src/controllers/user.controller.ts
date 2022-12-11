import { Request, Response } from "express";

export const getAllUsers = ( req: Request, res: Response) => {

    res.json({
        mgs: "GET All Users"
    })
}

export const getOneUser = ( req: Request, res: Response) => {

    res.json({
        mgs: "GET One User"
    })
}

export const createNewUser = ( req: Request, res: Response) => {

    res.json({
        mgs: "Create a new user"
    })
}

export const updateOneUser = ( req: Request, res: Response) => {

    res.json({
        mgs: "Update user"
    })
}

export const deleteOneUser = ( req: Request, res: Response) => {

    res.json({
        mgs: "Delete User"
    })
}


