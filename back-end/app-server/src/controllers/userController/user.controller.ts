import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../../entities/user/user.entities";
import { userService } from "../../services/user.service";

interface IUser{
    id: number
    username: string,
    password: string,
    email: string
}

class userController{    
    //---------------------------------------------------//
    async createUser(req:Request, res:Response){

        //Pega os dados vindo pela req
        const {username, password, email}:IUser = req.body;

        //Verifica se o nome não esta vazio
        if(!username || username.length < 3){
            return res.status(StatusCodes.OK).json({erro: "O nome está vazio."});
        }

        //criar um novo usuario
        const newUser = {
            username: username,
            password: password,
            email: email,
        }

        //envia o novo usuario para o service do usuario
        const createUser = userService.create(newUser);
        
        //salva a alteração no banco
        await userService.save(newUser);

        //retorna o usuario criado
        res.status(StatusCodes.OK).json(createUser);
    };

    //-----------------------------------------------------//
    async getUsers(req: Request, res: Response){
        //busca todos os usuarios no banco
        const getAllUser = await userService.find()

        //retorna os usuarios encontrados
        res.status(StatusCodes.OK).json(getAllUser);
    }

}

export default userController