import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { departamentService } from "../../services/departament.service"; 
import empresaControllers from "./companyController";

interface IDepartamento{
    nome: string,
    sigla: string
    empresaId: empresaControllers
}

class departamentControllers{
    async criarDepartamento(req: Request, res: Response){
        const {nome, sigla, empresaId}:IDepartamento = req.body;

        if(!nome){
            return res.status(StatusCodes.OK).json({erro: "O nome está vazio."});
        }

        //const criarDepartamento = departamentService.create();
        //await departamentService.save();

    
        //res.status(StatusCodes.OK).json(criarDepartamento);
    }

    async listarDepartamento(req: Request, res: Response){

        const listarDepartamento = await departamentService.find({
            //habilitar retorna a empresa que esta vinculado o departamento

        })

        res.status(StatusCodes.OK).json(listarDepartamento);

    }
}

export default departamentControllers