"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const department_service_1 = require("../../services/department.service");
class departmentController {
    async createDepartment(req, res) {
        const { name, acronym, company } = req.body;
        if (!name) {
            return res.status(http_status_codes_1.StatusCodes.OK).json({ erro: "O nome está vazio." });
        }
        const newDepartament = {
            name: name,
            acronym: acronym,
            company: company,
            departament_createdAt: new Date()
        };
        const createDepartment = department_service_1.departmentService.create(newDepartament);
        await department_service_1.departmentService.save(createDepartment);
        res.status(http_status_codes_1.StatusCodes.OK).json(createDepartment);
    }
    async findAllDepartments(req, res) {
        const findAllDepartments = await department_service_1.departmentService.find({
            relations: {
                section: true,
            }
        });
        res.status(http_status_codes_1.StatusCodes.OK).json(findAllDepartments);
    }
}
exports.default = departmentController;
