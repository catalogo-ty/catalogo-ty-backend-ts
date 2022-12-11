import { Router } from "express";
import {
    createNewUser,
    deleteOneUser,
    getAllUsers,
    getOneUser,
    updateOneUser } from "../controllers/user.controller";

const router = Router();

router.get('/', getAllUsers)

router.get('/:id', getOneUser)

router.post('/', createNewUser)

router.put('/:id', updateOneUser)

router.delete('/:id', deleteOneUser)


export default router