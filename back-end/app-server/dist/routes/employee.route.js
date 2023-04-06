"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = __importDefault(require("../controllers/companyController/employeeController"));
const employeeRoute = (0, express_1.Router)();
employeeRoute.get('/employee', new employeeController_1.default().getEmployee);
employeeRoute.post('/employee', new employeeController_1.default().createEmployee);
exports.default = employeeRoute;
