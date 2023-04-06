"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentService = void 0;
const data_source_1 = require("../data-source");
const department_entities_1 = require("../entities/company/department.entities");
exports.departmentService = data_source_1.AppDataSource.getRepository(department_entities_1.Department);
