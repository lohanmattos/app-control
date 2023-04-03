import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Department } from "../../entities/company/department.entities";
import { companyService } from "../../services/company.service";


interface ICompany{
    name: string,
    decription: string,
    acronym: string,
    departament: Department
    company_createdAt: Date
}


class companyController{    
    async createCompany(req:Request, res:Response){

        const {name, decription, acronym, departament}:ICompany = req.body;

        if(!name){
            return res.status(StatusCodes.OK).json({erro: "O nome está vazio."});
        }

        const newCompany:ICompany = {
            name: name,
            decription: decription,
            acronym: acronym,
            departament: departament,
            company_createdAt: new Date()
        }

        const createCompany = companyService.create(newCompany);
        await companyService.save(createCompany);

    
        res.status(StatusCodes.OK).json(createCompany);
    };

    async findAllCompany(req: Request, res: Response){
        
        const findAllCompany = await companyService.find({
            relations:{
                department: true
            }
        })

        res.status(StatusCodes.OK).json(findAllCompany);
    }

}

export default companyController