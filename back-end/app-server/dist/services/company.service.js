"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyService = void 0;
const data_source_1 = require("../data-source");
const company_entities_1 = require("../entities/company/company.entities");
exports.companyService = data_source_1.AppDataSource.getRepository(company_entities_1.Company);
