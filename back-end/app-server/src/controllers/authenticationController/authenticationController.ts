import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import JWT, { SignOptions } from "jsonwebtoken";
import { userService } from "../../services/user.service";

interface IUser {
    id: number,
    username: string
}

class authenticationController {

    async createToken(req: Request, res: Response) {
        /*
        sub (subject) = Entidade à quem o token pertence, normalmente o ID do usuário;
        iss (issuer) = Emissor do token;
        exp (expiration) = Timestamp de quando o token irá expirar;
        iat (issued at) = Timestamp de quando o token foi criado;
        aud (audience) = Destinatário do token, representa a aplicação que irá usá-lo.    
        */

        try {
            //pega o usuario pela request
            const user: IUser = req.user;

            //Verifica se o usuario existe
            if (!user) {
                return res.status(StatusCodes.FORBIDDEN).json({Error: "Usuario não informado"}) 
            }

            //Conteudo do token
            const jwtPayload = { username: user.username };

            //id do user
            const jwtOptions: SignOptions = { subject: `${user.id}` };
            //Chave privada
            const jwtSecret = "my_secret_key";

            //Cria a key token
            const jwt = JWT.sign(jwtPayload, jwtSecret, jwtOptions);

            //return o token 
            res.status(StatusCodes.OK).json({ user, jwt });



        } catch (error) {
            return res.status(StatusCodes.FORBIDDEN).json({Error: error});
        }

    }

    async validateToken(req: Request, res: Response) {
        const user: IUser = req.user

        //Verifica se o token ja existe
        const isToken = await userService.findOne({
            where: {id: user.id}, relations:{
                employee:{
                    section: true
                }
            }
        }); 

        //const finlUser = await tokenService.findBy({user: req.user})
        res.status(StatusCodes.OK).json({ isToken });
    }

}

export default authenticationController