"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const section_service_1 = require("../../services/section.service");
class sectionController {
    async createSection(req, res) {
        try {
            const { name, acronym, department, employee } = req.body;
            if (!name) {
                return res.status(http_status_codes_1.StatusCodes.OK).json({ erro: "O nome está vazio." });
            }
            const newSection = {
                name: name,
                acronym: acronym,
                department: department,
                employee: employee,
                section_createdAt: new Date()
            };
            const createSection = section_service_1.sectionService.create(newSection);
            await section_service_1.sectionService.save(createSection);
            res.status(http_status_codes_1.StatusCodes.OK).json(createSection);
        }
        catch (error) {
            console.log(error);
        }
    }
    async findAllSections(req, res) {
        const findAllSections = await section_service_1.sectionService.find({});
        res.status(http_status_codes_1.StatusCodes.OK).json(findAllSections);
    }
}
exports.default = sectionController;
