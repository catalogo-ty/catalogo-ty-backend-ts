import { Router } from "express";
import { check } from "express-validator";
import {
    createNewUser,
    deleteOneUser,
    getAllUsers,
    getOneUser,
    updateOneUser } from "../../controllers/user.controller";
import * as dbValidators from "../../helpers/db-validators";
import { validateFields } from "../../middlewares/validate-fields";

const router = Router();

router.get('/', getAllUsers)

router.get('/:id',[
    check('id').custom(dbValidators.validUserId),
    validateFields
], getOneUser)

router.post('/', createNewUser)

router.put('/:id', updateOneUser)

router.delete('/:id', deleteOneUser)


export default router