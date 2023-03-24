import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../errors/dataBase.error.moldel";
import ForbiddenError from "../errors/forbidden.error.models";
import { userService } from "../services/user.service";
import bcrypt from "bcrypt";

async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){

    try {
         //cria const com a informação do cabeçalho
         const authorizationHeader = req.headers["authorization"];

         //Verifica se esta vazio. 
         if(!authorizationHeader){
            return res.status(StatusCodes.FORBIDDEN).json({Error: "Credencias não informadas"})
        }
         
         //Cria a const com a informação do cabeçalho, mapeando type e token
         const [authorizationType, token] = authorizationHeader.split(' ');

         //Verifica se o tipo do token é Basic 
         //e se o toke foi passado
         if (authorizationType !== 'Basic' || !token){
            return res.status(StatusCodes.FORBIDDEN).json({Error: "Tipo de autenticação invalida"})       
         }
 
         //Decodifica o toke para utf8
         const tokenContent = Buffer.from(token, 'base64').toString('utf8');
         //Separa username e password do token
         const [username, password] = tokenContent.split(':');
         
         //Verifica se os dados não foram passados
         if (!username || !password){
            return res.status(StatusCodes.FORBIDDEN).json({Error: "Credencias não preenchidas"}) 
         }

         //Consulta se o username exitem no banco de dados.
         const user = await userService.findOne({
            where: { username: username}
         });

         //Compara a senha do user com a criptografia
         const isPasswordValid = await bcrypt.compare(password, String(user?.password))

        if(!isPasswordValid){
            return res.status(StatusCodes.FORBIDDEN).json({Error: "Usuario ou senha invalidos"}) 
        }

        //No interface Request nao existe essa const, vamos add
        //atraves de uma extensao de types do express na pasta @types
        req.user = user;
        
        //chama a proxima funcão
        next();

    } catch (error) {
        next(error);
    }
}

export default basicAuthenticationMiddleware;