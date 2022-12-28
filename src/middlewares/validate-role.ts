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

// Operador rest para generar un array de los parámetros
export const validRole = (...roles: string[] ) =>{

    return (req: Request, res: Response, next: NextFunction) => {
        // Si no tiene rol admin o ventas no podrá realizar petición
        if (!roles.includes(req.authUser?.role!))
            return res.status(401).send({
                msg: `Usuario no tiene rol válido`
            })

        next();
    }
}