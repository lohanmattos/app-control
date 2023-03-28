import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { companyService } from "../../services/company.service";


interface IEmpresa{
    nome: string,
    descricao: string,
    sigla: string
}

class companyController{    
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

        //const criarEmpresa = companyService.create(novaEmpresa);
        //await companyService.save(novaEmpresaa);

    
        //res.status(StatusCodes.OK).json(criarEmpresa);
    };

    async listaEmpresa(req: Request, res: Response){

        const listarEmpresas = await companyService.find()

        res.status(StatusCodes.OK).json(listarEmpresas);
    }

}

export default companyController