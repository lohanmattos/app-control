"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const data_source_1 = require("../data-source");
const product_entities_1 = require("../entities/product/product.entities");
exports.productService = data_source_1.AppDataSource.getRepository(product_entities_1.Product);
