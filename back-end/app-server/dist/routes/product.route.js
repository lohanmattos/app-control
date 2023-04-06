"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/product/productController");
const productRoute = (0, express_1.Router)();
productRoute.get('/product', new productController_1.productController().findAllProduct);
productRoute.get('/product/:id', new productController_1.productController().findProduct);
exports.default = productRoute;
