import { Request, Response, Router } from "express";
import { check } from "express-validator";
import { getAllCategories, getOneCategory } from "../../controllers/category.controller";
import * as dbValidators from "../../helpers/db-validators";
import { validateFields } from "../../middlewares/validate-fields";

const router = Router();

router.get('/', getAllCategories);

router.get('/:id',[
    check('id').custom(dbValidators.validCategoryId),
    validateFields
], getOneCategory);

router.post('/', (req: Request, res: Response) => {

});


/*
router.put('/:id', (req: Request, res: Response) => {

});

router.delete('/:id', (req: Request, res: Response) => {

}); */


export default router
