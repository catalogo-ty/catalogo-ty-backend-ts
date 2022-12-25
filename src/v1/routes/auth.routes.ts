import { Router } from "express";
import { check } from "express-validator";
import { login } from "../../controllers/auth.controller";
import { validateFields } from "../../middlewares/validate-fields";

const router = Router();

router.post('/login',[
    check('email', 'El email obligatorio').not().isEmpty(),
    check('email', 'Formato de correo incorrecto').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields
], login)

export default router