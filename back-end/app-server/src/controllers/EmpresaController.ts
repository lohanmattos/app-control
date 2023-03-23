import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { empresaService } from "../services/company.service";


interface IEmpresa{
    nome: string,
    descricao: string,
    sigla: string
}

class empresaControllers{    
    async criarEmpresa(req:Request, res:Response){

        const {nome, descricao, sigla}:IEmpresa = req.body;

        if(!nome){
            return res.status(StatusCodes.OK).json({erro: "O nome está vazio."});
        }

        const novaEmpresa = {
            nome: nome,
            descricao: descricao,
            sigla: sigla
        }

        const criarEmpresa = empresaService.create(novaEmpresa);
        await empresaService.save(novaEmpresa);

    
        res.status(StatusCodes.OK).json(criarEmpresa);
    };

    async listaEmpresa(req: Request, res: Response){

        const listarEmpresas = await empresaService.find({
            relations:{
                departamentos: true
            },
        })

        res.status(StatusCodes.OK).json(listarEmpresas);
    }

}

export default empresaControllers