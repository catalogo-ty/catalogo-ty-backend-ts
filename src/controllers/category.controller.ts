import { Request, Response } from "express";
import * as categoryService from '../services/category.service'

export const getAllCategories = async (req: Request, res: Response) => {
    
    const { limit, from } = req.params

    try {

    const { total, categories } = await categoryService.getAllCategories(+limit, +from)
    res.json({
        total,
        categories
    })
        
    } catch (error) {
        res.status(404).json({
            msg: 'No se pudo obtener las categorias'
        })
    }
}
