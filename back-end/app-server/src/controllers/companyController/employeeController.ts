import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Section } from "../../entities/company/section.entities";
import { User } from "../../entities/user/user.entities";
import { employeeService } from "../../services/employee.service";

interface IEmployee {
    id: number
    first_name: string,
    last_name: string,
    cpf: string
    user: User
    section: Section
    createdAt: Date
}

class employeeController {

    //função para criar novo employee
    async createEmployee(req: Request, res: Response) {

        try {
            //Pega os dados vindo pela req
            const { first_name, last_name, cpf, user, section }: IEmployee = req.body;


            //Verifica se o nome não esta vazio
            if (!cpf || cpf.length < 11) {
                return res.status(StatusCodes.CONFLICT).json({ erro: "Número de CPF inválido" });
            }

            //criar um novo usuario
            const newEmployee = {
                first_name: first_name,
                last_name: last_name,
                cpf: cpf,
                user: user,
                section: section
            }

            //envia o novo usuario para o service do usuario
            const createEmployee = employeeService.create(newEmployee);

            //salva a alteração no banco
            await employeeService.save(newEmployee);

            //retorna o usuario criado
            res.status(StatusCodes.CREATED).json(createEmployee);

            console.log(newEmployee);

        } catch (error) {
            return res.status(StatusCodes.CONFLICT).json({ erro: "User ou Cpf Já Existe" });
        }

    }//finish createEmployee

    async getEmployee(req: Request, res: Response) {
        //busca todos os usuarios no banco
        const getAllEmployee = await employeeService.find({
            relations: {
                section: true
            }
        })

        //retorna os usuarios encontrados
        res.status(StatusCodes.OK).json(getAllEmployee);
    }

}

export default employeeController