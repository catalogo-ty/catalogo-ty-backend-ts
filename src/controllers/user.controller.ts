import { Request, Response } from "express";
import * as userService from '../services/user.service';

export const getAllUsers = async (req: Request, res: Response) => {

    const { limit = 5, from = 0 } = req.query

    const { total, users } = await userService.getAllUsers(+limit, +from);

    res.json({
        total,
        users
    })
}

export const getOneUser = async (req: Request, res: Response) => {

    const { id } = req.params

    const user = await userService.getOneUser(id)
    res.json(user)
}

export const createNewUser = (req: Request, res: Response) => {

    res.json({
        mgs: "Create a new user"
    })
}

export const updateOneUser = (req: Request, res: Response) => {

    res.json({
        mgs: "Update use"
    })
}

export const deleteOneUser = (req: Request, res: Response) => {

    res.json({
        mgs: "Delete User"
    })
}


