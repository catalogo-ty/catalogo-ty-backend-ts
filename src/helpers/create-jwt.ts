import jwt from 'jsonwebtoken'
import config from '../config'

export const createJwt = (uid: string = ''): Promise<string> => {

    return new Promise((resolve, reject) => {

        const payload = { uid }

        //Función sign recibe como parametros: payload, secret key, opciones y un callback 
        jwt.sign(payload, config.secretKeyJWT, { expiresIn: '2h' },
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('Error al generar JWT')
                    
                }else{
                    resolve( token! ) // retornar token
                }
            }
        )
    })
}