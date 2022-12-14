import dotenv from 'dotenv';
// config() leerá archivo .env, analizará el contenido, lo asignará a process.env.
dotenv.config();

export default {

  mongo_uri:  process.env.MONGO_URI || '',
  port: process.env.PORT || '8087',
  secretKeyJWT: process.env.SECRETORPRIVATEKEY || '',

  pathV1: {
    users: '/api/v1/users/',
    auth: '/api/v1/auth/',

  }

}