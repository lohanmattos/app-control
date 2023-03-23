import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { Empresa } from "../entities/company/company.entities";
import { departamentoService } from "../services/departament.service"; 

interface IDepartamento{
    nome: string,
    sigla: string
    empresaId: Empresa
}

class departamentoControllers{
    async criarDepartamento(req: Request, res: Response){
        const {nome, sigla, empresaId}:IDepartamento = req.body;

        if(!nome){
            return res.status(StatusCodes.OK).json({erro: "O nome está vazio."});
        }

        const novoDepartamento = {
            nome: nome,
            sigla: sigla,
            empresa: empresaId
        }

        const criarDepartamento = departamentoService.create(novoDepartamento);
        await departamentoService.save(novoDepartamento);

    
        res.status(StatusCodes.OK).json(criarDepartamento);
    }

    async listarDepartamento(req: Request, res: Response){

        const listarDepartamento = await departamentoService.find({
            //habilitar retorna a empresa que esta vinculado o departamento
            relations:{
                empresa: true,
            }
        })

        res.status(StatusCodes.OK).json(listarDepartamento);

    }
}

export default departamentoControllers