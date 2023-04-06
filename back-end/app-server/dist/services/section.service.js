"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionService = void 0;
const data_source_1 = require("../data-source");
const section_entities_1 = require("../entities/company/section.entities");
exports.sectionService = data_source_1.AppDataSource.getRepository(section_entities_1.Section);
