import { NextFunction, Request, Response } from "express";

export const isAdminRole = (req: Request, res: Response, next: NextFunction) => {

    /*Este middleware tendrá a disposición al usuario autenticado
    que estará presente en el request*/
    if (!req.authUser) {
        return res.status(500).send({
            msg: 'Usuario no existe en la base de datos'
        })
    }

    const { name, role } = req.authUser

    if (role !== 'ADMIN_ROLE') {
        return res.status(401).send({
            msg: `Usuario ${name} no tiene rol de administrador`
        })
    }

    next();
}