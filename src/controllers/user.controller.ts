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

export const createNewUser = async (req: Request, res: Response) => {

    const user = req.body;

    const newUser = await userService.createNewUser(user);
    
    res.status(201).json(newUser)

}

export const updateOneUser = async (req: Request, res: Response) => {

    const { id } =  req.params
    const { __id, role ,google, ...resto } = req.body

    const userUpdated = await userService.updateOneUser(id, resto, resto.password)

    res.json(userUpdated)
}

export const deleteOneUser = (req: Request, res: Response) => {

    res.json({
        mgs: "Delete User"
    })
}


