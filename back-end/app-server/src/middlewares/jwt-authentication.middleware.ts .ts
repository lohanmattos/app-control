import { Request, Response, NextFunction } from "express";
import ForbiddenError from "../errors/forbidden.error.models";
import JWT from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {

    try {
        //Pegando os dados pelo cabeçalho
        const authorizationHeader = req.headers['authorization'];
        //Verificando se não está vazio.
        if (!authorizationHeader) {
            return res.status(StatusCodes.FORBIDDEN).json({Error: "Credencias não informadas"})
        }

        //Separada o conteudo em duas const
        const [authorizationType, token] = authorizationHeader.split(' ');

        //Verifica o Tipo do Token
        if (authorizationType !== 'Bearer' || !token) {
            return res.status(StatusCodes.FORBIDDEN).json({Error: "Tipo de autenticação invalida"})       
        }

        try {
            //Verifica se o token e válido.
            const tokenPayload = JWT.verify(token, "my_secret_key");

            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                return res.status(StatusCodes.FORBIDDEN).json({Error: "Token Inválido"})       
            }

            //uuid do usuario
            const user = {
                id: tokenPayload.sub,
                username: tokenPayload.username
            };

            //add user ou corpo da requisição
            req.user = user;

            next();
        } catch (error) {
            return res.status(StatusCodes.FORBIDDEN).json({Error: error})       
        }

    } catch (error) {
        next(error);
    }
}

export default jwtAuthenticationMiddleware;