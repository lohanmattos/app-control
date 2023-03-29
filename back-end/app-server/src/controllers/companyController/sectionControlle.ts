import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Department } from "../../entities/company/department.entities";
import { Employee } from "../../entities/company/employee.entities";
import { sectionService } from "../../services/section.service";

interface ISection {
    id?: number,
    name: string,
    acronym: string,
    department: Department
    employee: Employee[]
    section_createdAt: Date
}

class sectionController {

    async createSection(req: Request, res: Response) {
        try {
            const { name, acronym, department, employee }: ISection = req.body;

            if (!name) {
                return res.status(StatusCodes.OK).json({ erro: "O nome está vazio." });
            }

            const newSection: ISection = {
                name: name,
                acronym: acronym,
                department: department,
                employee: employee,
                section_createdAt: new Date()
            }

            const createSection = sectionService.create(newSection);
            await sectionService.save(createSection);

            res.status(StatusCodes.OK).json(createSection);

        } catch (error) {
            console.log(error);
        }
    }

    async findAllSections(req: Request, res: Response) {
        const findAllSections = await sectionService.find({})

        //retorna os usuarios encontrados
        res.status(StatusCodes.OK).json(findAllSections);
    }


}

export default sectionController