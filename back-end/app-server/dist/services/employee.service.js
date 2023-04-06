"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeService = void 0;
const data_source_1 = require("../data-source");
const employee_entities_1 = require("../entities/company/employee.entities");
exports.employeeService = data_source_1.AppDataSource.getRepository(employee_entities_1.Employee);
