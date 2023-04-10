import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { userService } from "../../services/user.service";
import 'dotenv/config'
import { User } from "../../entities/user/user.entities";

interface IUser {
    id: number
    username: string,
    password: string,
    email: string
}

class userController {
    //---------------------------------------------------//
    async createUser(req: Request, res: Response) {

        try {
            //Pega os dados vindo pela req
            const { username, password, email }: IUser = req.body;

            //Encliptar a senha do username
            const passwordEnclipt = await bcrypt.hash(password, Number(process.env.KEY));

            //Verifica se o nome não esta vazio
            if (!username || username.length < 3) {
                return res.status(StatusCodes.CONFLICT).json({ erro: "O nome está vazio." });
            }

            const isExist = await userService.findOne({
                where: {
                    username: username
                }
            })

            //Verifica se o username já existe
            if (!isExist?.username) {
                //Verifica se o email já existe
                if (!isExist?.email) {

                    //criar um novo usuario
                    const newUser = {
                        username: username,
                        password: passwordEnclipt,
                        email: email,
                    }

                    //envia o novo usuario para o service do usuario
                    const createUser = userService.create(newUser);

                    //salva a alteração no banco
                    await userService.save(newUser);

                    //retorna o usuario criado
                    res.status(StatusCodes.CREATED).json(newUser);
                }
            } else {
                return res.status(StatusCodes.CONFLICT).json({ Erro: "Usuário já Existe." });
            }

        } catch (error) {
            return res.status(StatusCodes.CONFLICT).json({ Error: "E-mail já Existe" });
        }
    };

    //-----------------------------------------------------//
    async findAllUsers(req: Request, res: Response) {
        //busca todos os usuarios no banco
        const findAllUsers = await userService.find({
            relations: {
                employee: {
                    section: {
                        department: true
                    }
                },
            }
        })

        //retorna os usuarios encontrados
        res.status(StatusCodes.OK).json(findAllUsers);
    }
    //-----------------------------------------------------//

    async updateUser(req: Request, res: Response) {

        try {
            //pego o id do user pela url
            const idUser = req.params.id;

            //Pega os dados vindo pela req
            const { password, email }: IUser = req.body;

            //Encliptar a senha do username
            const passwordEnclipt = await bcrypt.hash(password, Number(process.env.KEY));

            const isUserExist = await userService.findOneBy({id: Number(idUser)})
            
            console.log(isUserExist)

            if (isUserExist) {
                const userEdit = await userService
                    .createQueryBuilder()
                    .update(User)
                    .set({ password: passwordEnclipt, email: email })
                    .where("id = :id", { id: idUser })
                    .execute()

                return res.status(StatusCodes.OK).json({ mesasagem: "Usuario editado com sucesso.", userEdit});
            }
            return res.status(StatusCodes.CONFLICT).json({ Error: "Usuario não existe" });

        } catch (error) {
            return res.status(StatusCodes.CONFLICT).json({ Error: error });
        }
    }

    async findById(req: Request, res: Response){
        try {
             //pego o id do user pela url
             const idUser = Number(req.params.id);

             const results = await userService.findOneBy({id: idUser});
            
             return res.status(StatusCodes.OK).json(results);

        } catch (error) {
            console.error(error);
        }

   
    }


}

export default userController