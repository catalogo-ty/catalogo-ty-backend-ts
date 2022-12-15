import { Request, Response } from "express";
import * as userService from '../services/user.service';

export const getAllUsers = async ( req: Request, res: Response) => {

    const { limit = 5, from = 0 } = req.query

    const { total, users } = await userService.getAllUsers(+limit, +from);

    res.json({
        total,
        users
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


