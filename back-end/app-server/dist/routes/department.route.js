"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departmentController_1 = __importDefault(require("../controllers/companyController/departmentController"));
const departamentRoute = (0, express_1.Router)();
departamentRoute.get('/department', new departmentController_1.default().findAllDepartments);
departamentRoute.post('/department', new departmentController_1.default().createDepartment);
exports.default = departamentRoute;
