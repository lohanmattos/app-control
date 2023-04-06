"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const employee_service_1 = require("../../services/employee.service");
class employeeController {
    async createEmployee(req, res) {
        try {
            const { first_name, last_name, cpf, user, section } = req.body;
            if (!cpf || cpf.length < 11) {
                return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ erro: "Número de CPF inválido" });
            }
            const dataNow = new Date();
            const newEmployee = {
                first_name: first_name,
                last_name: last_name,
                cpf: cpf,
                user: user,
                section: section,
                createdAt: new Date()
            };
            const createEmployee = employee_service_1.employeeService.create(newEmployee);
            await employee_service_1.employeeService.save(newEmployee);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(createEmployee);
            console.log(newEmployee);
        }
        catch (error) {
            return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ erro: "User ou Cpf Já Existe" });
        }
    }
    async getEmployee(req, res) {
        const getAllEmployee = await employee_service_1.employeeService.find({
            relations: {
                section: true
            }
        });
        res.status(http_status_codes_1.StatusCodes.OK).json(getAllEmployee);
    }
}
exports.default = employeeController;
