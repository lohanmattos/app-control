"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const company_service_1 = require("../../services/company.service");
class companyController {
    async createCompany(req, res) {
        const { name, decription, acronym, departament } = req.body;
        if (!name) {
            return res.status(http_status_codes_1.StatusCodes.OK).json({ erro: "O nome está vazio." });
        }
        const newCompany = {
            name: name,
            decription: decription,
            acronym: acronym,
            departament: departament,
            company_createdAt: new Date()
        };
        const createCompany = company_service_1.companyService.create(newCompany);
        await company_service_1.companyService.save(createCompany);
        res.status(http_status_codes_1.StatusCodes.OK).json(createCompany);
    }
    ;
    async findAllCompany(req, res) {
        const findAllCompany = await company_service_1.companyService.find({
            relations: {
                department: true
            }
        });
        res.status(http_status_codes_1.StatusCodes.OK).json(findAllCompany);
    }
}
exports.default = companyController;
