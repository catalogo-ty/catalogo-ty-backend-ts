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

router.post('/',[
    check('name', 'El nombre es obligatorio').not().isEmpty(), // revisar que no este vacío
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(dbValidators.isValidEmail),
    check('password', 'La contraseña es requerida con mínimo de 6 caracteres').isLength({ min: 6 }),
    check('role').custom(dbValidators.isValidRole),
    validateFields
], createNewUser)

router.put('/:id', updateOneUser)

router.delete('/:id', deleteOneUser)


export default router