"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sectionControlle_1 = __importDefault(require("../controllers/companyController/sectionControlle"));
const sectionRoute = (0, express_1.Router)();
sectionRoute.post('/section', new sectionControlle_1.default().createSection);
sectionRoute.get('/sections', new sectionControlle_1.default().findAllSections);
exports.default = sectionRoute;
