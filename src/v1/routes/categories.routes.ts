import { Request, Response, Router } from "express";
import { getAllCategories } from "../../controllers/category.controller";

const router = Router();

router.get('/', getAllCategories);

router.get('/:id', (req: Request, res: Response) => {

});

/* router.post('/', (req: Request, res: Response) => {

});

router.put('/:id', (req: Request, res: Response) => {

});

router.delete('/:id', (req: Request, res: Response) => {

}); */


export default router
