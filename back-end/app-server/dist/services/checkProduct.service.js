"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkProductService = void 0;
const data_source_1 = require("../data-source");
const checkProduct_1 = require("../entities/product/checkProduct");
exports.checkProductService = data_source_1.AppDataSource.getRepository(checkProduct_1.checkProduct);
