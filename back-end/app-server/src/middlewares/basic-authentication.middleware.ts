import console from "console";
import { Request, Response, NextFunction } from "express";
import DatabaseError from "../errors/dataBase.error.moldel";
import ForbiddenError from "../errors/forbidden.error.models";
import { userService } from "../services/user.service";

async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){

    try {
         //cria const com a informação do cabeçalho
         const authorizationHeader = req.headers["authorization"];

         //Verifica se esta vazio. 
         if(!authorizationHeader){
            throw new ForbiddenError("Credencias não informadas")
         }
         
         //Cria a const com a informação do cabeçalho, mapeando type e token
         const [authorizationType, token] = authorizationHeader.split(' ');

         //Verifica se o tipo do token é Basic 
         //e se o toke foi passado
         if (authorizationType !== 'Basic' || !token){
            throw new ForbiddenError("Tipo de autenticação invalida");           
         }
 
         //Decodifica o toke para utf8
         const tokenContent = Buffer.from(token, 'base64').toString('utf8');
         //Separa username e password do token
         const [username, password] = tokenContent.split(':');
         
         //Verifica se os dados não foram passados
         if (!username || !password){
             console.log("Credencias não preenchidas"); 
         }

         //Consulta se o username e password exitem no banco de dados.
         const user = await userService.findOne({
            where: { username: username, password: password}
         });

        if(!user){
            throw new DatabaseError("Usuario ou senha invalidos");       
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