import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes'
import { departmentService } from "../../services/department.service"; 
import { Company } from "../../entities/company/company.entities";

interface IDepartment{
    name: string,
    acronym: string
    company: Company
    departament_createdAt: Date
}

class departmentController{
    async createDepartment(req: Request, res: Response){
        const {name, acronym, company}:IDepartment = req.body;

        if(!name){
            return res.status(StatusCodes.OK).json({erro: "O nome está vazio."});
        }

        const newDepartament:IDepartment = {
            name: name,
            acronym: acronym,
            company: company,
            departament_createdAt: new Date()
        }

        const createDepartment = departmentService.create(newDepartament);
        await departmentService.save(createDepartment);

    
        res.status(StatusCodes.OK).json(createDepartment);
    }

    async findAllDepartments(req: Request, res: Response){

        const findAllDepartments = await departmentService.find({
            //habilitar retorna a empresa que esta vinculado o departamento
            relations: {
                section: true,
            }
        })

        res.status(StatusCodes.OK).json(findAllDepartments);

    }
}

export default departmentController