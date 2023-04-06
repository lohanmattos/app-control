"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyController_1 = __importDefault(require("../controllers/companyController/companyController"));
const companyRoute = (0, express_1.Router)();
companyRoute.get('/company', new companyController_1.default().findAllCompany);
companyRoute.post('/company', new companyController_1.default().createCompany);
exports.default = companyRoute;
