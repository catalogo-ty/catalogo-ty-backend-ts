/*
Extender la clase Request de express para que acepte la adición de otras propiedades
Link:
  https://blog.logrocket.com/extend-express-request-object-typescript/
  https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
*/

import { IUser } from "../../interfaces/user.interface";

// to make the file a module and avoid the TypeScript error
export {}

declare global {
  namespace Express {
    export interface Request {
      authUser?: IUser;
    }
  }
}