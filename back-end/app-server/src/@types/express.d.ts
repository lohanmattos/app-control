import { Usuario } from "../entities/usuario/Usuario"

declare module 'express-serve-static-core' {
    interface Request {
        user?: user
    }
}